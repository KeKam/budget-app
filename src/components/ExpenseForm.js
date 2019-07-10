import React, { useState } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const ExpenseForm = ({ onSubmit }) => {
  const [ description, setDescription ] = useState('');
  const [ note, setNote ] = useState('');
  const [ amount, setAmount ] = useState('');
  const [ createdAt, setCreatedAt ] = useState(moment());
  const [ focused, setFocused ] = useState(false);
  const [ error, setError ] = useState('');

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
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(amount);
    }
  };

  const onDateChange = (createdAt) => {
    if (createdAt) {
      setCreatedAt(createdAt);
    }
  };

  const onFocusChange = ({ focused }) => {
    setFocused(focused);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount) {
      setError('Please provide description and amount');
    } else {
      setError('');
      onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note
      });
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={onFormSubmit}>
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
        <SingleDatePicker
          date={createdAt}
          onDateChange={onDateChange}
          focused={focused}
          onFocusChange={onFocusChange}
          isOutsideRange={() => false}
          numberOfMonths={1}
        />
        <textarea 
          placeholder='Add a note for your expense (optional)' 
          value={note}
          onChange={onNoteChange}
        />
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;