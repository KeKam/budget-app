import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import '../../locales/locales';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
  setCurrencyEuro,
  setCurrencySek,
  setCurrencyDollar
} from '../../actions/filters';
import { SharedStyles as SS } from '../SharedStyles/SharedStyles';
import { ExpenseListFilters as S } from './ExpenseListFilters.styled';

const ExpenseListFilters = ({
  filters,
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount,
  setCurrencyEuro,
  setCurrencySek,
  setCurrencyDollar
}) => {
  const [focused, setFocused] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const onFocusChange = focused => {
    setFocused(focused);
  };

  const onInputChange = e => {
    setTextFilter(e.target.value);
  };

  const onSortChange = e => {
    if (e.target.value === 'date') {
      sortByDate();
    } else if (e.target.value === 'amount') {
      sortByAmount();
    }
  };

  const onCurrencyChange = e => {
    if (e.target.value === 'euro') {
      setCurrencyEuro();
    } else if (e.target.value === 'sek') {
      setCurrencySek();
    } else if (e.target.value === 'dollar') {
      setCurrencyDollar();
    }
  };

  return (
    <SS.ContentContainer>
      <S.Filters>
        <S.Filter>
          <S.Input
            type='text'
            placeholder='Search expenses'
            value={filters.text}
            onChange={onInputChange}
          />
        </S.Filter>
        <S.Filter>
          <S.Select value={filters.sortBy} onChange={onSortChange}>
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
          </S.Select>
        </S.Filter>
        <S.Filter>
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
        </S.Filter>
        <S.Filter>
          <S.Select value={filters.currencyType} onChange={onCurrencyChange}>
            <option value='euro'>Euro (€)</option>
            <option value='sek'>Sek (kr)</option>
            <option value='dollar'>Dollar ($)</option>
          </S.Select>
        </S.Filter>
      </S.Filters>
    </SS.ContentContainer>
  );
};

export default connect(
  state => {
    return {
      filters: state.filters
    };
  },
  {
    setStartDate,
    setEndDate,
    setTextFilter,
    sortByDate,
    sortByAmount,
    setCurrencyEuro,
    setCurrencySek,
    setCurrencyDollar
  }
)(ExpenseListFilters);
