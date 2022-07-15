import NavigationMenu from './NavigationMenu';
import React from 'react';
import Typography from './Typography';

export default function NotFound() {
  return (
    <>
      <Typography type="h1">Ope!</Typography>
      <Typography type="p">
        Someone spilled the kernels. That page does not exist.
      </Typography>
      <NavigationMenu />
    </>
  );
}
