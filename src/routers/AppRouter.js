import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createGlobalStyle } from 'styled-components';
import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard/Dashboard';
import AddExpense from '../components/AddExpense/AddExpense';
import EditExpense from '../components/EditExpense/EditExpense';
import NotFound from '../components/NotFound/NotFound';
import Login from '../components/Login/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { fetchCurrencyRates } from '../actions/filters';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    font-size: 1.6rem;
    margin: 0;
  }
`;

export const history = createBrowserHistory();

const AppRouter = ({ fetchCurrencyRates }) => {
  useEffect(() => {
    fetchCurrencyRates();
  });

  return (
    <Router history={history}>
      <div>
        <GlobalStyle />
        <Switch>
          <PublicRoute path='/' component={Login} exact={true} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/create' component={AddExpense} />
          <PrivateRoute path='/edit/:id' component={EditExpense} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default connect(undefined, {
  fetchCurrencyRates
})(AppRouter);
