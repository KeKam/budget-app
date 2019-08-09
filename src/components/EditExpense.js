import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';

const EditExpense = ({ expenseMatch, history, editExpense, startRemoveExpense }) => {
  const onSubmit = (expense) => {
    editExpense(expenseMatch.id, expense);
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
    editExpense: (id, expense) => {
      return dispatch(editExpense(id, expense));
    },
    startRemoveExpense: (id) => {
      return dispatch(startRemoveExpense(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);