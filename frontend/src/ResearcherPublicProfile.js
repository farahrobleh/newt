import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 120px auto;
  padding: 20px;
`;

const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
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

const ResearcherPublicProfile = () => {
  return (
    <Container>
      <ProfileHeader>
        <h1>Dr. Elena Vasquez</h1>
        <h2>Senior Research Scientist</h2>
        <h3>Memorial Cancer Research Center</h3>
      </ProfileHeader>

      <Section>
        <h2>About</h2>
        <p>Dr. Elena Vasquez is a leading expert in cancer immunotherapy with over 15 years of experience...</p>
      </Section>

      <Section>
        <h2>Expertise</h2>
        <ul>
          <li>Immunotherapy</li>
          <li>Cancer Biology</li>
          <li>Clinical Trials</li>
          <li>Precision Medicine</li>
        </ul>
      </Section>

      <Section>
        <h2>Active Projects</h2>
        <ProjectLink to="/project/cancer-1">
          Immunotherapy Optimization for Triple-Negative Breast Cancer
        </ProjectLink>
        <ProjectLink to="/project/cancer-2">
          Precision Medicine Approaches in Lung Cancer Treatment
        </ProjectLink>
      </Section>
    </Container>
  );
};

export default ResearcherPublicProfile;