import { useNavigate } from "react-router";

function Conversation({ uuid, friendId, search, username }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/chats/${uuid}?username=${username || "Global Chat"}`);
  }

  return friendId || uuid === "global" ? (
    <div
      onClick={handleClick}
      className={`cursor-pointer grid-cols-[auto_1fr] items-center gap-x-3 text-sm ${search === "" || username?.includes(search) || uuid === "global" ? "grid" : "hidden"}`}
    >
      <div className="size-10 rounded-full bg-sky-200"></div>
      <h4 className="font-semibold">
        {uuid === "global" ? "Global Chat" : username}
      </h4>
    </div>
  ) : (
    <p>no</p>
  );
}

export { Conversation };
