function ButtonRed({ children, classes, ...props }) {
  return (
    <button
      {...props}
      className={`cursor-pointer rounded-md border border-red-800/30 bg-red-700/20 py-1 font-light text-neutral-400 uppercase hover:bg-transparent ${classes}`}
    >
      {children}
    </button>
  );
}

export { ButtonRed };
