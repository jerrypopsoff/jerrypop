import { beforeAll, vi } from 'vitest';

beforeAll(() => {
  window.scrollTo = vi.fn();
});
