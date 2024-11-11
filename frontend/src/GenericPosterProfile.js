import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useApplicants } from './context/ApplicantContext.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  max-width: 800px;
  margin: 120px auto 40px;
  padding: 40px;
  background-color: rgba(127, 191, 127, 0.1);
  border-radius: 10px;
  color: #ffffff;
`;

const Title = styled.h1`
  color: #7fbf7f;
  margin-bottom: 30px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: #7fbf7f;
  font-size: 1.2rem;
  margin-bottom: 15px;
`;

const Button = styled.button`
  background-color: #7fbf7f;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6ca86c;
  }
`;

const ProjectLink = styled(Link)`
  color: #7fbf7f;
  text-decoration: none;
  display: block;
  margin: 10px 0;
  &:hover {
    text-decoration: underline;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 20px auto;
  display: block;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  margin: 10px 0;
`;

const ApplicantsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ApplicantItem = styled.div`
  background: rgba(127, 191, 127, 0.1);
  padding: 15px;
  border-radius: 5px;
`;

const ApplicantName = styled.h3`
  color: #7fbf7f;
  margin-bottom: 5px;
`;

const ApplicantProject = styled.p`
  color: #ffffff;
  margin-bottom: 5px;
`;

const ApplicantStatus = styled.p`
  color: #7fbf7f;
  font-weight: bold;
`;

const Text = styled.p`
  color: #ffffff;
`;

const GenericPosterProfile = () => {
  const history = useHistory();
  const { applicants } = useApplicants();
  const userEmail = localStorage.getItem('userEmail');

  // Filter applicants for this user's projects
  const userApplicants = applicants.filter(
    applicant => applicant.researcherEmail === userEmail
  );

  const handleCreateProject = () => {
    history.push('/create-project');
  };

  return (
    <Container>
      <Title>Welcome, {userEmail}</Title>
      <Section>
        <SectionTitle>Getting Started</SectionTitle>
        <ProjectList>
          <ProjectItem>Complete your profile information</ProjectItem>
          <ProjectItem>Post your first research project</ProjectItem>
          <ProjectItem>Connect with potential candidates</ProjectItem>
        </ProjectList>
      </Section>
      
      <Section>
        <Button onClick={handleCreateProject}>
          <FontAwesomeIcon icon={faPlus} /> Create New Project
        </Button>
      </Section>

      <Section>
        <SectionTitle>Current Applicants</SectionTitle>
        {userApplicants.length > 0 ? (
          <ApplicantsList>
            {userApplicants.map((applicant, index) => (
              <ApplicantItem key={index}>
                <ApplicantName>{applicant.name}</ApplicantName>
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

export default GenericPosterProfile;