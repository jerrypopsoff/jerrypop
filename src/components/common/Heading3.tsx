import { ReactNode } from 'react';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export default function Heading3({ children, ...props }: Props) {
  return (
    <h3 className="mb-3 mt-6 text-xl font-bold" {...props}>
      {children}
    </h3>
  );
}
