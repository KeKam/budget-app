import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { startAddExpense } from '../../actions/expenses';
import { SharedStyles as SS } from '../SharedStyles/SharedStyles';
import { AddExpense as S } from './AddExpense.styled';

const AddExpense = ({ history, startAddExpense }) => {
  const onSubmit = (expense) => {
    startAddExpense(expense);
    history.push('/');
  };
  
  return (
    <div>
      <S.Header>
        <SS.ContentContainer>
          <S.Text>Add Expense</S.Text>
        </SS.ContentContainer>
      </S.Header>
      <SS.ContentContainer>
        <ExpenseForm 
          onSubmit={onSubmit}   
        />
      </SS.ContentContainer>
    </div>
  );
};

export default connect(
  undefined, 
  {
    startAddExpense,
  }
)(AddExpense);