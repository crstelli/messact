function ReceivedMessage({ children, author }) {
  return (
    <div className="flex flex-col self-start rounded-tl-xl rounded-r-xl bg-slate-700 px-2 py-1">
      <span className="pr-2 font-semibold text-white">{author}</span>
      <p className="font-light text-slate-300">{children}</p>
    </div>
  );
}

export { ReceivedMessage };
