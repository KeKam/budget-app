import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';
import { formatCurrencyType, formatCurrencyValue } from '../../utils/formatCurrency';
import { ExpenseItem as S } from './ExpenseItem.styled';

const ExpenseItem = ({ description, amount, createdAt, id , filters }) => { 
  return (
    <S.Link to={`/edit/${id}`}>
      <div>
        <S.Description>{description}</S.Description>
        <S.Date>{moment(createdAt).format('MMMM, Do, YYYY')}</S.Date>
      </div>
      <S.Amount>{numeral((amount / 100) * formatCurrencyValue(filters)).format(formatCurrencyType(filters))}</S.Amount>
    </S.Link>
  );
};

export default connect(
  (state) => {
    return {
      filters: state.filters,
    }
  }
)(ExpenseItem);