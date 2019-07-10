import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpense = ({ dispatch }) => {
  return (
    <div>
      <ExpenseForm 
        onSubmit={(expense) => {
          dispatch(addExpense(expense));
        }}   
      />
    </div>
  );
};

export default connect()(AddExpense);