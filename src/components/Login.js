import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { startLogin } from '../actions/auth';

const LoginScreen = styled.div`
  align-items: center;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/houses.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const LoginPanel = styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  padding: 3.2rem 1.6rem;
  text-align: center;
  width: 25rem;
  opacity: 0.9;
`;

const LoginPanelTitle = styled.h1`
  margin: 0 0 1.2rem 0;
  line-height: 1;
`;

export const Button = styled.button`
  background: #4078c0;
  border: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 300;
  padding: 0.5rem;
  cursor: pointer;
`;

const Login = ({ startLogin }) => {
  return (
    <LoginScreen>
      <LoginPanel>
        <LoginPanelTitle>Budgetify</LoginPanelTitle>
        <p>Get your budget under control.</p>
        <Button onClick={startLogin}>Login with Google</Button>
      </LoginPanel>
    </LoginScreen>
  );
};

export default connect(
  undefined,
  {
    startLogin,
  }
)(Login);