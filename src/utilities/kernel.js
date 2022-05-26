import {
  GRAVITATIONAL_ACCELERATION,
  KERNEL_TERMINAL_VELOCITY,
} from '../constants/physics';
import { KERNEL_FOUNTAIN_INTERVAL } from '../constants/animation';
import { getRandomInteger } from './random';
import kernel from '../images/kernel-with-border.svg';

const DEFAULT_KERNEL_HEIGHT = 27;

function step(element, intervalId) {
  if (!element) {
    return;
  }

  // Retrieve element velocity
  const xVelocity = parseInt(element.getAttribute('data-x-velocity'));
  const yVelocity = parseInt(element.getAttribute('data-y-velocity'));

  // Update position
  const velocityMultiplier = element.offsetHeight / DEFAULT_KERNEL_HEIGHT;
  const left = parseInt(element.style.left) + xVelocity * velocityMultiplier;
  const top = parseInt(element.style.top) + yVelocity * velocityMultiplier;
  element.style.left = `${left}px`;
  element.style.top = `${top}px`;

  // Update data-y-velocity based on acceleration
  if (yVelocity < KERNEL_TERMINAL_VELOCITY) {
    element.setAttribute(
      'data-y-velocity',
      yVelocity + GRAVITATIONAL_ACCELERATION,
    );
  }

  // Remove element if off-screen
  if (
    top >
    Math.max(document.documentElement.clientHeight, document.body.clientHeight)
  ) {
    clearInterval(intervalId);
    if (!element || !element.parentNode) {
      return;
    }
    element.parentNode.removeChild(element);
  }
}

/**
 * Initialize the animation for a popcorn kernel element.
 *
 * @param {string} id The unique identifier and id attribute value for the
 *   popcorn kernel element.
 */
export function animateKernel(id) {
  const element = document.querySelector(`#${id}`);
  if (!element) {
    return;
  }

  // Update starting position based on scroll position
  element.style.top = `${parseInt(element.style.top) - window.scrollY}px`;
  element.style.left = `${parseInt(element.style.left) - window.scrollX}px`;

  // Show the element
  element.style.display = 'block';

  // Invoke parabolic motion
  const intervalId = setInterval(() => {
    step(element, intervalId);
  }, KERNEL_FOUNTAIN_INTERVAL);
}

/**
 * Initialize and return a reference to a randomized popcorn kernel element.
 *
 * @param {Document} documentElement
 * @param {string} id
 * @param {number} left
 * @param {number} top
 * @param {boolean} isRotatingClockwise
 */
export function getKernelElement(
  documentElement,
  id,
  left,
  top,
  isRotatingClockwise,
) {
  const kernelElement = documentElement.createElement('img');

  kernelElement.alt = 'Popcorn kernel';
  kernelElement.className = isRotatingClockwise
    ? 'popcorn-kernel'
    : 'popcorn-kernel popcorn-kernel--reverse';
  kernelElement.id = id;
  kernelElement.src = kernel;
  kernelElement.style = `display:'none';left:${left}px;top:${top}px;`;
  kernelElement.setAttribute('aria-hidden', 'true');
  kernelElement.setAttribute('data-x-velocity', getRandomInteger(-15, 15));
  kernelElement.setAttribute('data-y-velocity', getRandomInteger(-20, -10));

  return kernelElement;
}
