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
    let channel;
    (async function fetchChat() {
      const data = await fetchMessages(chatId);
      setMessages(data);

      channel = syncChat(chatId, setMessages);
    })(); // IIFE

    return () => {
      if (channel) channel.unsubscribe();
    };
  }, [chatId]);

  return (
    <div className="flex grow flex-col gap-2">
      <SentMessage key={251}>per il content?</SentMessage>
      {messages.map((m) => {
        return m.sent_by === id ? (
          <SentMessage key={m.id}>{m.content}</SentMessage>
        ) : (
          <ReceivedMessage author={m.sent_by_username} key={m.id}>
            {m.content}
          </ReceivedMessage>
        );
      })}
    </div>
  );
}

function ReceivedMessage({ children, author }) {
  return (
    <div className="flex flex-col self-start rounded-tl-xl rounded-r-xl bg-slate-700 px-2 py-1">
      <span className="pr-2 font-semibold text-white">{author}</span>
      <p className="font-light text-slate-300">{children}</p>
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
