import { Messages } from "./components/Messages";
import { Typing } from "./components/Typing";

function Chat() {
  return (
    <div className="flex h-full flex-col overflow-y-auto p-4">
      <Messages />
      <Typing />
    </div>
  );
}

export { Chat };
