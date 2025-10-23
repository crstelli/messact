function Button({ children, classes, ...props }) {
  return (
    <button
      {...props}
      className={`cursor-pointer rounded-md border border-slate-800 bg-slate-700 py-1 font-light text-slate-400 uppercase hover:bg-transparent ${classes}`}
    >
      {children}
    </button>
  );
}

export { Button };
