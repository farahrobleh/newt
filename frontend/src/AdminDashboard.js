import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { 
  exampleProjects, 
  cancerProjects, 
  influenzaProjects, 
  coronavirusProjects, 
  measlesProjects, 
  sickleCellProjects 
} from './projectData';

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

const SubsectionTitle = styled.h3`
  color: #7fbf7f;
  margin: 20px 0;
  padding-top: 20px;
  border-top: 1px solid rgba(127, 191, 127, 0.3);
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

const CommentSection = styled.div`
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid rgba(127, 191, 127, 0.3);
`;

const Comment = styled.div`
  position: relative;
  background: rgba(26, 26, 26, 0.5);
  padding: 10px;
  margin: 5px 0;
  border-radius: 3px;
`;

const AdminDashboard = () => {
  const [dbProjects, setDbProjects] = useState([]);
  const [insights, setInsights] = useState([]);
  const [dummyProjects, setDummyProjects] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('adminLoggedIn')) {
      history.push('/admin-login');
      return;
    }

    const processedDummyProjects = {
      example: exampleProjects.map(project => ({
        ...project,
        id: `example-${Math.random()}`,
        title: project.title || 'Untitled',
        postedBy: typeof project.postedBy === 'string' ? project.postedBy : 'Unknown'
      })),
      cancer: cancerProjects.map(project => ({
        ...project,
        id: `cancer-${Math.random()}`,
        title: project.title || 'Untitled',
        postedBy: typeof project.postedBy === 'string' ? project.postedBy : 'Unknown'
      })),
      influenza: influenzaProjects.map(project => ({
        ...project,
        id: `influenza-${Math.random()}`,
        title: project.title || 'Untitled',
        postedBy: typeof project.postedBy === 'string' ? project.postedBy : 'Unknown'
      })),
      coronavirus: coronavirusProjects.map(project => ({
        ...project,
        id: `coronavirus-${Math.random()}`,
        title: project.title || 'Untitled',
        postedBy: typeof project.postedBy === 'string' ? project.postedBy : 'Unknown'
      })),
      measles: measlesProjects.map(project => ({
        ...project,
        id: `measles-${Math.random()}`,
        title: project.title || 'Untitled',
        postedBy: typeof project.postedBy === 'string' ? project.postedBy : 'Unknown'
      })),
      sickleCell: sickleCellProjects.map(project => ({
        ...project,
        id: `sickleCell-${Math.random()}`,
        title: project.title || 'Untitled',
        postedBy: typeof project.postedBy === 'string' ? project.postedBy : 'Unknown'
      }))
    };

    setDummyProjects(processedDummyProjects);
    fetchData();
  }, [history]);

  const fetchData = async () => {
    try {
      const [projectsResponse, insightsResponse] = await Promise.all([
        axios.get(`${process.env.REACT_APP_API_URL}/api/projects`),
        axios.get(`${process.env.REACT_APP_API_URL}/api/insights`)
      ]);
      
      setDbProjects(Array.isArray(projectsResponse.data) ? projectsResponse.data : []);
      setInsights(Array.isArray(insightsResponse.data) ? insightsResponse.data : []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDeleteDummyProject = (category, projectId) => {
    setDummyProjects(prev => ({
      ...prev,
      [category]: prev[category].filter(project => project.id !== projectId)
    }));
  };

  const handleDeleteDbProject = async (projectId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/projects/${projectId}`);
      setDbProjects(prev => prev.filter(project => project._id !== projectId));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const handleDeleteInsight = async (insightId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/insights/${insightId}`);
      setInsights(prev => prev.filter(insight => insight._id !== insightId));
    } catch (error) {
      console.error('Error deleting insight:', error);
    }
  };

  const handleDeleteComment = async (insightId, commentIndex) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/insights/${insightId}/comments/${commentIndex}`);
      setInsights(prev => prev.map(insight => {
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
        
        <SubsectionTitle>Database Projects</SubsectionTitle>
        {dbProjects.map(project => (
          <Card key={project._id}>
            <DeleteButton onClick={() => handleDeleteDbProject(project._id)}>Delete</DeleteButton>
            <h3>{project.title || 'Untitled Project'}</h3>
            <p>Posted by: {project.postedBy || 'Unknown'}</p>
          </Card>
        ))}

        {Object.entries(dummyProjects).map(([category, projects]) => (
          <React.Fragment key={category}>
            <SubsectionTitle>{category.charAt(0).toUpperCase() + category.slice(1)} Projects</SubsectionTitle>
            {Array.isArray(projects) && projects.map(project => (
              <Card key={project.id}>
                <DeleteButton onClick={() => handleDeleteDummyProject(category, project.id)}>Delete</DeleteButton>
                <h3>{project.title}</h3>
                <p>Posted by: {project.postedBy}</p>
              </Card>
            ))}
          </React.Fragment>
        ))}
      </Section>

      <Section>
        <SectionTitle>Community Hub Posts</SectionTitle>
        {insights.map(insight => (
          <Card key={insight._id}>
            <DeleteButton onClick={() => handleDeleteInsight(insight._id)}>Delete Post</DeleteButton>
            <h3>{insight.username || 'Anonymous'}</h3>
            <p>{insight.content}</p>
            {insight.image && (
              <img 
                src={insight.image} 
                alt="Post content" 
                style={{ maxWidth: '200px', marginTop: '10px' }} 
              />
            )}
            
            <CommentSection>
              <h4 style={{ color: '#7fbf7f', marginBottom: '10px' }}>Comments:</h4>
              {Array.isArray(insight.comments) && insight.comments.map((comment, index) => (
                <Comment key={`${insight._id}-comment-${index}`}>
                  <DeleteButton 
                    onClick={() => handleDeleteComment(insight._id, index)}
                    style={{ top: '5px', right: '5px' }}
                  >
                    Delete Comment
                  </DeleteButton>
                  <p style={{ marginRight: '70px' }}>{comment}</p>
                </Comment>
              ))}
            </CommentSection>
          </Card>
        ))}
      </Section>
    </DashboardContainer>
  );
};

export default AdminDashboard;