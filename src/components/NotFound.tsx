import { useDocumentTitle } from '../hooks/use-document-title';
import Typography from './Typography';

const NotFound = () => {
  useDocumentTitle('Page Not Found · Jerrypop');

  return (
    <>
      <Typography type="h1">Ope!</Typography>
      <Typography type="p">
        Someone spilled the kernels. That page does not exist.
      </Typography>
    </>
  );
};

export default NotFound;
