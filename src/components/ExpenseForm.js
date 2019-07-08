import React from 'react';

const ExpenseForm = () => {
  return (
    <div>
      <form>
        <input type='text' placeholder='Description' autoFocus />
        <input type='number' placeholder='Amount' />
      </form>
      <textarea placeholder='Add a note for your expense (optional)' />
      <button>Add Expense</button>
    </div>
  );
};

export default ExpenseForm;