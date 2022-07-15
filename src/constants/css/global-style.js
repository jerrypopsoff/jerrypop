import { GRAYSCALE_ULTRALIGHT, WHITE } from '../color';
import {
  KERNEL_NARROW_HEIGHT_PX,
  KERNEL_WIDE_HEIGHT_PX,
} from '../kernel-fountain';
import { POPCORN_KERNEL_Z_INDEX } from '../z-index';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
::selection {
  background-color: var(--main-theme-medium);
  color: var(--theme-text-on-medium);
  text-shadow: none;
}

body {
  background-color: var(--main-theme-dark);
  color: ${WHITE};
  font-family: 'Shrikhand', 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 0;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:focus {
  outline-color: var(--main-theme-medium);
}

a {
  color: ${WHITE};
  cursor: pointer;
  text-decoration: underline;
}

a:focus,
a:hover {
  color: ${GRAYSCALE_ULTRALIGHT};
}

button {
  font-family: inherit;
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
  height: ${KERNEL_WIDE_HEIGHT_PX}px;
  position: fixed;
  z-index: ${POPCORN_KERNEL_Z_INDEX};
}

.popcorn-kernel--reverse {
  animation: reverse-kernel 0.5s infinite linear;
  -webkit-animation: reverse-kernel 0.5s infinite linear;
}

@media (max-width: 860px) {
  .popcorn-kernel {
    height: ${KERNEL_NARROW_HEIGHT_PX}px;
  }
}
`;
