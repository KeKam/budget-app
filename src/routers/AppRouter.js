import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createGlobalStyle } from 'styled-components';
import Dashboard from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import NotFound from '../components/NotFound';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

export const history = createBrowserHistory();

const AppRouter = () => {
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

export default AppRouter;