import { useEffect } from 'react';

export function useConsoleAsciiArt() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      // Avoid polluting developer console for development environments.
      return;
    }

    console.log(`
                  ██████████
                ██          ██
              ██              ██
          ██████                ██
        ██    ██            ░░░░██
        ██    ██          ░░░░░░██
        ██              ░░░░░░░░██
          ██░░  ██      ░░░░░░██
            ██░░  ████░░░░████
              ██░░    ░░░░░░░░██
                ██░░░░░░██░░░░██
                  ██████░░░░██
                        ████
     _
  _ | |___ _ _ _ _ _  _ _ __  ___ _ __
 | || / -_) '_| '_| || | '_ \\/ _ \\ '_ \\
  \\__/\\___|_| |_|  \\_, | .__/\\___/ .__/
                   |__/|_|       |_|
    `);
  }, []);
}
