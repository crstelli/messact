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
      className="group grid grid-cols-[1fr_auto] rounded-lg bg-neutral-950/50 px-4 py-2 focus-within:bg-neutral-950/70"
    >
      <input
        value={typing}
        onChange={(e) => setTyping(e.target.value)}
        type="text"
        className="w-full focus:outline-none"
        placeholder="Send a message"
      />
      <button
        type="submit"
        className="duration-100 group-not-focus-within:opacity-0 group-focus-within:opacity-100"
      >
        <SendHorizonal className="cursor-pointer" />
      </button>
    </form>
  );
}

export { Typing };
