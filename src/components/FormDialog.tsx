import { useWindowSize } from '../hooks/use-window-size';
import CloseIcon from './icons/CloseIcon';

const DIALOG_HEADER_HEIGHT_PX = 52; // Height of header with close button
const VERTICAL_MARGIN_PX = 8; // Vertial margin of entire dialog
const HORIZONTAL_MARGIN_PX = 8; // Horizontal margin of entire dialog
const MINIMUM_DIALOG_HEIGHT = 150;

interface Props {
  onCloseFormDialog: () => void;
  src: string;
  title: string;
}

const FormDialog = ({ onCloseFormDialog, src, title }: Props) => {
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
        className="z-dialog bg-background fixed top-0 mx-auto rounded-sm"
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
            className="
              hover:bg-highlight focus:bg-highlight text-foreground m-2
              cursor-pointer rounded-full p-3
            "
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
        className="
          z-dialog-backdrop bg-backdrop fixed bottom-0 left-0 right-0 top-0
        "
        onClick={onCloseFormDialog}
      />
    </>
  );
};

export default FormDialog;
