import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 90px auto 0; // Add top margin here
  padding: 20px;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfilePhoto = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ccc; 
  margin-right: 20px;
  background-image: url("https://www.socsci.uci.edu/files/news_events/2021/glendaflores_2021_880.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileName = styled.h1`
  margin: 0 0 10px 0;
`;

const ProfileDetails = styled.p`
  margin: 0 0 5px 0;
`;

const ProfileDescription = styled.p`
  margin-bottom: 20px;
`;

const ProjectsSection = styled.div`
  margin-top: 40px;
`;

const ProjectCard = styled(Link)`
  display: block;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
`;

const ResearcherProfile = ({ researcher }) => {
    if (!researcher) {
      return <div>Loading...</div>;
    }
  
    return (
      <ProfileContainer>
        <ProfileHeader>
          <ProfilePhoto />
          <ProfileInfo>
            <ProfileName>{researcher.name}</ProfileName>
            <ProfileDetails>{researcher.title}</ProfileDetails>
            <ProfileDetails>{researcher.institution}</ProfileDetails>
          </ProfileInfo>
        </ProfileHeader>
        <ProfileDescription>{researcher.description}</ProfileDescription>
        <ProjectsSection>
          <h2>Active Projects</h2>
          {researcher.projects && researcher.projects.map((project, index) => (
            <ProjectCard key={index} to={`/project/${encodeURIComponent(project.title)}`}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </ProjectCard>
          ))}
        </ProjectsSection>
      </ProfileContainer>
    );
  };

export default ResearcherProfile;