import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 1000px;
  margin: 100px auto 0;
  padding: 40px 20px;
  color: #ffffff;
  background-color: rgba(127, 191, 127, 0.1);
  border-radius: 10px;
`;

const MainTitle = styled.h1`
  color: #7fbf7f;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 40px;
  color: #ffffff;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 40px 0;
`;

const FeatureCard = styled.div`
  padding: 20px;
  background-color: rgba(127, 191, 127, 0.05);
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureTitle = styled.h3`
  color: #7fbf7f;
  margin-bottom: 10px;
  font-size: 1.3rem;
`;

const FeatureText = styled.p`
  color: #ffffff;
  line-height: 1.5;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 40px 0;
  text-align: center;
`;

const StatItem = styled.div`
  padding: 20px;
`;

const StatNumber = styled.h2`
  color: #7fbf7f;
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const StatLabel = styled.p`
  color: #ffffff;
  font-size: 1.1rem;
`;

const CallToAction = styled.h2`
  color: #7fbf7f;
  text-align: center;
  font-size: 2rem;
  margin: 40px 0 20px;
`;

const FinalText = styled.p`
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
`;

const AboutUs = () => {
  return (
    <AboutContainer>
      <MainTitle>Join the Future of Medical Innovation</MainTitle>
      <Subtitle>
        In an era of unprecedented medical advancement, we're building the first true
        ecosystem where innovation meets community, accelerating breakthroughs in
        healthcare research!
      </Subtitle>
      <Subtitle>
        Doctors globally are seeking a trusted digital space for authentic scientific discourse.
      </Subtitle>

      <FeatureGrid>
        <FeatureCard>
          <FeatureTitle>Real-time Discovery</FeatureTitle>
          <FeatureText>Share and discuss clinical breakthroughs instantly with global peers</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Research Growth</FeatureTitle>
          <FeatureText>Connect with research grants, lab positions, and funding opportunities</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Global Collaboration</FeatureTitle>
          <FeatureText>Form international research partnerships with verified professionals</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Event Access</FeatureTitle>
          <FeatureText>Stay connected with leading medical conferences and events</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Verified Profiles</FeatureTitle>
          <FeatureText>Build authenticated research profiles that showcase real impact</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Knowledge Exchange</FeatureTitle>
          <FeatureText>Engage in peer-to-peer learning and expertise sharing</FeatureText>
        </FeatureCard>
      </FeatureGrid>

      <Stats>
        <StatItem>
          <StatNumber>100,000+</StatNumber>
          <StatLabel>Engaged Researchers</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>Global</StatNumber>
          <StatLabel>Research Network</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>24/7</StatNumber>
          <StatLabel>Knowledge Exchange</StatLabel>
        </StatItem>
      </Stats>

      <CallToAction>Ready to Transform Medical Research?</CallToAction>
      <FinalText>Join us in building the future of healthcare innovation.</FinalText>
    </AboutContainer>
  );
};

export default AboutUs;