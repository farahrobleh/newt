import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeOutPulse = keyframes`
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); }
  100% { opacity: 0; transform: scale(1); }
`;

const IntroContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${fadeOutPulse} 2s ease-in-out forwards;
`;

const IntroImage = styled.img`
  max-width: 200px;
  max-height: 200px;
`;

const IntroAnimation = ({ imageSrc }) => (
  <IntroContainer>
    <IntroImage src={imageSrc} alt="Intro" />
  </IntroContainer>
);

export default IntroAnimation;