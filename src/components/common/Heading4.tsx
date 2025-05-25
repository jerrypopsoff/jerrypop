import { ReactNode } from 'react';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export default function Heading4({ children, ...props }: Props) {
  return (
    <h4 className="my-3 text-lg font-semibold" {...props}>
      {children}
    </h4>
  );
}
