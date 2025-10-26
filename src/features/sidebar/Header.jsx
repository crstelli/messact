function Header({ length }) {
  return (
    <div className="flex items-center justify-between">
      <h3>Chats</h3>
      <span className="flex size-8 items-center justify-center rounded-full bg-sky-600/20 text-sm text-sky-300">
        {length}
      </span>
    </div>
  );
}

export { Header };
