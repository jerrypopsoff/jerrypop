import { describe, it, expect, beforeEach, vi } from 'vitest';
import { isDarkMode } from './dark-mode';

describe('utilities/dark-mode', () => {
  beforeEach(() => {
    vi.unstubAllGlobals();
  });

  describe('isDarkMode', () => {
    it('should return true when system is in dark mode', () => {
      const matchMediaMock = vi.fn(() => ({
        matches: true,
      }));
      vi.stubGlobal('matchMedia', matchMediaMock);

      const result = isDarkMode();

      expect(matchMediaMock).toHaveBeenCalledExactlyOnceWith(
        '(prefers-color-scheme: dark)',
      );
      expect(result).toBe(true);
    });

    it('should return false when system is in light mode', () => {
      const matchMediaMock = vi.fn(() => ({
        matches: false,
      }));
      vi.stubGlobal('matchMedia', matchMediaMock);

      const result = isDarkMode();

      expect(matchMediaMock).toHaveBeenCalledExactlyOnceWith(
        '(prefers-color-scheme: dark)',
      );
      expect(result).toBe(false);
    });
  });
});
