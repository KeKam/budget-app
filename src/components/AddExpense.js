import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpense = ({ history, addExpense }) => {
  const onSubmit = (expense) => {
    addExpense(expense);
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
    addExpense: (expense) => {
      return dispatch(addExpense(expense));
    }
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpense);