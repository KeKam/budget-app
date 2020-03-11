import database from '../firebase/firebase';

export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    try {
      const response = await database
        .ref(`users/${uid}/expenses`)
        .push(expense);
      dispatch(
        addExpense({
          id: response.ref.key,
          ...expense
        })
      );
    } catch (error) {
      console.log('Failed to save data to database', error);
    }
  };
};

export const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    try {
      await database.ref(`users/${uid}/expenses/${id}`).remove();
      dispatch(removeExpense({ id }));
    } catch (error) {
      console.log('Failed to remove expense', error);
    }
  };
};

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    try {
      await database.ref(`users/${uid}/expenses/${id}`).update(updates);
      dispatch(editExpense(id, updates));
    } catch (error) {
      console.log('Failed to update expense', error);
    }
  };
};

export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    try {
      const response = await database
        .ref(`users/${uid}/expenses`)
        .once('value');
      const expenses = [];
      response.forEach(expense => {
        expenses.push({
          id: expense.key,
          ...expense.val()
        });
      });
      dispatch(setExpenses(expenses));
    } catch (error) {
      console.log('Failed to get expenses from database', error);
    }
  };
};
