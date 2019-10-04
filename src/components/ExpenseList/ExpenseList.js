import React from 'react';
import { connect } from 'react-redux';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import getVisibleExpenses from '../../selector/expenses';
import { SharedStyles as SS } from '../SharedStyles/SharedStyles';
import { ExpenseList as S } from './ExpenseList.styled';

const ExpenseList = ({ expenses }) => {
  return (
    <SS.ContentContainer>
      <S.Header>
        <S.Mobile>Expenses</S.Mobile>
        <S.Desktop>Expense</S.Desktop>
        <S.Desktop>Amount</S.Desktop>
      </S.Header>
      <S.List>
        {
          expenses.length === 0 ? (
            <S.Message>
              <span>No existing expenses</span>
            </S.Message>
          ) : (
            expenses.map((expense) => {
            return <ExpenseItem key={expense.id} {...expense} />;
          })
          )
        }
      </S.List>
    </SS.ContentContainer>
  );
};

export default connect(
  (state) => {
    return {
      expenses: getVisibleExpenses(state.expenses, state.filters),
    }
  }
)(ExpenseList);