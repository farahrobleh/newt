import React from 'react';
import styled from 'styled-components';
import { useApplicants } from './context/ApplicantContext.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

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

const GenericPosterProfile = () => {
  const history = useHistory();

  const handleCreateProject = () => {
    history.push('/create-project');
  };

  return (
    <Container>
      <Title>Welcome to Your Research Dashboard</Title>
      <ProfileImage src="https://via.placeholder.com/200" alt="Generic Profile" />
      <Section>
        <SectionTitle>Your Information</SectionTitle>
        <p>Research Institution Member</p>
        <p>Email: {localStorage.getItem('userEmail') || 'Not provided'}</p>
      </Section>
      <Section>
        <SectionTitle>Getting Started</SectionTitle>
        <ProjectList>
          <ProjectItem>Complete your profile information</ProjectItem>
          <ProjectItem>Post your first research project</ProjectItem>
          <ProjectItem>Connect with potential candidates</ProjectItem>
        </ProjectList>
      </Section>
      <Section>
        <SectionTitle>Quick Links</SectionTitle>
        <ProjectList>
          <ProjectItem>
            <Button onClick={handleCreateProject}>
              <FontAwesomeIcon icon={faPlus} /> Create New Project
            </Button>
          </ProjectItem>
          <ProjectItem>View Applications</ProjectItem>
          <ProjectItem>Message Center</ProjectItem>
          <ProjectItem>Settings</ProjectItem>
        </ProjectList>
      </Section>
    </Container>
  );
};

export default GenericPosterProfile;