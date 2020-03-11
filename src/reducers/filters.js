import moment from 'moment';

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
  currencyType: 'euro'
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    case 'SET_CURRENCY_EURO':
      return {
        ...state,
        currencyType: 'euro'
      };
    case 'SET_CURRENCY_SEK':
      return {
        ...state,
        currencyType: 'sek'
      };
    case 'SET_CURRENCY_DOLLAR':
      return {
        ...state,
        currencyType: 'dollar'
      };
    case 'SET_CURRENCY_RATES':
      return {
        ...state,
        currencyRates: action.currencyData
      };
    default:
      return state;
  }
};

export default filtersReducer;
