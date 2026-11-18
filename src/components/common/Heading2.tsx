import { ReactNode } from 'react';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export function Heading2({ children, ...props }: Props) {
  return (
    <h2 className="mt-8 mb-3 text-2xl font-semibold" {...props}>
      {children}
    </h2>
  );
}
