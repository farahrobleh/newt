import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

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
  const [results, setResults] = useState([]);
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query')?.toLowerCase() || '';

  useEffect(() => {
    const allProjects = [
      ...(exampleProjects || []),
      ...(cancerProjects || []),
      ...(influenzaProjects || []),
      ...(coronavirusProjects || []),
      ...(measlesProjects || []),
      ...(sickleCellProjects || [])
    ];

    const filteredResults = allProjects.filter(project => 
      project.title.toLowerCase().includes(query) ||
      (typeof project.postedBy === 'object' && project.postedBy.name.toLowerCase().includes(query)) ||
      (typeof project.postedBy === 'string' && project.postedBy.toLowerCase().includes(query))
    );

    setResults(filteredResults);
  }, [query, exampleProjects, cancerProjects, influenzaProjects, coronavirusProjects, measlesProjects, sickleCellProjects]);

  return (
    <ResultsContainer>
      <h2>Search Results for "{query}"</h2>
      {results.length > 0 ? (
        results.map((result, index) => (
          <ResultItem key={index} to={`/project/${encodeURIComponent(result.title)}`}>
            <h3>{result.title}</h3>
            <p>Posted by: {typeof result.postedBy === 'object' ? result.postedBy.name : result.postedBy}</p>
          </ResultItem>
        ))
      ) : (
        <p>No results found for "{query}"</p>
      )}
    </ResultsContainer>
  );
};

export default SearchResults;