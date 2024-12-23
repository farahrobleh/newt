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
  margin-bottom: 20px;
  padding: 20px 20px 15px;
  background-color: rgba(127, 191, 127, 0.1);
  border-radius: 10px;
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

const ApplicantItem = styled.div`
  background-color: rgba(127, 191, 127, 0.1);
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 8px;
`;

const ApplicantDetail = styled.p`
  margin: 8px 0;
  color: #ffffff;
`;

const ApplicantEducation = styled.ul`
  margin: 8px 0;
  padding-left: 20px;
  color: #ffffff;
`;

const DocumentLink = styled.span`
  color: #7fbf7f;
  cursor: not-allowed;
  text-decoration: underline;
`;

const PosterProfile = () => {
  const { applicants } = useApplicants();
  const elenaApplicants = applicants.filter(
    applicant => applicant.researcherId === 'elena-vasquez'
  );

  return (
    <ProfileContainer>
      <WelcomeHeader>Dr. Elena Vasquez</WelcomeHeader>
      <ProfileImage 
        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3"
        alt="Dr. Elena Vasquez" 
      />
      <InfoSection>
        <SectionTitle>Profile Information</SectionTitle>
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
        {elenaApplicants && elenaApplicants.length > 0 ? (
          <div>
            {elenaApplicants.map((applicant, index) => (
              <ApplicantItem key={index}>
                <ApplicantDetail><strong>Name:</strong> {applicant.name}</ApplicantDetail>
                <ApplicantDetail><strong>Email:</strong> {applicant.email}</ApplicantDetail>
                <ApplicantDetail><strong>LinkedIn:</strong> {applicant.linkedin}</ApplicantDetail>
                <ApplicantDetail><strong>Education:</strong></ApplicantDetail>
                <ApplicantEducation>
                  {applicant.education.map((edu, idx) => (
                    <li key={idx}>{edu}</li>
                  ))}
                </ApplicantEducation>
                <ApplicantDetail>
                  <strong>Documents:</strong>{' '}
                  <DocumentLink>Resume</DocumentLink> |{' '}
                  <DocumentLink>Cover Letter</DocumentLink>
                </ApplicantDetail>
                <ApplicantDetail><strong>Applied:</strong> {applicant.appliedDate}</ApplicantDetail>
                <ApplicantDetail><strong>Status:</strong> {applicant.status}</ApplicantDetail>
              </ApplicantItem>
            ))}
          </div>
        ) : (
          <p>No current applicants</p>
        )}
      </InfoSection>
    </ProfileContainer>
  );
};

export default PosterProfile;