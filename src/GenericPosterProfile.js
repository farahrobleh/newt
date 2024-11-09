import React from 'react';
import styled from 'styled-components';
import { useApplicants } from './context/ApplicantContext.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 120px auto 0;
  padding: 40px;
  background-color: #FFFFFF;
  border-radius: 10px;
  color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const WelcomeHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #FF3232;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const InfoSection = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #FF3232;
`;

const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  background-color: rgba(255, 50, 50, 0.1);
  border-radius: 5px;
`;

const CreateProjectButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: #FF3232;
  cursor: pointer;
  font-size: 1rem;
  padding: 10px;
  
  &:hover {
    color: #CC0000;
  }
  
  svg {
    margin-right: 8px;
  }
`;

const GenericPosterProfile = () => {
  const history = useHistory();

  const handleCreateProject = () => {
    history.push('/create-project');
  };

  return (
    <ProfileContainer>
      <WelcomeHeader>Welcome to Your Research Dashboard</WelcomeHeader>
      <ProfileImage src="https://via.placeholder.com/200" alt="Generic Profile" />
      <InfoSection>
        <SectionTitle>Your Information</SectionTitle>
        <p>Research Institution Member</p>
        <p>Email: {localStorage.getItem('userEmail') || 'Not provided'}</p>
      </InfoSection>
      <InfoSection>
        <SectionTitle>Getting Started</SectionTitle>
        <ProjectList>
          <ProjectItem>Complete your profile information</ProjectItem>
          <ProjectItem>Post your first research project</ProjectItem>
          <ProjectItem>Connect with potential candidates</ProjectItem>
        </ProjectList>
      </InfoSection>
      <InfoSection>
        <SectionTitle>Quick Links</SectionTitle>
        <ProjectList>
          <ProjectItem>
            <CreateProjectButton onClick={handleCreateProject}>
              <FontAwesomeIcon icon={faPlus} /> Create New Project
            </CreateProjectButton>
          </ProjectItem>
          <ProjectItem>View Applications</ProjectItem>
          <ProjectItem>Message Center</ProjectItem>
          <ProjectItem>Settings</ProjectItem>
        </ProjectList>
      </InfoSection>
    </ProfileContainer>
  );
};

export default GenericPosterProfile;