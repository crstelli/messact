function SentMessage({ children, time }) {
  return (
    <div className="flex flex-col self-end rounded-l-xl rounded-tr-xl bg-sky-700 px-2 py-1">
      <p className="font-light text-slate-300">{children}</p>
      <span className="self-end text-xs font-thin text-sky-200">{time}</span>
    </div>
  );
}

// Aggiungere orario

export { SentMessage };
