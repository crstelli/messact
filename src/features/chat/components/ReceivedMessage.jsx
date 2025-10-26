function ReceivedMessage({ children, author, time }) {
  return (
    <div className="flex flex-col self-start rounded-tl-xl rounded-r-xl bg-slate-700 px-2 py-1">
      <span className="pr-2 font-semibold text-white">{author}</span>
      <span className="flex">
        <p className="font-light text-slate-300">{children}</p>
        <span className="ml-auto self-end pl-4 text-xs font-thin text-slate-300">
          {time}
        </span>
      </span>
    </div>
  );
}

export { ReceivedMessage };
