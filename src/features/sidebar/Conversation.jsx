import { useNavigate } from "react-router";

function Conversation({ username, uuid }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/chats/${uuid}`);
  }

  return (
    <div
      onClick={handleClick}
      className="grid cursor-pointer grid-cols-[auto_1fr] items-center gap-x-3 text-sm"
    >
      <div className="size-10 rounded-full bg-sky-200"></div>
      <h4 className="font-semibold">{username}</h4>
    </div>
  );
}

export { Conversation };
