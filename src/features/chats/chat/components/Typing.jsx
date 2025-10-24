import { useState } from "react";
import { useParams } from "react-router";
import { sendMessage } from "../../../../services/apiChat";

import { SendHorizonal } from "lucide-react";

function Typing() {
  const [typing, setTyping] = useState("");
  const { id: chatId } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    if (!typing) return;

    sendMessage(typing, chatId);
    setTyping("");
  }

  return (
    <form
      onSubmit={handleSubmit}
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
  );
}

export { Typing };
