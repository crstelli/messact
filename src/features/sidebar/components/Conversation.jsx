import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { fetchMessages } from "../../../lib/apiChat";

import { formatDate } from "../../../utils/formatDate";

function Conversation({ uuid, friendId, search, username }) {
  const navigate = useNavigate();

  const { data: messages } = useQuery({
    queryKey: ["messages", uuid + ""],
    queryFn: () => fetchMessages(uuid),
  });

  const lastMessage = messages?.at(-1);

  function handleClick() {
    navigate(`/chats/${uuid}?username=${username || "Global Chat"}`);
  }

  return friendId || uuid === "global" ? (
    <div
      onClick={handleClick}
      className={`cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-x-3 text-sm ${search === "" || username?.includes(search) || uuid === "global" ? "grid" : "hidden"}`}
    >
      <div className="size-10 rounded-full bg-sky-200"></div>
      <div>
        <h4 className="font-semibold">
          {uuid === "global" ? "Global Chat" : username}
        </h4>
        <h5 className="text-neutral-500">{lastMessage?.content}</h5>
      </div>
      <span className="text-slate-500">
        {lastMessage && formatDate(new Date(lastMessage?.created_at))}
      </span>
    </div>
  ) : (
    <p>no</p> // ??
  );
}

export { Conversation };
