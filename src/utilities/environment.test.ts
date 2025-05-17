import { describe, it, expect, beforeEach, vi } from 'vitest';
import { isProduction } from './environment';

const NON_PRODUCTION_DEPLOY_CONTEXTS = [
  'deploy-preview',
  'branch-deploy',
  'preview-server',
  'dev',
];

describe('utilties/environment', () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
  });

  describe('isProduction', () => {
    it('returns true when deploy context is production', () => {
      vi.stubEnv('NEXT_PUBLIC_DEPLOY_CONTEXT', 'production');
      expect(isProduction()).toBe(true);
    });

    NON_PRODUCTION_DEPLOY_CONTEXTS.forEach((context) => {
      it(`returns false when deploy context is ${context}`, () => {
        vi.stubEnv('NEXT_PUBLIC_DEPLOY_CONTEXT', context);
        expect(isProduction()).toBe(false);
      });
    });

    it('throws an error for invalid deploy context', () => {
      vi.stubEnv('NEXT_PUBLIC_DEPLOY_CONTEXT', 'invalid-context');
      expect(() => isProduction()).toThrow(
        'Invalid deploy context "invalid-context"',
      );
    });

    it('throws an error for undefined deploy context', () => {
      vi.stubEnv('NEXT_PUBLIC_DEPLOY_CONTEXT', undefined);
      expect(() => isProduction()).toThrow(
        'Invalid deploy context "undefined"',
      );
    });
  });
});
