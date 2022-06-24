import React from 'react';
import styled from 'styled-components';
import useWindowSize from '@rehooks/window-size';

const VERTICAL_MARGIN_PX = 48;
const HORIZONTAL_MARGIN_PX = 12;

const StyledDialog = styled.dialog`
  background-color: #edeeff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: ${({ dialogHeight }) => dialogHeight}px;
  left: 50vw;
  margin-left: ${({ dialogWidth }) => (-1 * dialogWidth) / 2}px;
  padding: 0;
  position: fixed;
  top: ${VERTICAL_MARGIN_PX}px;
  width: ${({ dialogWidth }) => dialogWidth}px;
  z-index: 2000;
`;

const StyledCloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  color: #222;
  cursor: pointer;
  margin: 8px;
  padding: 8px 10px;

  &:hover,
  &:focus {
    background-color: #ddd;
  }
`;

const StyledDialogBackdrop = styled.div`
  background-color: #000;
  bottom: 0;
  left: 0;
  opacity: 0.4;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
`;

export default function OrderFormDialog({ onCloseOrderOnlineDialog }) {
  const { innerHeight, innerWidth } = useWindowSize();
  const verticalMargin = VERTICAL_MARGIN_PX;
  const dialogHeight = innerHeight - 2 * verticalMargin;
  const defaultWidth = 600;
  const dialogWidth = Math.min(
    innerWidth - 2 * HORIZONTAL_MARGIN_PX,
    defaultWidth,
  );
  // Buffer accounts for close button height + margin, bottom dialog margin.
  const verticalBufferPx = 64;
  const formHeight = dialogHeight - verticalBufferPx;

  return (
    <>
      <StyledDialog
        dialogHeight={dialogHeight}
        dialogWidth={dialogWidth}
        open={true}
      >
        <StyledCloseButton
          aria-label="Close"
          onClick={onCloseOrderOnlineDialog}
        >
          ✕
        </StyledCloseButton>
        <iframe
          frameBorder="0"
          height={formHeight}
          marginHeight="0"
          marginWidth="0"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdXm4aTzZVHn5RIYhC1xLy-MNtyRxohuU2tZCH-TPnU8GqGHw/viewform?embedded=true"
          title="Jerrypop Order Form"
          width={dialogWidth}
        >
          Loading…
        </iframe>
      </StyledDialog>
      <StyledDialogBackdrop onClick={onCloseOrderOnlineDialog} />
    </>
  );
}
