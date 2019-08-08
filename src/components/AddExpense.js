import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

const AddExpense = ({ history, startAddExpense }) => {
  const onSubmit = (expense) => {
    startAddExpense(expense);
    history.push('/');
  };
  
  return (
    <div>
      <ExpenseForm 
        onSubmit={onSubmit}   
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => {
      return dispatch(startAddExpense(expense));
    }
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpense);