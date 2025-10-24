import { Messages } from "./components/Messages";
import { Typing } from "./components/Typing";

function Chat() {
  return (
    <div className="flex h-full flex-col p-4">
      <Messages />
      <Typing />
    </div>
  );
}

export { Chat };
