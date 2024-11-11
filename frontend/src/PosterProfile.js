import React from 'react';
import styled from 'styled-components';
import { useApplicants } from './context/ApplicantContext.js';
import { Link } from 'react-router-dom';

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 120px auto 0;
  padding: 40px;
  background-color: rgba(34, 34, 34, 0.8);
  border-radius: 10px;
  color: white;
`;

const WelcomeHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
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
`;

const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  margin-bottom: 10px;
`;

const ProjectLink = styled(Link)`
  color: #7fbf7f;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ApplicantList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ApplicantItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
`;

const PosterProfile = () => {
  const { applicants } = useApplicants();

  return (
    <ProfileContainer>
      <WelcomeHeader>Welcome Dr. Elena Vasquez</WelcomeHeader>
      <ProfileImage src="https://www.socsci.uci.edu/files/news_events/2021/glendaflores_2021_880.jpg" alt="Dr. Elena Vasquez" />
      <InfoSection>
        <SectionTitle>Information</SectionTitle>
        <p>Comprehensive Cancer Center, Metropolitan University Hospital</p>
        <p>Specialization: Oncology, Cancer Research</p>
        <p>Email: drelena@metropolitan.edu</p>
      </InfoSection>
      <InfoSection>
        <SectionTitle>Active Projects</SectionTitle>
        <ProjectList>
          <ProjectItem>
            <ProjectLink to="/project/cancer-1">
              Immunotherapy Optimization for Triple-Negative Breast Cancer
            </ProjectLink>
          </ProjectItem>
          <ProjectItem>
            <ProjectLink to="/project/cancer-2">
              Precision Medicine Approaches in Lung Cancer Treatment
            </ProjectLink>
          </ProjectItem>
        </ProjectList>
      </InfoSection>
      <InfoSection>
        <SectionTitle>Current Applicants</SectionTitle>
        {applicants.length > 0 ? (
          <ApplicantList>
            {applicants.map((applicant) => (
              <ApplicantItem key={applicant.id}>
                <p><strong>Name:</strong> {applicant.name}</p>
                <p><strong>Email:</strong> {applicant.email}</p>
                <p><strong>Project:</strong> {applicant.projectTitle}</p>
                <p><strong>Applied Date:</strong> {applicant.appliedDate}</p>
              </ApplicantItem>
            ))}
          </ApplicantList>
        ) : (
          <p>No current applicants</p>
        )}
      </InfoSection>
    </ProfileContainer>
  );
};

export default PosterProfile;