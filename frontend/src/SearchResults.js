import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const ResultsContainer = styled.div`
  max-width: 800px;
  margin: 90px auto 0; // Add top margin to push content down
  padding: 20px;
`;

const ResultItem = styled(Link)`
  display: block;
  margin-bottom: 20px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const SearchResults = ({ 
  exampleProjects, 
  cancerProjects, 
  influenzaProjects, 
  coronavirusProjects, 
  measlesProjects, 
  sickleCellProjects 
}) => {
  const [dbProjects, setDbProjects] = useState([]);
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query')?.toLowerCase() || '';

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects`);
        setDbProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    
    fetchProjects();
  }, []);

  // Combine all projects
  const allProjects = [
    ...dbProjects,
    ...(exampleProjects || []),
    ...(cancerProjects || []),
    ...(influenzaProjects || []),
    ...(coronavirusProjects || []),
    ...(measlesProjects || []),
    ...(sickleCellProjects || [])
  ];

  // Filter projects safely
  const filteredResults = allProjects.filter(project => {
    if (!project) return false;

    try {
      const searchableFields = {
        title: String(project.title || ''),
        postedBy: typeof project.postedBy === 'string' ? project.postedBy : '',
        jobTitle: String(project.jobTitle || ''),
        projectSummary: String(project.projectSummary || ''),
        qualifications: Array.isArray(project.qualifications) 
          ? project.qualifications.join(' ') 
          : String(project.qualifications || '')
      };

      return Object.values(searchableFields).some(value => 
        value.toLowerCase().includes(query)
      );
    } catch (error) {
      console.error('Error filtering project:', project, error);
      return false;
    }
  });

  return (
    <ResultsContainer>
      <h2>Search Results for "{query}"</h2>
      {filteredResults.length > 0 ? (
        filteredResults.map((result, index) => (
          <ResultItem 
            key={index} 
            to={result._id ? `/project/${result._id}` : `/project/${encodeURIComponent(result.title)}`}
          >
            <h3>{result.title}</h3>
            <p>Posted by: {typeof result.postedBy === 'string' ? result.postedBy : 'Unknown'}</p>
          </ResultItem>
        ))
      ) : (
        <p>No results found for "{query}"</p>
      )}
    </ResultsContainer>
  );
};

export default SearchResults;