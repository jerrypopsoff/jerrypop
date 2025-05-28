import { ReactNode } from 'react';

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function Paragraph({ children, ...props }: Props) {
  return (
    <p className="my-3 text-base" {...props}>
      {children}
    </p>
  );
}
