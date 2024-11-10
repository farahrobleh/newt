import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginContainer = styled.div`
  max-width: 450px;
  margin: 150px auto;
  padding: 30px;
  background-color: rgba(255, 50, 50, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 50, 50, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #FF3232;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 10px 10px 40px;
  border: none;
  border-bottom: 2px solid #FF3232;
  background-color: transparent;
  color: #333;
  font-size: 16px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-bottom-color: #CC0000;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 12px;
  left: 10px;
  color: #FF3232;
`;

const Button = styled.button`
  background-color: #FF3232;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #CC0000;
  }
`;

const ErrorMessage = styled.p`
  color: #FF3232;
  text-align: center;
  margin-top: 10px;
`;

const PosterLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Store the email in localStorage for use in the generic profile
    localStorage.setItem('userEmail', email);

    // Check if it's Dr. Elena's credentials
    if (email === 'drelena@metropolitan.edu' && password === 'research123') {
      history.push('/poster-profile');
    } else {
      // For any other valid email/password combination
      if (email.includes('@') && password.length >= 6) {
        history.push('/generic-poster-profile');
      } else {
        setError('Please enter a valid email and password (minimum 6 characters)');
      }
    }
  };

  return (
    <LoginContainer>
      <Title>Poster Login</Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Icon icon={faUser} />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <Icon icon={faLock} />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputGroup>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Log In</Button>
      </Form>
    </LoginContainer>
  );
};

export default PosterLogin;