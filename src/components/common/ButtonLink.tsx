import Link from 'next/link';

interface Props extends React.ComponentProps<typeof Link> {
  className?: string;
}

export default function ButtonLink({ className, ...props }: Props) {
  return (
    <Link
      className={`bg-foreground text-background hover:animate-wiggle focus:animate-wiggle inline-block cursor-pointer rounded-sm px-6 py-4 text-sm uppercase tracking-wide ${className} `}
      {...props}
    />
  );
}
