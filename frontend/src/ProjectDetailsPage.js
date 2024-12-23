import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useApplicants } from './context/ApplicantContext';
import styled from 'styled-components';
import { 
  exampleProjects, 
  cancerProjects, 
  influenzaProjects, 
  coronavirusProjects, 
  measlesProjects, 
  sickleCellProjects 
} from './projectData';
import axios from 'axios';

const Container = styled.div`
  max-width: 800px;
  margin: 120px auto;
  padding: 20px;
  color: #ffffff;
`;

const ProjectContainer = styled.div`
  background-color: rgba(127, 191, 127, 0.1);
  border-radius: 10px;
  padding: 30px 30px 20px;
  margin-top: 20px;
`;

const Title = styled.h1`
  color: #7fbf7f;
  margin-bottom: 20px;
`;

const ContentSection = styled.div`
  margin: 20px 0;
  border-bottom: 1px solid rgba(127, 191, 127, 0.2);
  padding-bottom: 15px;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  color: #7fbf7f;
  margin-bottom: 15px;
  font-size: 1.2em;
`;

const ResearcherLink = styled(Link)`
  color: #7fbf7f;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ApplyButton = styled.button`
  background-color: #7fbf7f;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6ca86c;
  }
`;

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const { addApplicant } = useApplicants();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      try {
        setLoading(true);
        const decodedId = decodeURIComponent(id);
        
        // First check example projects
        const allLocalProjects = [
          ...exampleProjects,
          ...cancerProjects,
          ...influenzaProjects,
          ...coronavirusProjects,
          ...measlesProjects,
          ...sickleCellProjects
        ];
        
        // Try to find by title or id
        const localProject = allLocalProjects.find(p => 
          p.title === decodedId || p.id === decodedId
        );
        
        if (localProject) {
          setProject(localProject);
          setLoading(false);
          return;
        }

        // If not found locally and it's a valid ID format, try the API
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects/${id}`);
          setProject(response.data);
        } else {
          // If not found locally and not a valid MongoDB ID, show error
          throw new Error('Project not found');
        }
      } catch (error) {
        console.error('Error loading project:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [id]);

  const handleApply = () => {
    // Array of dummy applicant data to randomly select from
    const dummyApplicants = [
      {
        name: "Sarah Chen",
        email: "schen@stanford.edu",
        linkedin: "linkedin.com/in/sarahchen",
        education: ["Stanford University - Ph.D. Candidate, Cancer Biology", "UC Berkeley - B.S. Molecular Biology"],
        resume: "cancer_research_resume.pdf",
        coverLetter: "I am excited to apply for this position...",
        projectTitle: project.title,
        appliedDate: new Date().toLocaleDateString(),
        status: "Pending Review",
        researcherId: "elena-vasquez",
        researcherEmail: "drelena@metropolitan.edu"
      },
      {
        name: "Michael Rodriguez",
        email: "mrodriguez@mit.edu",
        linkedin: "linkedin.com/in/mrodriguez",
        education: ["MIT - Ph.D. Bioengineering", "Johns Hopkins - B.S. Biomedical Engineering"],
        resume: "immunotherapy_resume.pdf",
        coverLetter: "With my background in immunotherapy research...",
        projectTitle: project.title,
        appliedDate: new Date().toLocaleDateString(),
        status: "Pending Review",
        researcherId: "elena-vasquez",
        researcherEmail: "drelena@metropolitan.edu"
      },
      {
        name: "Emily Watson",
        email: "ewatson@harvard.edu",
        linkedin: "linkedin.com/in/emilywatson",
        education: ["Harvard Medical School - MD/Ph.D. Program", "Yale - B.S. Molecular Biology"],
        resume: "clinical_research_resume.pdf",
        coverLetter: "Your groundbreaking work in immunotherapy...",
        projectTitle: project.title,
        appliedDate: new Date().toLocaleDateString(),
        status: "Pending Review",
        researcherId: "elena-vasquez",
        researcherEmail: "drelena@metropolitan.edu"
      }
    ];

    // Check if this is Dr. Elena's project
    if (project.postedBy.includes("Dr. Elena")) {
      // Randomly select a dummy applicant
      const randomApplicant = dummyApplicants[Math.floor(Math.random() * dummyApplicants.length)];
      
      // Add to context
      addApplicant(randomApplicant);
      
      // Store in localStorage to persist the data
      const existingApplicants = JSON.parse(localStorage.getItem('applicants') || '[]');
      localStorage.setItem('applicants', JSON.stringify([...existingApplicants, randomApplicant]));
      
      console.log('Added applicant:', randomApplicant); // Debug log
    }

    history.push('/application-confirmation');
  };

  if (loading) {
    return (
      <Container>
        <p>Loading project details...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <p>Error loading project: {error}</p>
      </Container>
    );
  }

  if (!project) {
    return (
      <Container>
        <p>Project not found</p>
      </Container>
    );
  }

  return (
    <Container>
      <Title>{project?.title}</Title>
      
      <ProjectContainer>
        <ContentSection>
          <p><strong>Posted By:</strong> {' '}
            {project?.postedBy === "Dr. Elena Vasquez" ? (
              <ResearcherLink to="/researcher-public-profile/elena-vasquez">
                {project.postedBy}
              </ResearcherLink>
            ) : (
              project?.postedBy
            )}
          </p>
          <p><strong>Institution:</strong> {project?.institution || 'Not Provided'}</p>
          <p><strong>Job Title:</strong> {project?.jobTitle || 'Not Provided'}</p>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Project Summary</SectionTitle>
          <p>{project?.projectSummary || project?.description}</p>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Role Details</SectionTitle>
          {Array.isArray(project?.roleDetails) ? (
            <ul>
              {project.roleDetails.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          ) : (
            <p>{project?.roleDetails}</p>
          )}
        </ContentSection>

        <ContentSection>
          <SectionTitle>Compensation</SectionTitle>
          <p>{project?.compensation}</p>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Timeline</SectionTitle>
          {project?.projectTimeline && typeof project.projectTimeline === 'object' ? (
            <>
              <p><strong>Project:</strong> {project.projectTimeline.start} - {project.projectTimeline.end}</p>
              {project.roleTimeline && (
                <p><strong>Role:</strong> {project.roleTimeline.start} - {project.roleTimeline.end}</p>
              )}
            </>
          ) : (
            <p>{project?.projectTimeline}</p>
          )}
        </ContentSection>

        <ContentSection>
          <SectionTitle>Qualifications</SectionTitle>
          {Array.isArray(project?.qualifications) ? (
            <ul>
              {project.qualifications.map((qual, index) => (
                <li key={index}>{qual}</li>
              ))}
            </ul>
          ) : (
            <p>{project?.qualifications}</p>
          )}
        </ContentSection>

        {project?.additionalInfo && (
          <ContentSection>
            <SectionTitle>Additional Information</SectionTitle>
            <p>{project.additionalInfo}</p>
          </ContentSection>
        )}

        <ContentSection>
          <ApplyButton onClick={handleApply}>
            Apply to Research Project
          </ApplyButton>
        </ContentSection>
      </ProjectContainer>
    </Container>
  );
};

export default ProjectDetailsPage;