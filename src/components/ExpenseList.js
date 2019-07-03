import React from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import getVisibleExpenses from '../selector/expenses';

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h1>Expense List</h1>
        {
          expenses.map((expense) => {
            return <ExpenseItem key={expense.id} {...expense} />
          })
        }
    </div>
  );
};

const mapStateToProps = ({ expenses, filters }) => {
  return {
    expenses: getVisibleExpenses(expenses, filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);