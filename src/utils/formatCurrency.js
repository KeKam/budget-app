import numeral from 'numeral';
import '../locales/locales';

export const formatCurrencyType = (filters) => {
    let formatString;

    if (filters.currencyType === 'euro') {
      formatString = '$ 0,0.00';
      numeral.locale('fi');
    } else if (filters.currencyType === 'sek') {
      formatString = '0,0.00 $';
      numeral.locale('sv-se');
    } else if (filters.currencyType === 'dollar') {
      formatString = '$ 0,0.00';
      numeral.locale('en-au');
    };
    return formatString;
};

export const formatCurrencyValue = (filters) => {
  let formatNumber;
  
  if (filters.currencyType === 'euro') {
    formatNumber = 1;
  } else if (filters.currencyType === 'sek') {
    formatNumber = filters.currencyRates.SEK;
  } else if (filters.currencyType === 'dollar') {
    formatNumber = filters.currencyRates.USD;
  };
  return formatNumber;
};