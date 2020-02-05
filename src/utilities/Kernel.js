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
  const xVelocity = parseInt(element.getAttribute('x-velocity'), 10);
  const yVelocity = parseInt(element.getAttribute('y-velocity'), 10);

  // Update position
  const velocityMultiplier = element.offsetHeight / DEFAULT_KERNEL_HEIGHT;
  const left =
    parseInt(element.style.left, 10) + xVelocity * velocityMultiplier;
  const top = parseInt(element.style.top, 10) + yVelocity * velocityMultiplier;
  element.style.left = `${left}px`;
  element.style.top = `${top}px`;

  // Update y-velocity based on acceleration
  if (yVelocity < KERNEL_TERMINAL_VELOCITY) {
    element.setAttribute('y-velocity', yVelocity + GRAVITATIONAL_ACCELERATION);
  }

  // Remove element if off-screen
  if (top > document.documentElement.clientHeight) {
    clearInterval(intervalId);
    if (!element || !element.parentNode) {
      return;
    }
    element.parentNode.removeChild(element);
  }
}

export function animateKernel(id) {
  const element = document.querySelector(`#${id}`);
  if (!element) {
    return;
  }

  element.style.display = 'block';

  const intervalId = setInterval(() => {
    step(element, intervalId);
  }, KERNEL_FOUNTAIN_INTERVAL);
}
