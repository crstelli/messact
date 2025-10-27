import toast from "react-hot-toast";
import { useMessages } from "../useMessages";

import { ReceivedMessage } from "./ReceivedMessage";
import { SentMessage } from "./SentMessage";
import { useUser } from "../../../shared/hooks/useUser";

import { Spinner } from "../../../shared/components/Spinner";
import { DateTag } from "./DateTag";

import { formateDate } from "../../../utils/formatDate";
import { calcDate } from "../../../utils/calcDate";
import { displayDate } from "../../../utils/displayDate";
import { compareDate } from "../../../utils/compareDate";

function Messages() {
  const [isLoading, messages, error] = useMessages();
  const { data: user } = useUser();

  if (error) toast.error(error.message);

  return (
    <div className="flex grow flex-col gap-2 overflow-y-auto pr-2 pb-2">
      {isLoading ? (
        <div className="flex grow items-center justify-center">
          <Spinner />
        </div>
      ) : (
        messages.map((m, index, array) => {
          let tag = null;
          const currentDate = calcDate(m.created_at);

          if (index === 0) tag = displayDate(currentDate);
          if (index > 0 && index < array.length - 1) {
            const prevDate = calcDate(array[index - 1]?.created_at);

            if (!compareDate(currentDate, prevDate))
              tag = displayDate(currentDate);
          }

          return (
            <div key={m.id} className="flex flex-col">
              {tag && <DateTag>{tag}</DateTag>}
              {m.sent_by === user.id ? (
                <SentMessage time={formateDate(m.created_at)}>
                  {m.content}
                </SentMessage>
              ) : (
                <ReceivedMessage
                  time={formateDate(m.created_at)}
                  author={m.sent_by_username}
                >
                  {m.content}
                </ReceivedMessage>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}

export { Messages };
