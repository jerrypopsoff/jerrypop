import NavigationMenu from './NavigationMenu';
import PageHeading from './PageHeading';
import React from 'react';

export default function NotFound() {
  return (
    <>
      <PageHeading>Ope!</PageHeading>
      <p>Someone spilled the kernels. That page does not exist.</p>
      <NavigationMenu />
    </>
  );
}
