import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selector/expenses';
import totalExpenses from '../selector/expenses-total';

const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedTotalValue = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totalling {formattedTotalValue} </h1>
    </div>
  );
};

const mapStateToProps = ({ expenses, filters }) => {
  const visibleExpenses = getVisibleExpenses(expenses, filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: totalExpenses(visibleExpenses)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);