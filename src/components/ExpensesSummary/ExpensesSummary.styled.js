import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ExpensesSummary = () => {};

ExpensesSummary.Wrapper = styled.div`
  background: #f5f5f5;
  margin-bottom: 2rem;
  padding: 2rem 0;
`;

ExpensesSummary.Text = styled.h1`
  font-weight: 300;
  margin: 0;

  span {
    font-weight: 700;
  }
`;

ExpensesSummary.Button = styled.div`
  margin-top: 1.6rem;
`;

ExpensesSummary.Link = styled(Link)`
  background: #4078c0;
  color: white;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 300;
  padding: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;
`;

