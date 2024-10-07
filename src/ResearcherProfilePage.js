import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ResearcherProfile from './ResearcherProfile';
import { 
    exampleProjects, 
    cancerProjects, 
    influenzaProjects, 
    coronavirusProjects, 
    measlesProjects, 
    sickleCellProjects 
} from './projectData';

const ResearcherProfilePage = () => {
    const { researcherId } = useParams();
    const [researcher, setResearcher] = useState(null);
  
    useEffect(() => {
      // Fetch researcher data (replace with actual API call)
      const fetchedResearcher = {
        id: 'elena-vasquez',
        name: 'Dr. Elena Vasquez',
        title: 'Senior Oncologist',
        institution: 'Comprehensive Cancer Center, Metropolitan University Hospital',
        description: 'Dr. Elena Vasquez is a renowned oncologist specializing in breast cancer research...',
      };

      // Fetch all projects (replace with actual API call)
      const allProjects = [
        ...exampleProjects,
        ...cancerProjects,
        ...influenzaProjects,
        ...coronavirusProjects,
        ...measlesProjects,
        ...sickleCellProjects
      ];
  
      // Filter projects by this researcher
      const researcherProjects = allProjects.filter(project => 
        (typeof project.postedBy === 'object' && project.postedBy.id === researcherId) ||
        (typeof project.postedBy === 'string' && project.postedBy.includes(fetchedResearcher.name))
      );

      // Add projects to the researcher object
      setResearcher({...fetchedResearcher, projects: researcherProjects});
    }, [researcherId]);
  
    if (!researcher) return <div>Loading...</div>;
  
    return <ResearcherProfile researcher={researcher} />;
};

export default ResearcherProfilePage;