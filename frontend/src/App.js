import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory, useParams } from 'react-router-dom';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import ResearcherProfilePage from './ResearcherProfilePage.js';
import SearchResults from './SearchResults.js';
import { 
  exampleProjects, 
  cancerProjects, 
  influenzaProjects, 
  coronavirusProjects, 
  measlesProjects, 
  sickleCellProjects 
} from './projectData.js';
import CandidateLogin from './CandidateLogin.js';
import PosterLogin from './PosterLogin.js';
import AboutUs from './AboutUs.js';
import ApplicationConfirmation from './ApplicationConfirmation.js';
import PosterProfile from './PosterProfile.js';
import { useApplicants } from './context/ApplicantContext.js';
import { ApplicantProvider } from './context/ApplicantContext.js';
import CommunityFeed from './CommunityFeed.js';
import IntroAnimation from './IntroAnimation.js';
import lizardLogo from './images/lizard.png';
import CommunityHub from './CommunityHub.js';
import GenericPosterProfile from './GenericPosterProfile.js';
import CreateProject from './CreateProject.js';
import ProjectDetailsPage from './ProjectDetailsPage';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import ResearcherPublicProfile from './ResearcherPublicProfile';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #000000;
    color: #ffffff;
    overflow-x: hidden;
  }
  
  @font-face {
    font-family: 'GROZENMEDICALDEMO-SemiBold';
    src: url('/fonts/GROZENMEDICALDEMO-SemiBold.woff2') format('woff2'),
         url('/fonts/GROZENMEDICALDEMO-SemiBold.woff2.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

// /Users/faryad/.cursor-tutor/ResearchVoyager/public/fonts/GROZENMEDICALDEMO-SemiBold.woff2

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Navigation = styled.nav`
  background: transparent;
  padding: 20px 0;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 50px; // Add this line to set a fixed height
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 100%; // Make it full height of the Navigation

  @media (max-width: 768px) {
    padding: 20px 15px; // Reduce horizontal padding on mobile
  }
`;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  margin-left: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #6e8efb;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
    padding: 20px 0;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  
  &:visited, &:hover, &:active {
    color: inherit;
    text-decoration: none;
  }
`;

const HamburgerIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  color: #ffffff;
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-left: 15px; // Add some space to the left of the icon
  }
`;

const NavTitle = styled(Link)`
  font-family: 'GROZENMEDICALDEMO-SemiBold', Roboto, sans-serif;
  font-size: 1.5rem;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #6e8efb;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem; // Slightly reduce font size on mobile
  }
`;

const PlaceholderLink = styled.span`
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: default;
  transition: color 0.3s ease;

  &:hover {
    color: #6e8efb;
  }
`;

const moveStars = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

// const StarryBackground = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 200%; // Double the height
//   pointer-events: none;
//   z-index: -1;

//   &::after {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-image: 
//       radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
//       radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
//       radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
//       radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
//       radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
//       radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
//     background-repeat: repeat;
//     background-size: 200px 200px;
//     animation: ${moveStars} 100s linear infinite;
//   }
// `;

const twinkle = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const moverStars = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-2000px); }
`;

const MinimalistBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000;
  z-index: -1;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(2px 2px at 20px 30px, #4CAF50, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 40px 70px, #81C784, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 50px 160px, #66BB6A, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 90px 40px, #A5D6A7, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 130px 80px, #81C784, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 160px 120px, #4CAF50, rgba(0,0,0,0));
    background-repeat: repeat;
    background-size: 200px 200px;
    opacity: 0.3;
    animation: ${twinkle} 4s infinite;
  }

  &::after {
    background-size: 300px 300px;
    animation: ${twinkle} 5s infinite, ${moverStars} 100s linear infinite;
  }
`;

const MenuIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  color: #ffffff;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Section = styled.section`
  margin-top: 90px;
`;

const SectionTitle = styled.h2`
  color: #ffffff;
  text-align: center;
  margin-top: 0;
  margin-bottom: 30px; // Reduced from 40px to 30px
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #7fbf7f, #a0d0a0); // Subtle green gradient
  padding: 100px 20px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin-top: 90px; // Adjust this value based on your navigation height
  border-radius: 30px 30px 30px 30px;
`;

const HeroTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  overflow-wrap: break-word;
  word-wrap: break-word;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const HeroSubtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  max-width: 900px;
  margin: 0 auto 40px;
  padding-left: 40px;
  padding-right: 40px;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const HeroSearchInput = styled.input`
  width: 50%;
  padding: 15px;
  font-size: 1rem;
  border: none;
  border-radius: 30px 0 0 30px;
  outline: none;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroSearchButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0 30px 30px 0;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const FeaturedSection = styled.section`
  padding: 30px 0 40px; // 30px top, 40px bottom
  background-color: transparent;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FeaturedProjectCard = styled.div`
  background-color: #222222;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #ffffff;
`;

const ProjectDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;
  color: #cccccc;
  margin-bottom: 20px;
`;

// const ViewProjectButton = styled.button`
//   background-color: transparent;
//   color: #6e8efb;
//   border: 2px solid #6e8efb;
//   padding: 8px 15px;
//   font-size: 0.9rem;
//   cursor: pointer;
//   border-radius: 20px;
//   transition: all 0.3s;

//   &:hover {
//     background-color: #6e8efb;
//     color: #000000;
//   }
// `;

// const ViewProjectButton = styled(Link)`
//   display: inline-block;
//   background-color: #7fbf7f; // Light green background
//   color: #ffffff;
//   padding: 10px 15px;
//   border-radius: 5px;
//   text-decoration: none;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #4a7a4a; // Darker green on hover
//   }
// `;

const ViewProjectButton = styled.button`
  background-color: transparent;
  color: #7fbf7f;  // Light green color
  border: 2px solid #7fbf7f;  // Light green border
  padding: 8px 15px;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.3s;

  &:hover {
    background-color: #7fbf7f;  // Light green background on hover
    color: #000000;  // Black text on hover for contrast
  }
`;

const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ProjectItem = styled.div`
  background-color: #222222;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ProjectDetails = styled.div`
  background-color: #222222;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
`;

const ApplyButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 15px 30px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

// Add these styled components before DummyProjectDetails
const DummyContainer = styled.div`
  max-width: 800px;
  margin: 120px auto 40px;
  padding: 40px;
  background-color: #1a1a1a;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  color: #ffffff;
`;

const DummyTitle = styled.h1`
  color: #7fbf7f;
  margin-bottom: 20px;
`;

const DummySection = styled.div`
  margin-bottom: 30px;
`;

const DummySectionTitle = styled.h2`
  color: #7fbf7f;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const DummyApplyButton = styled.button`
  background-color: #7fbf7f;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6ca86c;
  }
`;

// Components
const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      history.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Discover Your Next Research Opportunity</HeroTitle>
          <HeroSubtitle>
            Connect with cutting-edge projects and advance your scientific career
          </HeroSubtitle>
          <SearchContainer>
            <HeroSearchInput
              type="text"
              placeholder="Search for research projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <HeroSearchButton onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </HeroSearchButton>
          </SearchContainer>
        </HeroContent>
      </HeroSection>

      <FeaturedSection>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectGrid>
          {exampleProjects.slice(0, 3).map((project, index) => (
            <FeaturedProjectCard key={index}>
              <ProjectImage src={project.imageUrl} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ViewProjectButton onClick={() => history.push(`/project/${encodeURIComponent(project.title)}`)}>
                  View Project <FontAwesomeIcon icon={faArrowRight} />
                </ViewProjectButton>
              </ProjectContent>
            </FeaturedProjectCard>
          ))}
        </ProjectGrid>
      </FeaturedSection>
    </>
  );
};

const Projects = ({ 
  exampleProjects, 
  cancerProjects, 
  influenzaProjects, 
  coronavirusProjects, 
  measlesProjects, 
  sickleCellProjects 
}) => {
  const [projects, setProjects] = useState([]);
  const [diseaseTitle, setDiseaseTitle] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchProjects = () => {
      const searchParams = new URLSearchParams(history.location.search);
      const searchQuery = searchParams.get('search').toLowerCase();
      let title = '';
      let dummyProjects = [];

      if (searchQuery.includes('cancer')) {
        title = 'Cancer';
        dummyProjects = cancerProjects;
      } else if (searchQuery.includes('influenza')) {
        title = 'Influenza';
        dummyProjects = influenzaProjects;
      } else if (searchQuery.includes('coronavirus')) {
        title = 'Coronavirus';
        dummyProjects = coronavirusProjects;
      } else if (searchQuery.includes('measles')) {
        title = 'Measles';
        dummyProjects = measlesProjects;
      } else if (searchQuery.includes('sickle cell')) {
        title = 'Sickle Cell Anemia';
        dummyProjects = sickleCellProjects;
      } else {
        // If no specific disease is searched, show all projects
        title = 'All Research';
        dummyProjects = [
          ...exampleProjects,
          ...cancerProjects,
          ...influenzaProjects,
          ...coronavirusProjects,
          ...measlesProjects,
          ...sickleCellProjects
        ];
      }
      setProjects(dummyProjects);
      setDiseaseTitle(title);
    };

    fetchProjects();
  }, [history.location.search, exampleProjects, cancerProjects, influenzaProjects, coronavirusProjects, measlesProjects, sickleCellProjects]);

  return (
    <Section>
      <SectionTitle>{diseaseTitle} Research Projects</SectionTitle>
      <ProjectsList>
        {projects.map((project, index) => (
          <ProjectItem key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Posted by: {project.postedBy}</p>
            <Button onClick={() => {
              // If project has _id, it's from database, otherwise use title
              const param = project._id || encodeURIComponent(project.title);
              history.push(`/project/${param}`);
            }}>
              Apply
            </Button>
          </ProjectItem>
        ))}
      </ProjectsList>
    </Section>
  );
};

// Update DummyProjectDetails to use the new styled components
const DummyProjectDetails = ({ project, ...props }) => {
  const history = useHistory();
  const handleApply = () => {
    history.push('/application-confirmation');
  };

  return (
    <DummyContainer>
      <DummyTitle>{project.title}</DummyTitle>
      
      <DummySection>
        <DummySectionTitle>Posted By</DummySectionTitle>
        <p>{typeof project.postedBy === 'object' ? project.postedBy.name : project.postedBy}</p>
      </DummySection>

      <DummySection>
        <DummySectionTitle>Job Title</DummySectionTitle>
        <p>{project.jobTitle}</p>
      </DummySection>

      <DummySection>
        <DummySectionTitle>Project Summary</DummySectionTitle>
        <p>{project.summary || project.projectSummary}</p>
      </DummySection>

      <DummySection>
        <DummySectionTitle>Role Details</DummySectionTitle>
        {Array.isArray(project.roleDetails) ? (
          <ul>
            {project.roleDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        ) : (
          <p>{project.roleDetails}</p>
        )}
      </DummySection>

      <DummySection>
        <DummySectionTitle>Compensation</DummySectionTitle>
        <p>{project.compensation}</p>
      </DummySection>

      <DummySection>
        <DummySectionTitle>Project Timeline</DummySectionTitle>
        {typeof project.projectTimeline === 'object' ? (
          <>
            <p>Start Date: {project.projectTimeline.start}</p>
            <p>End Date: {project.projectTimeline.end}</p>
          </>
        ) : (
          <p>{project.projectTimeline}</p>
        )}
      </DummySection>

      <DummySection>
        <DummySectionTitle>Role Timeline</DummySectionTitle>
        {typeof project.roleTimeline === 'object' ? (
          <>
            <p>Start Date: {project.roleTimeline.start}</p>
            <p>End Date: {project.roleTimeline.end}</p>
          </>
        ) : (
          <p>{project.roleTimeline}</p>
        )}
      </DummySection>

      <DummySection>
        <DummySectionTitle>Qualifications</DummySectionTitle>
        {Array.isArray(project.qualifications) ? (
          <ul>
            {project.qualifications.map((qual, index) => (
              <li key={index}>{qual}</li>
            ))}
          </ul>
        ) : (
          <p>{project.qualifications}</p>
        )}
      </DummySection>

      {project.additionalInfo && (
        <DummySection>
          <DummySectionTitle>Additional Information</DummySectionTitle>
          <p>{project.additionalInfo}</p>
        </DummySection>
      )}

      <DummyApplyButton onClick={handleApply}>
        Apply to Research Project
      </DummyApplyButton>
    </DummyContainer>
  );
};

const App = () => {

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ApplicantProvider>
      <Router>
        <GlobalStyle />
        {showIntro ? (
          <IntroAnimation imageSrc={lizardLogo} />
        ) : (
          <>
            <MinimalistBackground />
            <Navigation>
              <NavContainer>
                <NavTitle to="/">newt.io</NavTitle>
                <MenuIcon onClick={toggleMenu}>
                  <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </MenuIcon>
                <NavLinks isOpen={isMenuOpen}>
                  <NavLink to="/community-feed" onClick={toggleMenu}>Community Hub</NavLink>
                  <NavLink to="/candidate-login" onClick={toggleMenu}>Candidate Login</NavLink>
                  <NavLink to="/poster-login" onClick={toggleMenu}>Poster Login</NavLink>
                  <NavLink to="/admin-login" onClick={toggleMenu}>Admin Login</NavLink>
                  <NavLink to="/about" onClick={toggleMenu}>About Us</NavLink>
                </NavLinks>
              </NavContainer>
            </Navigation>
            <AppContainer>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/community-feed" component={CommunityFeed} />
                <Route path="/community-hub" component={CommunityHub} />
                <Route path="/projects" render={(props) => (
                  <Projects 
                    {...props} 
                    exampleProjects={exampleProjects}
                    cancerProjects={cancerProjects}
                    influenzaProjects={influenzaProjects}
                    coronavirusProjects={coronavirusProjects}
                    measlesProjects={measlesProjects}
                    sickleCellProjects={sickleCellProjects}
                  />
                )} />
                <Route 
                  path="/project/:id" 
                  component={ProjectDetailsPage} 
                />
                <Route path="/researcher/:researcherId" component={ResearcherProfilePage} />
                <Route path="/search" render={(props) => (
                  <SearchResults 
                    {...props} 
                    exampleProjects={exampleProjects}
                    cancerProjects={cancerProjects}
                    influenzaProjects={influenzaProjects}
                    coronavirusProjects={coronavirusProjects}
                    measlesProjects={measlesProjects}
                    sickleCellProjects={sickleCellProjects}
                  />
                )} />
                <Route path="/candidate-login" component={CandidateLogin} />
                <Route path="/poster-login" component={PosterLogin} />
                <Route path="/poster-profile" component={PosterProfile} />
                <Route path="/application-confirmation" component={ApplicationConfirmation} />
                <Route path="/about" component={AboutUs} />
                <Route path="/generic-poster-profile/:researcherName" component={GenericPosterProfile} />
                <Route path="/create-project" component={CreateProject} />
                <Route path="/admin-login" component={AdminLogin} />
                <Route path="/admin-dashboard" component={AdminDashboard} />
                <Route 
                  path="/researcher-public-profile/:researcherId" 
                  component={ResearcherPublicProfile} 
                />
              </Switch>
            </AppContainer>
          </>
        )}
      </Router>
    </ApplicantProvider>
  );
};

export default App;