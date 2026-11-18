import { useWindowSize } from '../hooks/use-window-size';
import { CloseIcon } from './icons/CloseIcon';

const DIALOG_HEADER_HEIGHT_PX = 52; // Height of header with close button
const VERTICAL_MARGIN_PX = 8; // Vertial margin of entire dialog
const HORIZONTAL_MARGIN_PX = 8; // Horizontal margin of entire dialog
const MINIMUM_DIALOG_HEIGHT = 150;

export function FormDialog({
  onCloseFormDialog,
  src,
  title,
}: {
  onCloseFormDialog: () => void;
  src: string;
  title: string;
}) {
  const { innerHeight, innerWidth } = useWindowSize();
  const dialogHeight = Math.max(
    innerHeight - 2 * VERTICAL_MARGIN_PX,
    MINIMUM_DIALOG_HEIGHT,
  );
  const defaultWidth = 600;
  const dialogWidth = Math.min(
    innerWidth - 2 * HORIZONTAL_MARGIN_PX,
    defaultWidth,
  );
  const formHeight = dialogHeight - DIALOG_HEADER_HEIGHT_PX;

  return (
    <>
      <dialog
        className="fixed top-0 z-dialog mx-auto rounded-sm bg-background"
        open
        style={{
          height: dialogHeight,
          marginTop: VERTICAL_MARGIN_PX,
          width: dialogWidth,
        }}
      >
        <header className="flex justify-end">
          <button
            aria-label="Close dialog"
            className="m-2 cursor-pointer rounded-full p-3 text-foreground hover:bg-highlight focus:bg-highlight"
            onClick={onCloseFormDialog}
          >
            <CloseIcon className="h-3 w-3" />
          </button>
        </header>
        <iframe height={formHeight} src={src} title={title} width={dialogWidth}>
          Loading…
        </iframe>
      </dialog>
      {/*
        eslint-disable-next-line
        jsx-a11y/click-events-have-key-events,
        jsx-a11y/no-static-element-interactions
      */}
      <div
        className="fixed top-0 right-0 bottom-0 left-0 z-dialog-backdrop bg-backdrop"
        onClick={onCloseFormDialog}
      />
    </>
  );
}
