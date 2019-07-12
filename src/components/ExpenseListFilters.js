import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

const ExpenseListFilters = ({ filters, dispatch }) => {
  const [ focused, setFocused ] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
  };

  const onFocusChange = (focused) => {
    setFocused(focused);
  };

  return (
    <div>
      <input type='text' value={filters.text} onChange={(e) => {
        dispatch(setTextFilter(e.target.value));
      }} />
      <select
        value={filters.sortBy}
        onChange={(e) => {
          if (e.target.value === 'date') {
            dispatch(sortByDate());
          } else if (e.target.value === 'amount') {
            dispatch(sortByAmount());
          }
        }}
      >
        <option value='date'>Date</option>
        <option value='amount'>Amount</option>
      </select>
      <DateRangePicker 
        startDate={filters.startDate}
        endDate={filters.endDate}
        onDatesChange={onDatesChange}
        focusedInput={focused}
        onFocusChange={onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
    </div>
  );
};

const mapStateToProps = ({ filters }) => {
  return {
    filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);