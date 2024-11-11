import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  max-width: 400px;
  margin: 120px auto 40px;
  padding: 40px;
  background-color: #1a1a1a;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  color: #ffffff;
`;

const Title = styled.h1`
  color: #7fbf7f;
  margin-bottom: 30px;
  text-align: center;
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
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #2a2a2a;
  color: white;

  &:focus {
    outline: none;
    border-color: #7fbf7f;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 12px;
  left: 10px;
  color: #FF3232;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #7fbf7f;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6ca86c;
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
    <Container>
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
    </Container>
  );
};

export default PosterLogin;