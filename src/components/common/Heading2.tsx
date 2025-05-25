import { ReactNode } from 'react';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export default function Heading2({ children, ...props }: Props) {
  return (
    <h2 className="mb-3 mt-8 text-2xl font-semibold" {...props}>
      {children}
    </h2>
  );
}
