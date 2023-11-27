import { NumberRange } from '../types/number';

const LOCALE = 'en-US';
const LOCALE_STRING_CURRENCY = 'USD';
const LOCALE_STRING_STYLE = 'currency';

/**
 * @example
 * displayCurrency(5.5); // '$5.50'
 *
 * @example
 * displayCurrency({ max: 12, min: 7 }); // $7.00 - $12.00
 */
export function displayCurrency(value: number | NumberRange) {
  if (typeof value === 'number') {
    return value.toLocaleString(LOCALE, {
      currency: LOCALE_STRING_CURRENCY,
      style: LOCALE_STRING_STYLE,
    });
  }

  return `${value.min.toLocaleString(LOCALE, {
    currency: LOCALE_STRING_CURRENCY,
    style: LOCALE_STRING_STYLE,
  })} - ${value.max.toLocaleString(LOCALE, {
    currency: LOCALE_STRING_CURRENCY,
    style: LOCALE_STRING_STYLE,
  })}`;
}
