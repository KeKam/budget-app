import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../../actions/expenses';
import { SharedStyles as SS } from '../SharedStyles/SharedStyles';
import { EditExpense as S } from './EditExpense.styled';

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
      <S.Header>
        <SS.ContentContainer>
          <S.Title>Edit Expense</S.Title>
        </SS.ContentContainer>
      </S.Header>
      <SS.ContentContainer>
        <ExpenseForm
          expense={expenseMatch}
          onSubmit={onSubmit}
        />
        <S.Button
          onClick={onRemove}
          >
          Remove Expense
        </S.Button>
      </SS.ContentContainer>
    </div>
  );
};

export default connect(
  (state, props) => {
    return {
      expenseMatch: state.expenses.find((expense) => {
        return expense.id === props.match.params.id;
      }),
    }
  },
  {
    startEditExpense,
    startRemoveExpense,
  }
)(EditExpense);