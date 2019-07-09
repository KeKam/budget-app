import React, { useState } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const ExpenseForm = () => {
  const [ description, setDescription ] = useState('');
  const [ note, setNote ] = useState('');
  const [ amount, setAmount ] = useState('');
  const [ createdAt, setCreatedAt ] = useState(moment());
  const [ focused, setFocused ] = useState(false);

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

  const onDateChange = (createdAt) => {
    setCreatedAt(createdAt);
  };

  const onFocusChange = ({ focused }) => {
    setFocused(focused);
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