import { ReactNode } from 'react';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export function Heading3({ children, ...props }: Props) {
  return (
    <h3 className="mb-3 mt-6 text-xl font-semibold" {...props}>
      {children}
    </h3>
  );
}
