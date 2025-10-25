import { useMessages } from "../hooks/useMessages";
import { formateDate } from "../../../../shared/utils/formatDate";

import { ReceivedMessage } from "./ReceivedMessage";
import { SentMessage } from "./SentMessage";
import { Spinner } from "../../../../shared/ui/Spinner";

function Messages() {
  const [isLoading, messages, user] = useMessages();

  return (
    <div className="flex grow flex-col gap-2 overflow-y-auto pr-2 pb-2">
      {isLoading ? (
        <div className="flex grow items-center justify-center">
          <Spinner />
        </div>
      ) : (
        messages.map((m) => {
          return m.sent_by === user.id ? (
            <SentMessage time={formateDate(m.created_at)} key={m.id}>
              {m.content}
            </SentMessage>
          ) : (
            <ReceivedMessage
              time={formateDate(m.created_at)}
              author={m.sent_by_username}
              key={m.id}
            >
              {m.content}
            </ReceivedMessage>
          );
        })
      )}
    </div>
  );
}

export { Messages };
