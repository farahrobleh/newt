import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useHistory } from 'react-router-dom';  // Add this import

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
  margin-bottom: 20px;
`;

const BetaButton = styled.button`
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
  const history = useHistory();

  const handleBetaClick = () => {
    history.push('/community-hub');
  };

  return (
    <PageContainer>
      <BlurredBackground />
      <ScrollingContent />
      <TextContainer>
        <Title>Community Feed</Title>
        <BetaButton onClick={handleBetaClick}>Beta Site</BetaButton>
      </TextContainer>
    </PageContainer>
  );
};

export default CommunityFeed;