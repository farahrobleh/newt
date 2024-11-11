import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 100px auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #7fbf7f;
  margin-bottom: 30px;
`;

const Section = styled.div`
  margin-bottom: 40px;
  background-color: rgba(127, 191, 127, 0.1);
  padding: 20px;
  border-radius: 10px;
`;

const SectionTitle = styled.h2`
  color: #7fbf7f;
  margin-bottom: 20px;
`;

const Card = styled.div`
  background-color: #1a1a1a;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  position: relative;
`;

const DeleteButton = styled.button`
  background-color: #ff4444;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;

  &:hover {
    background-color: #cc0000;
  }
`;

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [insights, setInsights] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('adminLoggedIn')) {
      history.push('/admin-login');
      return;
    }

    fetchData();
  }, [history]);

  const fetchData = async () => {
    try {
      const projectsResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects`);
      const insightsResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/insights`);
      setProjects(projectsResponse.data);
      setInsights(insightsResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDeleteProject = async (projectId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/projects/${projectId}`);
      setProjects(projects.filter(project => project._id !== projectId));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const handleDeleteInsight = async (insightId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/insights/${insightId}`);
      setInsights(insights.filter(insight => insight._id !== insightId));
    } catch (error) {
      console.error('Error deleting insight:', error);
    }
  };

  const handleDeleteComment = async (insightId, commentIndex) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/insights/${insightId}/comments/${commentIndex}`);
      setInsights(insights.map(insight => {
        if (insight._id === insightId) {
          const updatedComments = [...insight.comments];
          updatedComments.splice(commentIndex, 1);
          return { ...insight, comments: updatedComments };
        }
        return insight;
      }));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <DashboardContainer>
      <Title>Admin Dashboard</Title>
      
      <Section>
        <SectionTitle>Research Projects</SectionTitle>
        {projects.map(project => (
          <Card key={project._id}>
            <DeleteButton onClick={() => handleDeleteProject(project._id)}>Delete</DeleteButton>
            <h3>{project.title}</h3>
            <p>Posted by: {project.postedBy}</p>
          </Card>
        ))}
      </Section>

      <Section>
        <SectionTitle>Community Hub Posts</SectionTitle>
        {insights.map(insight => (
          <Card key={insight._id}>
            <DeleteButton onClick={() => handleDeleteInsight(insight._id)}>Delete</DeleteButton>
            <h3>{insight.username}</h3>
            <p>{insight.content}</p>
            {insight.comments && insight.comments.map((comment, index) => (
              <div key={index} style={{ marginLeft: '20px', marginTop: '10px' }}>
                <DeleteButton onClick={() => handleDeleteComment(insight._id, index)}>Delete Comment</DeleteButton>
                <p>{comment}</p>
              </div>
            ))}
          </Card>
        ))}
      </Section>
    </DashboardContainer>
  );
};

export default AdminDashboard;