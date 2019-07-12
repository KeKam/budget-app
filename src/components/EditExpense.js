import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

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
      <button 
        onClick={() => {
          dispatch(removeExpense({ id: expenseMatch.id }));
          history.push('/');
        }}>
        Remove
      </button>
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