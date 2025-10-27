function Main({ children }) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 p-4 text-slate-50">
      {children}
    </div>
  );
}

export { Main };
