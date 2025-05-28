import { ReactNode } from 'react';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export function Heading4({ children, ...props }: Props) {
  return (
    <h4 className="mb-3 mt-6 font-semibold" {...props}>
      {children}
    </h4>
  );
}
