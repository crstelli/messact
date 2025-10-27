function Label({ children, ...props }) {
  return (
    <label {...props} className="text-sm font-light text-slate-400">
      {children}
    </label>
  );
}

export { Label };
