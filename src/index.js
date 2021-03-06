import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';
import Loading from './components/Loading/Loading';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

ReactDOM.render(<Loading />, document.getElementById('root'));

firebase.auth().onAuthStateChanged(async user => {
  if (user) {
    try {
      store.dispatch(login(user.uid));
      await store.dispatch(startSetExpenses());
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    } catch (error) {
      console.log('Failed to log in', error);
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
