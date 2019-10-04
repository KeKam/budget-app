import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { SharedStyles as SS } from '../SharedStyles/SharedStyles';
import { Header as S } from './Header.styled';

const Header = ({ startLogout }) => {
  return (
    <S.Wrapper>
      <SS.ContentContainer>
        <S.Content>
          <S.Link to='/dashboard'>
            <S.Title>Budgetify</S.Title>
          </S.Link>
          <S.Button onClick={startLogout}>Logout</S.Button>
        </S.Content>
      </SS.ContentContainer>
    </S.Wrapper>
  );
};

export default connect(
  undefined, 
  {
    startLogout,
  }
)(Header);