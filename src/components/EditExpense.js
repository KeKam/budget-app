import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import { Header, HeaderText } from './ExpensesSummary';
import { ContentContainer } from './Header';
import { Button } from './Login';

const RedButton = styled(Button)`
  background: #bd2c00;
`;

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
      <Header>
        <ContentContainer>
          <HeaderText>Edit Expense</HeaderText>
        </ContentContainer>
      </Header>
      <ContentContainer>
        <ExpenseForm
          expense={expenseMatch}
          onSubmit={onSubmit}
        />
        <RedButton
          onClick={onRemove}
          >
          Remove Expense
        </RedButton>
      </ContentContainer>
    </div>
  );
};

// const mapStateToProps = ({ expenses }, { match }) => {
//   return {
//     expenseMatch: expenses.find((expense) => {
//       return  expense.id === match.params.id;
//     })
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     startEditExpense: (id, expense) => {
//       return dispatch(startEditExpense(id, expense));
//     },
//     startRemoveExpense: (id) => {
//       return dispatch(startRemoveExpense(id));
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);

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