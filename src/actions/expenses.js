import database from '../firebase/firebase';

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return async (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    try {
      const response = await database.ref('expenses').push(expense);
      dispatch(addExpense({
        id: response.ref.key,
        ...expense
      }));
    } catch (error) {
      console.log('Failed to save data to database', error);
    }
  };
};

export const removeExpense = ({ id }) =>({
  type: 'REMOVE_EXPENSE',
  id
});

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});