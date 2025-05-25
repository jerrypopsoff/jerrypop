export default function DescriptionDetails({
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return <dd className="my-4 ml-3 text-left" {...props} />;
}
