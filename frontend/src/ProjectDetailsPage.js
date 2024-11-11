import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useApplicants } from './context/ApplicantContext';
import styled from 'styled-components';
import axios from 'axios';
import { 
  exampleProjects, 
  cancerProjects, 
  influenzaProjects, 
  coronavirusProjects, 
  measlesProjects, 
  sickleCellProjects 
} from './projectData';

const Container = styled.div`
  max-width: 800px;
  margin: 120px auto 40px;
  padding: 40px;
  background-color: #1a1a1a;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  color: #ffffff;
`;

const Title = styled.h1`
  color: #7fbf7f;
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

const ApplyButton = styled.button`
  background-color: #7fbf7f;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6ca86c;
  }
`;

const ResearcherLink = styled(Link)`
  color: #7fbf7f;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const { addApplicant } = useApplicants();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const decodedId = decodeURIComponent(id);
    const allProjects = [
      ...cancerProjects,
      ...influenzaProjects,
      ...coronavirusProjects,
      ...measlesProjects,
      ...sickleCellProjects
    ];
    
    const foundProject = allProjects.find(p => 
      p.title === decodedId || p.id === decodedId
    );
    
    if (foundProject) {
      setProject(foundProject);
    }
  }, [id]);

  const handleApply = () => {
    if (project) {
      const dummyApplicant = {
        name: "John Doe",
        email: "johndoe@example.com",
        projectTitle: project.title,
        appliedDate: new Date().toISOString(),
        status: "Pending",
        researcherId: project.researcherId
      };

      addApplicant(dummyApplicant);
      history.push('/application-confirmation');
    }
  };

  if (!project) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <Title>{project.title}</Title>
      
      <Section>
        <SectionTitle>Posted By</SectionTitle>
        {project.postedBy === "Dr. Elena Vasquez" ? (
          <ResearcherLink to={`/researcher-public-profile/${project.researcherId}`}>
            {project.postedBy}
          </ResearcherLink>
        ) : (
          <p>{project.postedBy}</p>
        )}
        <p>{project.institution}</p>
      </Section>

      <Section>
        <SectionTitle>Job Title</SectionTitle>
        <p>{project.jobTitle}</p>
      </Section>

      <Section>
        <SectionTitle>Project Summary</SectionTitle>
        {renderContent(project.projectSummary)}
      </Section>

      <Section>
        <SectionTitle>Role Details</SectionTitle>
        {renderContent(project.roleDetails)}
      </Section>

      <Section>
        <SectionTitle>Compensation</SectionTitle>
        <p>{project.compensation}</p>
      </Section>

      <Section>
        <SectionTitle>Project Timeline</SectionTitle>
        {typeof project.projectTimeline === 'object' ? (
          <>
            <p>Start Date: {project.projectTimeline.start}</p>
            <p>End Date: {project.projectTimeline.end}</p>
          </>
        ) : (
          <p>{project.projectTimeline}</p>
        )}
      </Section>

      <Section>
        <SectionTitle>Role Timeline</SectionTitle>
        {typeof project.roleTimeline === 'object' ? (
          <>
            <p>Start Date: {project.roleTimeline.start}</p>
            <p>End Date: {project.roleTimeline.end}</p>
          </>
        ) : (
          <p>{project.roleTimeline}</p>
        )}
      </Section>

      <Section>
        <SectionTitle>Qualifications</SectionTitle>
        {renderContent(project.qualifications)}
      </Section>

      {project.additionalInfo && (
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