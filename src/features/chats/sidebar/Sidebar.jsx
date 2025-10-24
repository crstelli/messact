import { Search } from "lucide-react";
import { Button } from "../../../shared/ui/Button";
import { getPrivateChats } from "../../../services/apiChat";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router";

function Sidebar() {
  const [chats, setChats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async function fetchChats() {
      let totalChats = [];
      const { data: chats } = await getPrivateChats();
      chats.forEach((c) => totalChats.push(c.sent_by));

      const uniqueChats = [...new Set(totalChats)];

      const finalChats = [];
      uniqueChats.forEach((c) => {
        const username = chats.find((m) => m.sent_by === c).sent_by_username;
        finalChats.push({
          uuid: c,
          username,
        });
      });

      setChats(finalChats);
    })();
  }, []);

  function handleClickChat(uuid) {
    navigate(`/chats/${uuid}`);
  }

  return (
    <div className="row-span-2 h-full w-full flex-col gap-3 bg-neutral-900/90 p-4 text-neutral-300 max-sm:hidden sm:flex">
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
            <ChatElement
              key={c.uuid}
              username={c.username}
              onClick={() => handleClickChat(c.uuid)}
            />
          ))}
        <Button classes={"mt-auto"}>Add a friend</Button>
      </div>
    </div>
  );
}

function ChatElement({ onClick, username }) {
  return (
    <div
      onClick={onClick}
      className="grid cursor-pointer grid-cols-[auto_1fr] items-center gap-x-3 text-sm"
    >
      <div className="size-10 rounded-full bg-sky-200"></div>
      <h4 className="font-semibold">{username}</h4>
    </div>
  );
}

export { Sidebar };
