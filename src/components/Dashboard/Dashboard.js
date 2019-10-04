import React from 'react';
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpenseListFilters from '../ExpenseListFilters/ExpenseListFilters';
import ExpensesSummary from '../ExpensesSummary/ExpensesSummary'

const Dashboard = () => {
  return (
    <div>
      <ExpensesSummary />
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
};

export default Dashboard;