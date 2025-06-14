export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-3 m-2 mx-auto max-w-[800px]">
      {children}
    </main>
  );
}