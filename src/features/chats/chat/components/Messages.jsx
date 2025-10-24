import { useMessages } from "../useMessages";
import { Spinner } from "../../../../shared/ui/Spinner";

function Messages() {
  const [isLoading, messages, user] = useMessages();

  return (
    <div className="flex grow flex-col gap-2">
      {isLoading ? (
        <div className="flex grow items-center justify-center">
          <Spinner />
        </div>
      ) : (
        messages.map((m) => {
          return m.sent_by === user.id ? (
            <SentMessage key={m.id}>{m.content}</SentMessage>
          ) : (
            <ReceivedMessage author={m.sent_by_username} key={m.id}>
              {m.content}
            </ReceivedMessage>
          );
        })
      )}
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

export { Messages };
