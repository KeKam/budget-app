import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Budget App</h1>
      <NavLink to='/' exact={true}>Dashboard</NavLink>
      <NavLink to='/create'>Add Expense</NavLink>
    </header>
  );
};

export default Header;