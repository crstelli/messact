import { Messages } from "./components/Messages";
import { Typing } from "./components/Typing";

import { useParams } from "react-router";

function Chat() {
  const { id } = useParams();

  return (
    <div className="flex h-full flex-col p-4 max-sm:hidden">
      {id ? (
        <>
          <Messages />
          <Typing />
        </>
      ) : (
        <p className="m-auto">Select a chat to start</p>
      )}
    </div>
  );
}

export { Chat };
