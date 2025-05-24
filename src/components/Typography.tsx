import { ReactNode } from 'react';

type TypeographyType = 'h1' | 'h2' | 'h3' | 'h4' | 'p';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  type: TypeographyType;
}

const Typography = ({ children, type, ...props }: Props) => {
  switch (type) {
    case 'h1':
      return (
        <h1 className="mb-3 mt-12 text-3xl font-bold" {...props}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className="mb-3 mt-8 text-2xl font-bold" {...props}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className="mb-3 mt-6 text-xl font-bold" {...props}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className="my-3 text-lg font-bold" {...props}>
          {children}
        </h4>
      );
    case 'p':
    default:
      return (
        <p className="my-3 text-base" {...props}>
          {children}
        </p>
      );
  }
};

export default Typography;
