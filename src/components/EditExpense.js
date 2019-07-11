import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';

const EditExpense = ({ expenseMatch, dispatch, history }) => {
  return (
    <div>
      <ExpenseForm
        expense={expenseMatch}
        onSubmit={(expense) => {
          dispatch(editExpense(expenseMatch.id, expense));
          history.push('/');
          console.log('updated', expenseMatch.id);
        }}
      />
    </div>
  );
};

const mapStateToProps = ({ expenses }, { match }) => {
  return {
    expenseMatch: expenses.find((expense) => {
      return  expense.id === match.params.id 
    })
  };
};

export default connect(mapStateToProps)(EditExpense);