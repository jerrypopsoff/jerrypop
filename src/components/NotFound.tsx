import { Helmet } from 'react-helmet-async';
import NavigationMenu from './NavigationMenu';
import React from 'react';
import Typography from './Typography';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found · Jerrypop</title>
      </Helmet>
      <Typography type="h1">Ope!</Typography>
      <Typography type="p">
        Someone spilled the kernels. That page does not exist.
      </Typography>
      <NavigationMenu />
    </>
  );
};

export default NotFound;
