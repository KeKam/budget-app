import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpense = ({ expenseMatch, history, startEditExpense, startRemoveExpense }) => {
  const onSubmit = (expense) => {
    startEditExpense(expenseMatch.id, expense);
    history.push('/');
  };

  const onRemove = () => {
    startRemoveExpense({ id: expenseMatch.id });
    history.push('/');
  };
  
  return (
    <div>
      <ExpenseForm
        expense={expenseMatch}
        onSubmit={onSubmit}
      />
      <button 
        onClick={onRemove}
        >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = ({ expenses }, { match }) => {
  return {
    expenseMatch: expenses.find((expense) => {
      return  expense.id === match.params.id;
    })
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startEditExpense: (id, expense) => {
      return dispatch(startEditExpense(id, expense));
    },
    startRemoveExpense: (id) => {
      return dispatch(startRemoveExpense(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);