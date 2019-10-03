import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ExpenseItem from './ExpenseItem';
import getVisibleExpenses from '../selector/expenses';
import { ContentContainer } from './Header';
import { Header } from '../components/ExpensesSummary';
import { ItemLink } from '../components/ExpenseItem';

const MobileElements = styled.div`
  @media (min-width: 45rem) {
    display: none;
  }
`;

const DesktopElements = styled.div`
  @media (max-width: 44.99rem) {
    display: none;
  }
`;

const ListHeader = styled(Header)`
  border: 1px solid #dcdcdc;
  color: #666;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;
  margin-bottom: 0;
`;

const ListMessage = styled(ItemLink)`
  align-items: center;
  justify-content: center;
  color: #666;
  padding: 1.6rem;

  &:hover {
    background: none;
  }

  @media (min-width: 45rem) {
    justify-content: center;
  }
`;

const ListBody = styled.div`
  margin-bottom: 1.6rem;

  @media (min-width: 45rem) {
    margin-bottom: 3.2rem
  }
`;

const ExpenseList = ({ expenses }) => {
  return (
    <ContentContainer>
      <ListHeader>
        <MobileElements>Expenses</MobileElements>
        <DesktopElements>Expense</DesktopElements>
        <DesktopElements>Amount</DesktopElements>
      </ListHeader>
      <ListBody>
        {
          expenses.length === 0 ? (
            <ListMessage as='div'>
              <span>No existing expenses</span>
            </ListMessage>
          ) : (
            expenses.map((expense) => {
            return <ExpenseItem key={expense.id} {...expense} />;
          })
          )
        }
      </ListBody>
    </ContentContainer>
  );
};

export default connect(
  (state) => {
    return {
      expenses: getVisibleExpenses(state.expenses, state.filters),
    }
  }
)(ExpenseList);