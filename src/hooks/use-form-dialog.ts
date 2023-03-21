import { useState } from 'react';

export function useDialogState(initialState: boolean = false) {
  const [isFormVisible, setIsFormVisible] = useState(initialState);

  const onKeyDown = ({ key }: KeyboardEvent) => {
    if (key === 'Escape') {
      closeDialog();
    }
  };

  const closeDialog = () => {
    setIsFormVisible(false);
    document.body.style.overflow = 'unset';
    window.removeEventListener('keydown', onKeyDown);
  };

  const openDialog = () => {
    setIsFormVisible(true);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
  };

  return { closeDialog, isFormVisible, openDialog };
}
