import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect} from 'react-router-dom';
import Header from '../components/Header';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <div>
      <Route {...rest} component={(props) => {
        return (
          isAuthenticated ? (
            <div>
              <Header />
              <Component {...props} /> 
            </div>
          ) : (
            <Redirect to='/' />
          )
        );
      }} />
    </div>

  );
};

export default connect(
  (state) => {
    return {
      isAuthenticated: !!state.auth.uid,
    }
  }
)(PrivateRoute);