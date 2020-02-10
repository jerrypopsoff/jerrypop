import { useEffect, useRef, useState } from 'react';

// Todo: Fix case where hover && focus, un-hover
export default function UseInteraction() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleInteractionStart = () => setValue(true);
  const handleInteractionEnd = () => setValue(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleInteractionStart);
      node.addEventListener('focusin', handleInteractionStart);
      node.addEventListener('mouseout', handleInteractionEnd);
      node.addEventListener('focusout', handleInteractionEnd);

      return () => {
        node.removeEventListener('mouseover', handleInteractionStart);
        node.removeEventListener('focusin', handleInteractionStart);
        node.removeEventListener('mouseout', handleInteractionEnd);
        node.removeEventListener('focusout', handleInteractionEnd);
      };
    }
  });

  return [ref, value];
}
