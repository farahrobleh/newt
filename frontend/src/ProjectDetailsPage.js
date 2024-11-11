import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useApplicants } from './context/ApplicantContext';
import styled from 'styled-components';
import { 
  exampleProjects, 
  cancerProjects, 
  influenzaProjects, 
  coronavirusProjects, 
  measlesProjects, 
  sickleCellProjects 
} from './projectData';
import axios from 'axios';

const Container = styled.div`
  max-width: 800px;
  margin: 120px auto;
  padding: 20px;
  color: #ffffff;
`;

const Section = styled.div`
  margin: 30px 0;
  padding: 20px;
  background-color: rgba(127, 191, 127, 0.1);
  border-radius: 10px;
`;

const Title = styled.h1`
  color: #7fbf7f;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  color: #7fbf7f;
  margin-bottom: 10px;
`;

const ResearcherLink = styled(Link)`
  color: #7fbf7f;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ApplyButton = styled.button`
  background-color: #7fbf7f;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #6ca86c;
  }
`;

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const { addApplicant } = useApplicants();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      try {
        setLoading(true);
        const decodedId = decodeURIComponent(id);
        
        // First try to find in local data
        const allProjects = [
          ...cancerProjects,
          ...influenzaProjects,
          ...coronavirusProjects,
          ...measlesProjects,
          ...sickleCellProjects
        ];
        
        const localProject = allProjects.find(p => 
          p.title === decodedId || p.id === decodedId
        );
        
        if (localProject) {
          setProject(localProject);
        } else {
          // Try to fetch from API
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects/${id}`);
          setProject(response.data);
        }
      } catch (error) {
        console.error('Error loading project:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [id]);

  const handleApply = () => {
    if (project) {
      const dummyApplicant = {
        applicantName: "John Doe",
        projectTitle: project.title,
        status: "Pending",
        researcherId: project.researcherId || 'elena-vasquez'
      };

      addApplicant(dummyApplicant);
      history.push('/application-confirmation');
    }
  };

  const ContentSection = styled.div`
    margin: 15px 0;
  `;

  if (loading) {
    return (
      <Container>
        <p>Loading project details...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <p>Error loading project: {error}</p>
      </Container>
    );
  }

  if (!project) {
    return (
      <Container>
        <p>Project not found</p>
      </Container>
    );
  }

  return (
    <Container>
      <Title>{project?.title}</Title>
      
      <ContentSection>
        <p><strong>Posted By:</strong> {' '}
          {project?.postedBy === "Dr. Elena Vasquez" ? (
            <ResearcherLink to="/researcher-public-profile/elena-vasquez">
              {project.postedBy}
            </ResearcherLink>
          ) : (
            project?.postedBy
          )}
        </p>
        <p><strong>Institution:</strong> {project?.institution}</p>
        <p><strong>Job Title:</strong> {project?.jobTitle}</p>
      </ContentSection>

      <Section>
        <SectionTitle>Project Summary</SectionTitle>
        <p>{project?.projectSummary || project?.description}</p>
      </Section>

      <Section>
        <SectionTitle>Role Details</SectionTitle>
        {Array.isArray(project?.roleDetails) ? (
          <ul>
            {project.roleDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        ) : (
          <p>{project?.roleDetails}</p>
        )}
      </Section>

      <Section>
        <SectionTitle>Compensation</SectionTitle>
        <p>{project?.compensation}</p>
      </Section>

      <Section>
        <SectionTitle>Timeline</SectionTitle>
        {project?.projectTimeline && typeof project.projectTimeline === 'object' ? (
          <>
            <p><strong>Project:</strong> {project.projectTimeline.start} - {project.projectTimeline.end}</p>
            {project.roleTimeline && (
              <p><strong>Role:</strong> {project.roleTimeline.start} - {project.roleTimeline.end}</p>
            )}
          </>
        ) : (
          <p>{project?.projectTimeline}</p>
        )}
      </Section>

      <Section>
        <SectionTitle>Qualifications</SectionTitle>
        {Array.isArray(project?.qualifications) ? (
          <ul>
            {project.qualifications.map((qual, index) => (
              <li key={index}>{qual}</li>
            ))}
          </ul>
        ) : (
          <p>{project?.qualifications}</p>
        )}
      </Section>

      {project?.additionalInfo && (
        <Section>
          <SectionTitle>Additional Information</SectionTitle>
          <p>{project.additionalInfo}</p>
        </Section>
      )}

      <ApplyButton onClick={handleApply}>
        Apply to Research Project
      </ApplyButton>
    </Container>
  );
};

export default ProjectDetailsPage;