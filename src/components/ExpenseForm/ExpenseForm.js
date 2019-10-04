import React, { useState } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { ExpenseForm as S } from './ExpenseForm.styled';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const ExpenseForm = ({ onSubmit, expense }) => {
  const [ description, setDescription ] = useState(expense ? expense.description : '');
  const [ note, setNote ] = useState(expense ? expense.note : '');
  const [ amount, setAmount ] = useState(expense ? (expense.amount / 100).toString() : '');
  const [ createdAt, setCreatedAt ] = useState(expense ? moment(expense.createdAt) : moment());
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
    <S.Form onSubmit={onFormSubmit}>
      {error && <S.Error>{error}</S.Error>}
      <S.Input
        type='text' 
        placeholder='Description'
        value={description} 
        onChange={onDescriptionChange}
        autoFocus 
      />
      <S.Input
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
      <S.Textarea
        as='textarea'
        placeholder='Add a note for your expense (optional)' 
        value={note}
        onChange={onNoteChange}
      />
      <div>
        <S.Button>Save Expense</S.Button>
      </div>
    </S.Form>
  );
};

export default ExpenseForm;