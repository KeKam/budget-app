import React from 'react';
import { connect } from 'react-redux';

const ExpenseListFilters = ({ filters }) => {
  return (
    <div>
      <input type='text' value={filters.text} />
    </div>
  );
};

const mapStateToProps = ({ filters }) => {
  return {
    filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);