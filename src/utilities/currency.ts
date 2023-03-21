/**
 * @example
 * displayCurrency(5.5); // '$5.50'
 */
export function displayCurrency(value: number) {
  return value.toLocaleString('en-US', {
    currency: 'USD',
    style: 'currency',
  });
}
