import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import numeral from 'numeral';

export const ItemLink = styled(Link)`
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

const ItemTitle = styled.h3`
  margin: 0;
  word-break: break-all;
`;

const ItemDate = styled.span`
  color: #666;
  font-size: 1.4rem;
`;

const ItemAmount = styled.h3`
  margin: 1.2rem 0 0 0;

  @media (min-width: 45rem) {
    margin: 0;
    padding-left: 1.2rem;
  }
`;

const ExpenseItem = ({ description, amount, createdAt, id }) => {
  return (
    <ItemLink to={`/edit/${id}`}>
      <div>
        <ItemTitle>{description}</ItemTitle>
        <ItemDate>{moment(createdAt).format('MMMM, Do, YYYY')}</ItemDate>
      </div>
      <ItemAmount>{numeral(amount / 100).format('$0,0.00')} </ItemAmount>
    </ItemLink>
  );
};

export default ExpenseItem;