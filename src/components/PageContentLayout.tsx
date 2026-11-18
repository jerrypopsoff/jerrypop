export function PageContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-158 flex-col items-center px-4 text-center">
      {children}
    </div>
  );
}
