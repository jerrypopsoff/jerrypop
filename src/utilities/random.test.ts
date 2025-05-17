import { describe, it, expect, vi } from 'vitest';
import { getRandomInteger, getRandomBoolean } from './random';

describe('utilities/random', () => {
  describe('getRandomInteger', () => {
    it('returns a number within the specified range', () => {
      const min = 1;
      const max = 10;
      const result = getRandomInteger(min, max);

      expect(Number.isInteger(result)).toBe(true);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });

    it('uses default values when no arguments provided', () => {
      const result = getRandomInteger();

      expect(Number.isInteger(result)).toBe(true);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(1);
    });

    it('handles equivalent min and max values', () => {
      const value = 5;
      const result = getRandomInteger(value, value);
      expect(result).toBe(value);
    });
  });

  describe('getRandomBoolean', () => {
    it('returns a boolean value', () => {
      const result = getRandomBoolean();
      expect(typeof result).toBe('boolean');
    });

    it('should be able to return both true and false', () => {
      vi.spyOn(Math, 'random')
        .mockReturnValueOnce(0.499)
        .mockReturnValueOnce(0.501);

      const result1 = getRandomBoolean();
      const result2 = getRandomBoolean();

      expect(result1).toBe(false);
      expect(result2).toBe(true);

      vi.restoreAllMocks();
    });
  });
});
