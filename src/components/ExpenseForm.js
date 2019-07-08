import React, { useState } from 'react';

const ExpenseForm = () => {
  const [ description, setDescription ] = useState('');
  const [ note, setNote ] = useState('');
  const [ amount, setAmount ] = useState('');

  const onDescriptionChange = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const onNoteChange = (e) => {
    const note = e.target.value;
    setNote(note);
  };

  const onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      setAmount(amount);
    }
  };

  return (
    <div>
      <form>
        <input 
          type='text' 
          placeholder='Description'
          value={description} 
          onChange={onDescriptionChange}
          autoFocus 
        />
        <input 
          type='text' 
          placeholder='Amount' 
          value={amount}
          onChange={onAmountChange}
        />
      </form>
      <textarea 
        placeholder='Add a note for your expense (optional)' 
        value={note}
        onChange={onNoteChange}
      />
      <button>Add Expense</button>
    </div>
  );
};

export default ExpenseForm;