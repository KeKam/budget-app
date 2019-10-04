import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { Login as S } from './Login.styled';

const Login = ({ startLogin }) => {
  return (
    <S.Wrapper>
      <S.Panel>
        <S.Title>Budgetify</S.Title>
        <p>Get your budget under control.</p>
        <S.Button onClick={startLogin}>Login with Google</S.Button>
      </S.Panel>
    </S.Wrapper>
  );
};

export default connect(
  undefined,
  {
    startLogin,
  }
)(Login);