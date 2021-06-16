import { animateKernel, getKernelElement } from './Kernel';
import { getRandomBoolean } from './Random';

let CLICK_POP_INDEX = 0;

/**
 * Initialize popcorn kernels popping off for each user click/tap.
 *
 * @param {Document} documentElement
 */
export function initializeClickPop(documentElement) {
  documentElement.addEventListener('click', e => {
    const isRotatingClockwise = getRandomBoolean();
    const id = `click-pop-${CLICK_POP_INDEX++}`;
    const kernelElement = getKernelElement(
      documentElement,
      id,
      /**
       * Arbitrary offset values for aesthetic with cursor position; should
       * scale these based on kernel/screen size.
       */
      e.pageX - 10,
      e.pageY - 15,
      isRotatingClockwise,
    );

    documentElement.body.appendChild(kernelElement);

    setTimeout(() => animateKernel(id), 0);
  });
}
