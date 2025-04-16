import { Helmet } from 'react-helmet-async';
import Typography from './Typography';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found · Jerrypop</title>
      </Helmet>
      <Typography type="h1">Ope!</Typography>
      <Typography type="p">
        Someone spilled the kernels. That page does not exist.
      </Typography>
    </>
  );
};

export default NotFound;
