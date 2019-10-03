import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import { Header, HeaderText } from './ExpensesSummary';
import { ContentContainer } from './Header';

const AddExpense = ({ history, startAddExpense }) => {
  const onSubmit = (expense) => {
    startAddExpense(expense);
    history.push('/');
  };
  
  return (
    <div>
      <Header>
        <ContentContainer>
          <HeaderText>Add Expense</HeaderText>
        </ContentContainer>
      </Header>
      <ContentContainer>
        <ExpenseForm 
          onSubmit={onSubmit}   
        />
      </ContentContainer>
    </div>
  );
};

export default connect(
  undefined, 
  {
    startAddExpense,
  }
)(AddExpense);