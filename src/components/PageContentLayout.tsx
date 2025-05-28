export function PageContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        max-w-158 mx-auto flex flex-col items-center px-4 text-center
      "
    >
      {children}
    </div>
  );
}
