import {
  GRAVITATIONAL_ACCELERATION,
  KERNEL_TERMINAL_VELOCITY,
} from '../constants/Physics';
import { KERNEL_FOUNTAIN_INTERVAL } from '../constants/Animation';

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
