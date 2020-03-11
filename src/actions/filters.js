export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

export const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
});

export const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
});

export const setCurrencyEuro = () => ({
  type: 'SET_CURRENCY_EURO'
});

export const setCurrencySek = () => ({
  type: 'SET_CURRENCY_SEK'
});

export const setCurrencyDollar = () => ({
  type: 'SET_CURRENCY_DOLLAR'
});

export const setCurrencyRates = currencyData => ({
  type: 'SET_CURRENCY_RATES',
  currencyData
});

export const fetchCurrencyRates = () => {
  return async dispatch => {
    try {
      const response = await fetch('https://api.exchangeratesapi.io/latest');
      const currencyData = await response.json();
      dispatch(setCurrencyRates(currencyData.rates));
    } catch (error) {
      console.log('failed to fetch', error);
    }
  };
};
