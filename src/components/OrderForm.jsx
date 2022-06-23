import React from 'react';
import useWindowSize from '@rehooks/window-size';

export default function OrderForm() {
  const defaultWidth = 640;
  const { innerWidth } = useWindowSize();
  const width = Math.min(innerWidth - 24, defaultWidth);

  return (
    <iframe
      frameBorder="0"
      height={width < defaultWidth ? 1620 : 1450}
      marginHeight="0"
      marginWidth="0"
      src="https://docs.google.com/forms/d/e/1FAIpQLSdXm4aTzZVHn5RIYhC1xLy-MNtyRxohuU2tZCH-TPnU8GqGHw/viewform?embedded=true"
      style={{ backgroundColor: '#edeeff', borderRadius: 5 }}
      title="Jerrypop Order Form"
      width={width}
    >
      Loading…
    </iframe>
  );
}
