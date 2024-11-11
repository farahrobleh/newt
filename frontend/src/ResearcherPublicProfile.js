import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  text-align: center;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  color: #7fbf7f;
  font-size: 1.2em;
  margin-bottom: 10px;
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
      <Title>Dr. Elena Vasquez</Title>
      <Section>
        <SubTitle>Position</SubTitle>
        <p>Senior Research Scientist - Immunotherapy</p>
        <p>Memorial Cancer Research Center</p>
      </Section>

      <Section>
        <SubTitle>Research Focus</SubTitle>
        <p>Leading expert in cancer immunotherapy with over 15 years of experience in developing innovative treatments for various types of cancer.</p>
      </Section>

      <Section>
        <SubTitle>Current Projects</SubTitle>
        <ProjectLink to="/projects/Immunotherapy%20Optimization%20for%20Triple-Negative%20Breast%20Cancer">
          Immunotherapy Optimization for Triple-Negative Breast Cancer
        </ProjectLink>
        <ProjectLink to="/projects/Precision%20Medicine%20Approaches%20in%20Lung%20Cancer%20Treatment">
          Precision Medicine Approaches in Lung Cancer Treatment
        </ProjectLink>
      </Section>
    </Container>
  );
};

export default ResearcherPublicProfile;