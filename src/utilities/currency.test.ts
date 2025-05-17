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

    test('it displays user-friendly currency ranges', () => {
      expect(displayCurrency({ min: 0, max: 1 })).toEqual('$0.00 - $1.00');
      expect(displayCurrency({ min: 5, max: 10 })).toEqual('$5.00 - $10.00');
      expect(displayCurrency({ min: -5, max: 5 })).toEqual('-$5.00 - $5.00');
      expect(displayCurrency({ min: -5, max: -1 })).toEqual('-$5.00 - -$1.00');
      expect(displayCurrency({ min: 0, max: 0 })).toEqual('$0.00 - $0.00');
    });
  });
});
