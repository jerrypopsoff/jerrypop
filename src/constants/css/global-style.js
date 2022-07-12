import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --main-theme-light: #fff;

  --default-text-dark: #222;
  --default-text-medium: #444;

  --text-highlight-background: var(--main-theme-medium);

  --link-text-hover: #eee;
  --link-text-light: var(--main-theme-light);

  --divider-light: #ddd;

  --modal-backdrop: #000;
  --modal-backdrop-opacity: 0.4;

  --close-icon-hover-background: rgba(0, 0, 0, 0.1);
}

::selection {
  background-color: var(--text-highlight-background);
  color: var(--text-highlight);
}

body {
  background-color: var(--main-theme-dark);
  color: var(--main-theme-light);
  font-family: 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 0;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: var(--link-text-light);
  cursor: pointer;
  text-decoration: underline;
}

a:focus,
a:hover {
  color: var(--link-text-hover);
}

:focus {
  outline-color: var(--main-theme-medium);
}

@keyframes kernel {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes reverse-kernel {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

.popcorn-kernel {
  animation: kernel 0.5s infinite linear;
  -webkit-animation: kernel 0.5s infinite linear;
  height: 36px;
  position: fixed;
  z-index: 2001;
}

.popcorn-kernel--reverse {
  animation: reverse-kernel 0.5s infinite linear;
  -webkit-animation: reverse-kernel 0.5s infinite linear;
}

@media (max-width: 860px) {
  .popcorn-kernel {
    height: 22px;
  }
}
`;
