import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuth } from "../../../../contexts/auth/useAuth";

import { fetchMessages, syncChat } from "../../../../services/apiChat";

function List() {
  const { id: chatId } = useParams();
  const {
    user: { id },
  } = useAuth();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchChat() {
      const data = await fetchMessages(chatId);
      setMessages(data);

      const channel = syncChat(chatId, setMessages);
      return () => channel.unsubscribe(); // Non sono sicuro funzioni, ma sembra andare (cleanup function)
    }

    return () => fetchChat();
  }, [chatId]);

  return (
    <div className="flex grow flex-col gap-2 overflow-y-auto">
      {messages.map((m) => {
        return m.sent_by === id ? (
          <SentMessage key={m.id}>{m.content}</SentMessage>
        ) : (
          <ReceivedMessage key={m.id}>{m.content}</ReceivedMessage>
        );
      })}
    </div>
  );
}

function ReceivedMessage({ children }) {
  return (
    <div className="self-start rounded-tl-xl rounded-r-xl bg-slate-700 px-2 py-1">
      {children}
    </div>
  );
}

function SentMessage({ children }) {
  return (
    <div className="self-end rounded-l-xl rounded-tr-xl bg-sky-700 px-2 py-1">
      {children}
    </div>
  );
}

export { List };
