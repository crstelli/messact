import { useState } from "react";
import { useParams } from "react-router";

import { SendHorizonal } from "lucide-react";

import { List } from "./components/List";
import { sendMessage } from "../../../services/apiChat";

function Chat() {
  const [typing, setTyping] = useState("");
  const { id } = useParams();

  function handleSendMessage(e) {
    e.preventDefault();
    if (!typing) return;

    sendMessage(typing, id);
    setTyping("");
  }

  return (
    <div className="flex h-full flex-col p-4">
      <List />
      <form
        onSubmit={handleSendMessage}
        className="flex rounded-lg bg-neutral-950/70 px-4 py-2"
      >
        <input
          value={typing}
          onChange={(e) => setTyping(e.target.value)}
          type="text"
          className="grow focus:outline-none"
          placeholder="Send a message"
        />
        <button type="submit">
          <SendHorizonal className="cursor-pointer" />
        </button>
      </form>
    </div>
  );
}

export { Chat };
