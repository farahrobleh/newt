import React from 'react';
import styled from 'styled-components';
import Confetti from 'react-confetti';

const ConfirmationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const ConfirmationText = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
`;

const ApplicationConfirmation = () => {
  return (
    <ConfirmationContainer>
      <Confetti />
      <ConfirmationText>
        Application Received! Poster will get back to you soon if there's a match!
      </ConfirmationText>
    </ConfirmationContainer>
  );
};

export default ApplicationConfirmation;