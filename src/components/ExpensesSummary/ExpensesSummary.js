import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../../selector/expenses';
import totalExpenses from '../../selector/expenses-total';
import { formatCurrencyType, formatCurrencyValue } from '../../utils/formatCurrency';
import { SharedStyles as SS } from '../SharedStyles/SharedStyles';
import { ExpensesSummary as S } from './ExpensesSummary.styled';

const ExpensesSummary = ({ expenseCount, expensesTotal, filters }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedTotalValue = numeral((expensesTotal / 100) * formatCurrencyValue(filters)).format(formatCurrencyType(filters));
  return (
    <S.Wrapper>
      <SS.ContentContainer>
        <S.Text>Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedTotalValue}</span> </S.Text>
        <S.Button>
          <S.Link to='/create'>Add Expense</S.Link>
        </S.Button>
      </SS.ContentContainer>
    </S.Wrapper>
  );
};

export default connect(
  (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
      expenseCount: visibleExpenses.length,
      expensesTotal: totalExpenses(visibleExpenses),
      filters: state.filters,
    }
  }
)(ExpensesSummary);