import numeral from 'numeral';
import 'numeral/locales/fi';
import 'numeral/locales/en-au';

numeral.register('locale', 'sv-se', {
  delimiters: {
    thousands: ' ',
    decimal: ','
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'md',
    trillion: 'bn'
  },
  ordinal: function(number) {
    var b = number % 10;
    return ~~((number % 100) / 10) === 1
      ? ':a'
      : b === 1
      ? ':a'
      : b === 2
      ? ':a'
      : b === 3
      ? ':e'
      : ':e';
  },
  currency: {
    symbol: 'kr'
  }
});
