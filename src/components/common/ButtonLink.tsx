import Link from 'next/link';

interface Props extends React.ComponentProps<typeof Link> {
  className?: string;
}

export function ButtonLink({ className, ...props }: Props) {
  return (
    <Link
      className={`inline-block cursor-pointer rounded-sm bg-foreground px-6 py-4 text-sm tracking-wide text-background uppercase hover:animate-wiggle focus:animate-wiggle ${className} `}
      {...props}
    />
  );
}
