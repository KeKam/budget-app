import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { ExpenseItem as S } from './ExpenseItem.styled';

const ExpenseItem = ({ description, amount, createdAt, id }) => {
  return (
    <S.Link to={`/edit/${id}`}>
      <div>
        <S.Description>{description}</S.Description>
        <S.Date>{moment(createdAt).format('MMMM, Do, YYYY')}</S.Date>
      </div>
      <S.Amount>{numeral(amount / 100).format('$0,0.00')} </S.Amount>
    </S.Link>
  );
};

export default ExpenseItem;