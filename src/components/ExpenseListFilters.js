import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

const ExpenseListFilters = ({ filters, setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount }) => {
  const [ focused, setFocused ] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const onFocusChange = (focused) => {
    setFocused(focused);
  };

  const onInputChange = (e) => {
    setTextFilter(e.target.value);
  };

  const onSortChange = (e) => {
    if (e.target.value === 'date') {
      sortByDate();
    } else if (e.target.value === 'amount') {
      sortByAmount();
    }
  };

  return (
    <div>
      <input type='text' value={filters.text} onChange={onInputChange} />
      <select
        value={filters.sortBy}
        onChange={onSortChange}
      >
        <option value='date'>Date</option>
        <option value='amount'>Amount</option>
      </select>
      <DateRangePicker 
        startDate={filters.startDate}
        startDateId='start'
        endDate={filters.endDate}
        endDateId='end'
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

const mapDispatchToProps = (dispatch) => {
  return {
    setStartDate: (startDate) => {
      return dispatch(setStartDate(startDate));
    },
    setEndDate: (endDate) => {
      return dispatch(setEndDate(endDate));
    },
    setTextFilter: (text) => {
      return dispatch(setTextFilter(text));
    },
    sortByDate: () => {
      return dispatch(sortByDate());
    },
    sortByAmount: () => {
      return dispatch(sortByAmount());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);