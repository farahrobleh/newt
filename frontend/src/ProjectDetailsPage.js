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
        applicantName: "John Doe",
        projectTitle: project.title,
        status: "Pending",
        researcherId: project.researcherId || 'elena-vasquez'
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
          <ResearcherLink to="/researcher-public-profile/elena-vasquez">
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
        <p>{project.summary || project.projectSummary}</p>
      </Section>

      <Section>
        <SectionTitle>Role Details</SectionTitle>
        {Array.isArray(project.roleDetails) ? (
          <ul>
            {project.roleDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        ) : (
          <p>{project.roleDetails}</p>
        )}
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
        <SectionTitle>Qualifications</SectionTitle>
        {Array.isArray(project.qualifications) ? (
          <ul>
            {project.qualifications.map((qual, index) => (
              <li key={index}>{qual}</li>
            ))}
          </ul>
        ) : (
          <p>{project.qualifications}</p>
        )}
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