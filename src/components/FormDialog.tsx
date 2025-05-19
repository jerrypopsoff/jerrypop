import { DIALOG_BACKDROP_Z_INDEX, DIALOG_Z_INDEX } from '../constants/z-index';
import styled from 'styled-components';
import { useWindowSize } from '../hooks/use-window-size';
import { WITH_BOX_SHADOW_STYLE } from '../constants/css/shadow';

const DIALOG_HEADER_HEIGHT_PX = 52; // Height of header with close button
const FORM_TOP_MARGIN_PX = 12; // Space between header and form
const VERTICAL_MARGIN_PX = 24; // Vertial margin of entire dialog
const HORIZONTAL_MARGIN_PX = 12; // Horizontal margin of entire dialog
const MINIMUM_DIALOG_HEIGHT = 150;

interface StyledDialogProps {
  $dialogHeight: number;
  $dialogWidth: number;
}

const StyledDialog = styled.dialog<StyledDialogProps>`
  ${WITH_BOX_SHADOW_STYLE}
  background-color: var(--color-background);
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: ${({ $dialogHeight }) => $dialogHeight}px;
  padding: 0;
  position: fixed;
  top: ${VERTICAL_MARGIN_PX}px;
  width: ${({ $dialogWidth }) => $dialogWidth}px;
  z-index: ${DIALOG_Z_INDEX};
`;

const StyledDialogHeader = styled.header`
  align-items: flex-end;
  border-radius: 5px 5px 0 0;
  display: flex;
  flex-direction: column;
  margin-bottom: ${FORM_TOP_MARGIN_PX}px;
`;

const StyledCloseButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  color: var(--color-foreground);
  cursor: pointer;
  display: flex;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: bold;
  height: 36px;
  justify-content: center;
  margin: 8px;
  padding: 0;
  width: 36px;

  &:hover,
  &:focus {
    background-color: var(--icon-hover-background);
  }
`;

const StyledIframe = styled.iframe`
  border: none;
`;

const StyledDialogBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${DIALOG_BACKDROP_Z_INDEX};
`;

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
  const verticalBufferPx = DIALOG_HEADER_HEIGHT_PX + FORM_TOP_MARGIN_PX;
  const formHeight = dialogHeight - verticalBufferPx;

  return (
    <>
      <StyledDialog
        $dialogHeight={dialogHeight}
        $dialogWidth={dialogWidth}
        open={true}
      >
        <StyledDialogHeader>
          <StyledCloseButton
            aria-label="Close dialog"
            onClick={onCloseFormDialog}
          >
            ✕
          </StyledCloseButton>
        </StyledDialogHeader>
        <StyledIframe
          height={formHeight}
          src={src}
          title={title}
          width={dialogWidth}
        >
          Loading…
        </StyledIframe>
      </StyledDialog>
      <StyledDialogBackdrop onClick={onCloseFormDialog} />
    </>
  );
};

export default FormDialog;
