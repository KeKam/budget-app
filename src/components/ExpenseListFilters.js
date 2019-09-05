import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import styled from 'styled-components';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { ContentContainer } from './Header';

const ListFilters = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
  
  @media (min-width: 45rem) {
    flex-direction: row;
    margin-bottom: 3.2rem;
  }
`;

const Filter = styled.div`
  margin-bottom: 1.2rem;
  
  @media (min-width: 45rem) {
    margin: 0 1.2rem 0 0
  }
`;

export const TextInput = styled.input`
  border: 1px solid #cacccd;
  height: 50px;
  font-size: 1.8rem;
  font-weight: 300;
  padding: 1.2rem;
`;

const Select = styled(TextInput.withComponent('select'))`
  padding: 0 1.2rem;
`;

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
    <ContentContainer>
      <ListFilters>
        <Filter>
          <TextInput type='text' placeholder='Search expenses' value={filters.text} onChange={onInputChange} />
        </Filter>
        <Filter>
          <Select
          value={filters.sortBy}
          onChange={onSortChange}
          >
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
          </Select>
        </Filter>
        <Filter>
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
        </Filter>
      </ListFilters>
    </ContentContainer>
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