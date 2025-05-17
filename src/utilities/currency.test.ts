import { describe, expect, test } from 'vitest';
import { displayCurrency } from './currency';

describe('utilities/currency', () => {
  describe('displayCurrency', () => {
    test('it displays user-friendly currency values', () => {
      expect(displayCurrency(0)).toEqual('$0.00');
      expect(displayCurrency(50)).toEqual('$50.00');
      expect(displayCurrency(-50)).toEqual('-$50.00');
      expect(displayCurrency(5.5)).toEqual('$5.50');
      expect(displayCurrency(8)).toEqual('$8.00');
    });
  });
});
