import {
  KERNEL_NARROW_SIZE_PX,
  KERNEL_WIDE_SIZE_PX,
} from '../constants/breakpoint';
import { animateKernel, getKernelElement } from './kernel';
import { getRandomBoolean, getRandomInteger } from './random';

/**
 * Needs to stay in sync with the media query in global.css.
 */
const KERNEL_SIZE_BREAKPOINT_PX = 640;

let maxKernelsPerClick = 3;
let minKernelsPerClick = 1;

let clickPopIndex = 0;

export function increaseKernelCount() {
  maxKernelsPerClick++;
  minKernelsPerClick++;
}

function popNewKernel({
  documentElement,
  xPosition,
  yPosition,
}: {
  documentElement: Document;
  xPosition: number;
  yPosition: number;
}) {
  const id = `click-pop-${clickPopIndex++}`;
  const kernelElement = getKernelElement(documentElement, {
    id,
    isRotatingClockwise: getRandomBoolean(),
    left: xPosition,
    top: yPosition,
  });

  documentElement.body.appendChild(kernelElement);

  setTimeout(() => animateKernel(id), 0);
}

/**
 * Initialize popcorn kernels popping off for each user click/tap.
 */
export function initializeClickPop(documentElement: Document) {
  documentElement.addEventListener('click', ({ pageX, pageY }) => {
    const windowInnerWidth = window.innerWidth ?? 0;
    const isWideScreen = windowInnerWidth >= KERNEL_SIZE_BREAKPOINT_PX;
    const xPosition = isWideScreen
      ? pageX - KERNEL_WIDE_SIZE_PX / 2
      : pageX - KERNEL_NARROW_SIZE_PX / 2;
    const yPosition = isWideScreen
      ? pageY - KERNEL_WIDE_SIZE_PX / 2
      : pageY - KERNEL_NARROW_SIZE_PX / 2;
    const numKernels = getRandomInteger(minKernelsPerClick, maxKernelsPerClick);
    for (let i = 0; i < numKernels; ++i) {
      popNewKernel({ documentElement, xPosition, yPosition });
    }
  });
}
