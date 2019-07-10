import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpense = ({ dispatch, history }) => {
  return (
    <div>
      <ExpenseForm 
        onSubmit={(expense) => {
          dispatch(addExpense(expense));
          history.push('/');
        }}   
      />
    </div>
  );
};

export default connect()(AddExpense);