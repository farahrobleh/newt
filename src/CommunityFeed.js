import React from 'react';
import styled, { keyframes } from 'styled-components';

const scrollAnimation = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const TextContainer = styled.div`
  text-align: center;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: white;
`;

const BlurredBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(110, 142, 251, 0.1), rgba(167, 119, 227, 0.1));
  filter: blur(10px);
  z-index: 1;
`;

const ScrollingContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200%;
  background: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.1) 0px,
    rgba(255, 255, 255, 0.1) 2px,
    transparent 2px,
    transparent 20px
  );
  animation: ${scrollAnimation} 20s linear infinite;
  z-index: 0;
`;

const CommunityFeed = () => {
  return (
    <PageContainer>
      <BlurredBackground />
      <ScrollingContent />
      <TextContainer>
        <Title>Community Feed</Title>
        <Subtitle>Coming Soon</Subtitle>
      </TextContainer>
    </PageContainer>
  );
};

export default CommunityFeed;