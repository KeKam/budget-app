import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = () => {};

Header.Wrapper = styled.header`
  background: #364051;
  color: white;
`;

Header.Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 0;
`;

Header.Link = styled(Link)`
  text-decoration: none;
`;

Header.Title = styled.h1`
  font-size: 2rem;
  color: white;
  text-decoration: none;
  margin: 0;

  @media (min-width: 45rem) {
    font-size: 3rem;
  }
`;

Header.Button = styled.button`
  background: none;
  color: white;
  border: none;
  font-size: 1.2rem;
  font-weight: 300;
  padding: 0.5rem;
  cursor: pointer;
`;
