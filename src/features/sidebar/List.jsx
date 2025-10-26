import { Conversation } from "./Conversation";

function List({ conversations }) {
  return (
    <div className="flex grow flex-col gap-4">
      <Conversation key={"global"} username={"Global Chat"} uuid="global" />
      <hr className="text-slate-700" />
      {conversations.length > 0 &&
        conversations.map((chat) => (
          <Conversation key={chat.id} username={"Username"} uuid={chat.id} />
        ))}
    </div>
  );
}

export { List };
