import {
  KERNEL_NARROW_SIZE_PX,
  KERNEL_WIDE_SIZE_PX,
  WINDOW_BREAKPOINT_WIDTH_PX,
} from '../constants/breakpoint';
import { animateKernel, getKernelElement } from './kernel';
import { getRandomBoolean, getRandomInteger } from './random';

let MAX_KERNELS_PER_CLICK = 3;
let MIN_KERNELS_PER_CLICK = 1;

export function increaseKernelCount() {
  MAX_KERNELS_PER_CLICK++;
  MIN_KERNELS_PER_CLICK++;
}

let clickPopIndex = 0;

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
    const isWideScreen = windowInnerWidth > WINDOW_BREAKPOINT_WIDTH_PX;
    const xPosition = isWideScreen
      ? pageX - KERNEL_WIDE_SIZE_PX / 2
      : pageX - KERNEL_NARROW_SIZE_PX / 2;
    const yPosition = isWideScreen
      ? pageY - KERNEL_WIDE_SIZE_PX / 2
      : pageY - KERNEL_NARROW_SIZE_PX / 2;
    const numKernels = getRandomInteger(
      MIN_KERNELS_PER_CLICK,
      MAX_KERNELS_PER_CLICK,
    );
    for (let i = 0; i < numKernels; ++i) {
      popNewKernel({ documentElement, xPosition, yPosition });
    }
  });
}
