export function Button({
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`cursor-pointer rounded-sm bg-foreground px-6 py-4 text-sm tracking-wide text-background uppercase hover:animate-wiggle focus:animate-wiggle ${className} `}
      {...props}
    />
  );
}
