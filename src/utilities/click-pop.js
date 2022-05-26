import { animateKernel, getKernelElement } from './kernel';
import { getRandomBoolean } from './random';

let CLICK_POP_INDEX = 0;

/**
 * Initialize popcorn kernels popping off for each user click/tap.
 *
 * @param {Document} documentElement
 */
export function initializeClickPop(documentElement) {
  const arbitraryArtOffsetPx = 11;

  documentElement.addEventListener('click', e => {
    const isRotatingClockwise = getRandomBoolean();
    const id = `click-pop-${CLICK_POP_INDEX++}`;
    const kernelElement = getKernelElement(
      documentElement,
      id,
      e.pageX - arbitraryArtOffsetPx,
      e.pageY - arbitraryArtOffsetPx,
      isRotatingClockwise,
    );

    documentElement.body.appendChild(kernelElement);

    setTimeout(() => animateKernel(id), 0);
  });
}
