import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { startLogout } from '../actions/auth';

const StyledHeader = styled.header`
  background: #364051;
  color: white;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 0;
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
`;

const HeaderTitle = styled.h1`
  color: white;
  text-decoration: none;
  margin: 0;
`;

const LogoutButton = styled.button`
  background: none;
  color: white;
  border: none;
  font-size: 1.2rem;
  font-weight: 300;
  padding: 0.5rem;
  cursor: pointer;
`; 

export const ContentContainer = styled.div`
  margin: 0 auto;
  padding: 0 1.6rem;
  max-width: 80rem;
`;

const Header = ({ startLogout }) => {
  return (
    <StyledHeader>
      <ContentContainer>
        <HeaderContent>
          <HeaderLink to='/dashboard'>
            <HeaderTitle>Budgetify</HeaderTitle>
          </HeaderLink>
          <LogoutButton onClick={startLogout}>Logout</LogoutButton>
        </HeaderContent>
      </ContentContainer>
    </StyledHeader>
  );
};

export default connect(
  undefined, 
  {
    startLogout,
  }
)(Header);