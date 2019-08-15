import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const Login = ({ startLogin }) => {
  return (
    <div>
      <button onClick={startLogin}>Login</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => {
      return dispatch(startLogin());
    }
  };
};

export default connect(undefined, mapDispatchToProps)(Login);