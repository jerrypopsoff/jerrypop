export function isDarkMode(): boolean {
  return Boolean(
    typeof window?.matchMedia === 'function' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches,
  );
}
