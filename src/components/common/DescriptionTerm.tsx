export default function DescriptionTerm({
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <dt className="my-4 mr-3 text-right font-semibold italic" {...props} />
  );
}
