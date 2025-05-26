export default function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <line x1="0" y1="0" x2="24" y2="24" />
      <line x1="24" y1="0" x2="0" y2="24" />
    </svg>
  );
}
