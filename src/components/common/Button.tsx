export default function Button({
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`
        bg-foreground text-background hover:animate-wiggle focus:animate-wiggle
        cursor-pointer rounded-sm px-6 py-4 text-sm uppercase tracking-wide
        ${className}
      `}
      {...props}
    />
  );
}
