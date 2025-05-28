export function HamburgerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <line x1="0" y1="4" x2="24" y2="4" />
      <line x1="0" y1="12" x2="24" y2="12" />
      <line x1="0" y1="20" x2="24" y2="20" />
    </svg>
  );
}
