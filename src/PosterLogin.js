import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginContainer = styled.div`
  max-width: 450px;
  margin: 150px auto;
  padding: 30px;
  background-color: rgba(127, 191, 127, 0.1); // Light green background
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(127, 191, 127, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #7fbf7f; // Light green color
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
  border-bottom: 2px solid #7fbf7f; // Light green border
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-bottom-color: #4a7a4a; // Darker green on focus
  }
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 12px;
  left: 10px;
  color: #7fbf7f; // Light green color
`;

const Button = styled.button`
  padding: 10px;
  background-color: #7fbf7f; // Light green background
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #4a7a4a; // Darker green on hover
  }
`;

const PosterLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'drelena@metropolitan.edu' && password === 'research123') {
      history.push('/poster-profile');
    } else {
      alert('Invalid credentials');
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
        <Button type="submit">Log In</Button>
      </Form>
    </LoginContainer>
  );
};

export default PosterLogin;