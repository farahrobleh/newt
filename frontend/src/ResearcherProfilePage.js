import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

// ... existing styled components ...

const ProjectSection = styled(Section)`
  margin-top: 20px;
`;

const ProjectCard = styled.div`
  background: rgba(127, 191, 127, 0.1);
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
`;

const ResearcherProfilePage = () => {
  const { researcherId } = useParams();
  const { applicants } = useApplicants();
  const [researcherProjects, setResearcherProjects] = useState([]);

  // Filter applicants for this researcher
  const researcherApplicants = applicants.filter(
    applicant => applicant.researcherId === researcherId
  );

  // Hardcoded data for Dr. Elena Vasquez
  const researcherData = researcherId === 'elena-vasquez' ? {
    name: "Dr. Elena Vasquez",
    title: "Senior Research Scientist",
    institution: "Memorial Cancer Research Center",
    expertise: ["Immunotherapy", "Cancer Biology", "Clinical Trials"],
    bio: "Dr. Elena Vasquez is a leading expert in cancer immunotherapy...",
  } : null;

  useEffect(() => {
    // Fetch all projects and filter for this researcher
    const allProjects = [
      ...exampleProjects,
      ...cancerProjects,
      ...influenzaProjects,
      ...coronavirusProjects,
      ...measlesProjects,
      ...sickleCellProjects
    ];

    const filteredProjects = allProjects.filter(project => 
      project.postedBy === researcherData?.name
    );

    setResearcherProjects(filteredProjects);
  }, [researcherId, researcherData]);

  if (!researcherData) {
    return <Container>Researcher not found</Container>;
  }

  return (
    <Container>
      <ProfileHeader>
        <Title>{researcherData.name}</Title>
        <SubTitle>{researcherData.title}</SubTitle>
        <Institution>{researcherData.institution}</Institution>
      </ProfileHeader>

      <Section>
        <SectionTitle>Expertise</SectionTitle>
        <List>
          {researcherData.expertise.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </List>
      </Section>

      <Section>
        <SectionTitle>Biography</SectionTitle>
        <Text>{researcherData.bio}</Text>
      </Section>

      <ProjectSection>
        <SectionTitle>Research Projects</SectionTitle>
        {researcherProjects.map((project, index) => (
          <ProjectCard key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </ProjectSection>

      <Section>
        <SectionTitle>Current Applicants</SectionTitle>
        {researcherApplicants.length > 0 ? (
          <ApplicantsList>
            {researcherApplicants.map((applicant, index) => (
              <ApplicantItem key={index}>
                <ApplicantName>{applicant.applicantName}</ApplicantName>
                <ApplicantProject>{applicant.projectTitle}</ApplicantProject>
                <ApplicantStatus>{applicant.status}</ApplicantStatus>
              </ApplicantItem>
            ))}
          </ApplicantsList>
        ) : (
          <Text>No current applicants</Text>
        )}
      </Section>
    </Container>
  );
};

export default ResearcherProfilePage;