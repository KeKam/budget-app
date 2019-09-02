import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import styled from 'styled-components';
import getVisibleExpenses from '../selector/expenses';
import totalExpenses from '../selector/expenses-total';
import { ContentContainer } from '../styles/styles';

const SummaryArea = styled.div`
  background: #f5f5f5;
  margin-bottom: 2rem;
  padding: 2rem 0;
`;

const SummaryText= styled.h1`
  font-weight: 300;
  margin: 0;

  span {
    font-weight: 700;
  }
`;

const SummaryNavigation = styled.div`
  margin-top: 1.6rem;
`;

const StyledLink = styled(Link)`
  background: #4078c0;
  color: white;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 300;
  padding: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;
`;

const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedTotalValue = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <SummaryArea>
      <ContentContainer>
        <SummaryText>Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedTotalValue}</span> </SummaryText>
        <SummaryNavigation>
          <StyledLink to='/create'>Add Expense</StyledLink>
        </SummaryNavigation>
      </ContentContainer>
    </SummaryArea>
  );
};

const mapStateToProps = ({ expenses, filters }) => {
  const visibleExpenses = getVisibleExpenses(expenses, filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: totalExpenses(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);