import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  color: #ffffff;
`;

const Title = styled.h1`
  color: #6e8efb;
  text-align: center;
  margin-bottom: 30px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: #a777e3;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  line-height: 1.6;
`;

const List = styled.ul`
  margin-left: 20px;
  margin-bottom: 15px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const ContactInfo = styled.div`
  background-color: rgba(110, 142, 251, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin-top: 30px;
`;

const AboutUs = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      
      <Section>
        <Paragraph>Welcome to Research Voyager!</Paragraph>
        <Paragraph>At Research Voyager, we're dedicated to transforming medical research recruitment. Our mission is to bridge the gap between exceptional research talent—both local and international—and U.S.-based institutions and hospitals. By harnessing the power of AI and tapping into a diverse talent pool, we aim to accelerate breakthroughs and foster collaboration within the scientific community.</Paragraph>
      </Section>

      <Section>
        <SectionTitle>The Challenge</SectionTitle>
        <Paragraph>U.S. research institutions and hospitals often face significant hurdles in efficiently accessing diverse talent. Many talented researchers, whether local or from around the globe, encounter barriers that hinder their ability to connect with opportunities in the U.S. The current recruitment processes are frequently slow and inefficient, resulting in overlooked qualified candidates. This leads to delayed research progress and missed chances for groundbreaking collaborations.</Paragraph>
      </Section>

      <Section>
        <SectionTitle>Our Solution</SectionTitle>
        <Paragraph>Research Voyager offers an AI-powered platform that revolutionizes research recruitment by:</Paragraph>
        <List>
          <ListItem><strong>Connecting Local and Global Talent</strong>: We facilitate connections between researchers and U.S. institutions, expanding access to diverse expertise.</ListItem>
          <ListItem><strong>Advanced Matching Algorithms</strong>: Our sophisticated algorithms ensure precise alignment of skills with project needs, streamlining the recruitment process.</ListItem>
          <ListItem><strong>Streamlined Onboarding</strong>: We provide a seamless onboarding experience for both local and international researchers, allowing for quick integration into research teams.</ListItem>
          <ListItem><strong>Rapid Position Filling</strong>: Our platform enables institutions to fill urgent research positions efficiently, ensuring that projects stay on track.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Market Insights</SectionTitle>
        <Paragraph>The U.S. healthcare staffing market is witnessing significant growth. The employment of medical scientists is projected to increase by 11% from 2023 to 2033, with approximately 8,900 openings anticipated annually. Key drivers of this growth include:</Paragraph>
        <List>
          <ListItem><strong>Increasing Demand for Specialized Research Skills</strong>: As new fields emerge, the need for specialized expertise continues to rise.</ListItem>
          <ListItem><strong>Growing Emphasis on Diversity</strong>: Diverse teams have been shown to enhance innovation and improve research outcomes.</ListItem>
          <ListItem><strong>Post-Pandemic Focus on Global Collaboration</strong>: The need for efficient, collaborative approaches to healthcare research has never been more critical.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Our Vision and Impact</SectionTitle>
        <Paragraph>At Research Voyager, we envision a future where:</Paragraph>
        <List>
          <ListItem><strong>Global Research Collaboration is Revolutionized</strong>: We aim to foster an inclusive research environment that transcends borders.</ListItem>
          <ListItem><strong>Medical Breakthroughs are Accelerated</strong>: Diverse teams lead to innovative solutions and faster discoveries.</ListItem>
          <ListItem><strong>A Borderless Research Community is Created</strong>: We strive to establish a network that unites researchers from all backgrounds.</ListItem>
          <ListItem><strong>Research Voyager becomes the Go-To Platform</strong>: Our goal is to be the leading platform for research talent allocation worldwide.</ListItem>
        </List>
      </Section>

      <ContactInfo>
        <SectionTitle>Get in Touch</SectionTitle>
        <Paragraph>We'd love to hear from you! For inquiries or more information, please reach out:</Paragraph>
        <Paragraph><strong>Email</strong>: <a href="mailto:ayan@researchvoyager.com">ayan@researchvoyager.com</a></Paragraph>
        <Paragraph><strong>Phone</strong>: +1 216 543 1146</Paragraph>
      </ContactInfo>

      <Paragraph>Thank you for joining us on this exciting journey to reshape the future of medical research recruitment. Together, we can unlock new possibilities and drive meaningful change in the scientific community.</Paragraph>
    </AboutContainer>
  );
};

export default AboutUs;