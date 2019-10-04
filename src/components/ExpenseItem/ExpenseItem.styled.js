import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ExpenseItem = () => {};

ExpenseItem.Link = styled(Link)`
  border: 1px solid #dcdcdc;
  border-top: none;
  color: #333;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  text-decoration: none;
  transition: background 0.3s ease;
  
  &:hover {
    background: #f5f5f5;
  }

  @media (min-width: 45rem) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.6rem;
  }
`;

ExpenseItem.Description = styled.div`
  margin: 0;
  word-break: break-all;
`;

ExpenseItem.Date = styled.span`
  color: #666;
  font-size: 1.4rem;
`;

ExpenseItem.Amount = styled.h3`
  margin: 1.2rem 0 0 0;

  @media (min-width: 45rem) {
    margin: 0;
    padding-left: 1.2rem;
  }
`;