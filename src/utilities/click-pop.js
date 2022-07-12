import { animateKernel, getKernelElement } from './kernel';
import { getRandomBoolean } from './random';

const ARBITRARY_ART_OFFSET_PX = 11;

let clickPopIndex = 0;

function popNewKernel({ documentElement, pageX, pageY }) {
  const isRotatingClockwise = getRandomBoolean();
  const id = `click-pop-${clickPopIndex++}`;
  const kernelElement = getKernelElement(
    documentElement,
    id,
    pageX - ARBITRARY_ART_OFFSET_PX,
    pageY - ARBITRARY_ART_OFFSET_PX,
    isRotatingClockwise,
  );

  documentElement.body.appendChild(kernelElement);

  setTimeout(() => animateKernel(id), 0);
}

/**
 * Initialize popcorn kernels popping off for each user click/tap.
 *
 * @param {Document} documentElement
 */
export function initializeClickPop(documentElement) {
  documentElement.addEventListener('click', ({ pageX, pageY }) => {
    popNewKernel({ documentElement, pageX, pageY });
    popNewKernel({ documentElement, pageX, pageY });
    popNewKernel({ documentElement, pageX, pageY });
  });
}
