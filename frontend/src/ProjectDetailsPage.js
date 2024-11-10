import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  max-width: 800px;
  margin: 120px auto 40px;
  padding: 40px;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #333;
`;

const Title = styled.h1`
  color: #4a7a4a;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: #7fbf7f;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const baseUrl = process.env.REACT_APP_API_URL.replace(/\/+$/, '');
        const response = await axios.get(`${baseUrl}/api/projects/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container>Error: {error}</Container>;
  if (!project) return <Container>Project not found</Container>;

  return (
    <Container>
      <Title>{project.title}</Title>
      
      <Section>
        <SectionTitle>Posted By</SectionTitle>
        <p>{project.postedBy}</p>
      </Section>

      <Section>
        <SectionTitle>Job Title</SectionTitle>
        <p>{project.jobTitle}</p>
      </Section>

      <Section>
        <SectionTitle>Project Summary</SectionTitle>
        <p>{project.projectSummary}</p>
      </Section>

      <Section>
        <SectionTitle>Role Details</SectionTitle>
        <p>{project.roleDetails}</p>
      </Section>

      <Section>
        <SectionTitle>Compensation</SectionTitle>
        <p>{project.compensation}</p>
      </Section>

      <Section>
        <SectionTitle>Project Timeline</SectionTitle>
        <p>{project.projectTimeline}</p>
      </Section>

      <Section>
        <SectionTitle>Role Timeline</SectionTitle>
        <p>{project.roleTimeline}</p>
      </Section>

      <Section>
        <SectionTitle>Qualifications</SectionTitle>
        <p>{project.qualifications}</p>
      </Section>

      {project.additionalInfo && (
        <Section>
          <SectionTitle>Additional Information</SectionTitle>
          <p>{project.additionalInfo}</p>
        </Section>
      )}
    </Container>
  );
};

export default ProjectDetailsPage;