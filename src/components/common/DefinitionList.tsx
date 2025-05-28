export function DefinitionList({
  ...props
}: React.HTMLAttributes<HTMLDListElement>) {
  return <dl className="my-6 grid grid-cols-[1fr_3fr]" {...props} />;
}
