export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden bg-muted">
      <div className="w-full max-w-sm p-4">
        {children}
      </div>
    </div>
  );
}
