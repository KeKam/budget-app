import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => {
  return (
    <header>
      <h1>Budget App</h1>
      <NavLink to='/dashboard'>Dashboard</NavLink>
      <NavLink to='/create'>Add Expense</NavLink>
      <button onClick={startLogout}>Logout</button>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLogout: () => {
      return dispatch(startLogout());
    }
  };
};

export default connect(undefined, mapDispatchToProps)(Header);