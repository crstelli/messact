import { Search } from "lucide-react";
import { Button } from "../../../shared/ui/Button";
import { useState } from "react";

import { useNavigate } from "react-router";

function Sidebar() {
  const [chats, setChats] = useState([1, 2, 3]);
  const navigate = useNavigate();

  return (
    <div className="row-span-2 flex h-full w-full flex-col gap-3 bg-neutral-900/90 p-4 text-neutral-300">
      <h1>Messact</h1>
      <div className="flex items-center gap-2 rounded-full bg-neutral-800 px-4 py-2 text-sm font-light text-neutral-500">
        <Search size={18} />
        <input
          placeholder="Search for user or chat"
          className="placeholder:text-inherit focus:outline-none"
          type="text"
        />
      </div>
      <div className="flex items-center justify-between">
        <h3>Chats</h3>
        <span className="flex size-8 items-center justify-center rounded-full bg-sky-600/20 text-sm text-sky-300">
          {chats.length}
        </span>
      </div>
      <div className="flex grow flex-col gap-4">
        {chats.length > 0 &&
          chats.map((c) => (
            <ChatElement key={Math.random()} username={"Test"} />
          ))}
        <Button classes={"mt-auto"}>Add a friend</Button>
      </div>
    </div>
  );
}

function ChatElement({ username }) {
  return (
    <div className="grid cursor-pointer grid-cols-[auto_1fr] items-center gap-x-3 text-sm">
      <div className="size-10 rounded-full bg-sky-200"></div>
      <h4 className="font-semibold">{username}</h4>
    </div>
  );
}

export { Sidebar };
