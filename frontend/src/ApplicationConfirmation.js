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
  overflow: hidden;
`;

const ConfirmationText = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  text-align: center;
  max-width: 80%;
  padding: 0 20px;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ApplicationConfirmation = () => {
    return (
      <Wrapper>
        <ConfirmationContainer>
          <Confetti />
          <ConfirmationText>
            Application Received! Poster will get back to you soon if there's a match!
          </ConfirmationText>
        </ConfirmationContainer>
      </Wrapper>
    );
  };

export default ApplicationConfirmation;