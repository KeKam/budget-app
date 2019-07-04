import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = ({ filters, dispatch }) => {
  return (
    <div>
      <input type='text' value={filters.text} onChange={(e) => {
        dispatch(setTextFilter(e.target.value));
      }} />
    </div>
  );
};

const mapStateToProps = ({ filters }) => {
  return {
    filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);