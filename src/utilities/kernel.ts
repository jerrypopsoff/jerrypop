import ColonelHead from '../images/colonel-head.svg';
import { getRandomInteger } from './random';

const FRAME_RATE = 60;
const KERNEL_STEP_ANIMATION_INTERVAL = Math.floor(1000 / FRAME_RATE);

const GRAVITATIONAL_ACCELERATION = 1;
const KERNEL_TERMINAL_VELOCITY = 40;

const DEFAULT_KERNEL_HEIGHT = 36; // Now an arbitrary const idk

function step(
  element?: HTMLElement | null,
  intervalId?: string | number | NodeJS.Timeout,
) {
  if (!element) {
    return;
  }

  /**
   * Retrieve element velocity, casting `as string` to avoid run-time
   * performance degradation of additional value checks.
   */
  const xVelocity = parseInt(element.getAttribute('data-x-velocity') as string);
  const yVelocity = parseInt(element.getAttribute('data-y-velocity') as string);

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
      `${yVelocity + GRAVITATIONAL_ACCELERATION}`,
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
    element.remove();
  }
}

/**
 * Initialize the animation for a popcorn kernel element.
 *
 * @param {string} id The unique identifier and id attribute value for the
 *   popcorn kernel element.
 */
export function animateKernel(id: string) {
  const element = document.querySelector(`#${id}`) as HTMLElement | null;
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
  }, KERNEL_STEP_ANIMATION_INTERVAL);
}

/**
 * Initialize and return a reference to a randomized popcorn kernel element.
 */
export function getKernelElement(
  documentElement: Document,
  {
    id,
    left,
    top,
    isRotatingClockwise,
  }: {
    id: string;
    isRotatingClockwise: boolean;
    left: number;
    top: number;
  },
) {
  const kernelElement = documentElement.createElement('img');

  kernelElement.alt = 'Popcorn kernel';
  kernelElement.className = isRotatingClockwise
    ? 'popcorn-kernel'
    : 'popcorn-kernel popcorn-kernel--reverse';
  kernelElement.id = id;
  kernelElement.src = ColonelHead.src;
  kernelElement.setAttribute(
    'style',
    `display:'none';left:${left}px;top:${top}px;`,
  );
  kernelElement.setAttribute('aria-hidden', 'true');
  kernelElement.setAttribute('data-x-velocity', `${getRandomInteger(-7, 7)}`);
  kernelElement.setAttribute(
    'data-y-velocity',
    `${getRandomInteger(-25, -10)}`,
  );

  return kernelElement;
}
