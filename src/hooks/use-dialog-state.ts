import { useEffect, useState } from 'react';

export function useDialogState(initialState: boolean = false) {
  const [isFormVisible, setIsFormVisible] = useState(initialState);

  useEffect(() => {
    if (!isFormVisible) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') {
        setIsFormVisible(false);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isFormVisible]);

  const closeDialog = () => setIsFormVisible(false);
  const openDialog = () => setIsFormVisible(true);

  return { closeDialog, isFormVisible, openDialog };
}
