import { ReactNode } from 'react';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export function Heading3({ children, ...props }: Props) {
  return (
    <h3 className="mt-6 mb-3 text-xl font-semibold" {...props}>
      {children}
    </h3>
  );
}
