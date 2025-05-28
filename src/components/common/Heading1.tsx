import { ReactNode } from 'react';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export function Heading1({ children, ...props }: Props) {
  return (
    <h1 className="mb-3 mt-12 text-3xl font-semibold" {...props}>
      {children}
    </h1>
  );
}
