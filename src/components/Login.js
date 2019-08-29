import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { startLogin } from '../actions/auth';

const LoginScreen = styled.div`
  align-items: center;
  background: url('/images/houses.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

const LoginPanel = styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  padding: 3.2rem 1.6rem;
  text-align: center;
  width: 15rem;
  opacity: 0.9;
`
const LoginPanelTitle = styled.h1`
  margin: 0 0 1.2rem 0;
  line-height: 1;
`
const LoginPanelButton = styled.button`
  background: #4078c0;
  border: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 300;
  padding: 0.5rem;
  cursor: pointer;
`

const Login = ({ startLogin }) => {
  return (
    <LoginScreen>
      <LoginPanel>
        <LoginPanelTitle>Budgetify</LoginPanelTitle>
        <p>Get your budget under control.</p>
        <LoginPanelButton onClick={startLogin}>Login with Google</LoginPanelButton>
      </LoginPanel>
    </LoginScreen>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => {
      return dispatch(startLogin());
    }
  };
};

export default connect(undefined, mapDispatchToProps)(Login);