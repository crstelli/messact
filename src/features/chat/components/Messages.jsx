import { useMessages } from "../useMessages";
import { formateDate } from "../../../utils/formatDate";

import { ReceivedMessage } from "./ReceivedMessage";
import { SentMessage } from "./SentMessage";

import { Spinner } from "../../../components/Spinner";
import toast from "react-hot-toast";

function calcDate(value) {
  const dateObj = new Date(value);

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  const date = { year, month, day };
  return date;
}

function displayDate(value) {
  return `${value.day}/${value.month}/${value.year}`;
}

function compareDate(date1, date2) {
  if (date1.year !== date2.year) return false;
  if (date1.month !== date2.month) return false;
  if (date1.day !== date2.day) return false;

  return true;
}

function Messages() {
  const [isLoading, messages, error, userId] = useMessages();
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
          if (index === 0) tag = displayDate(calcDate(m.created_at));
          if (index > 0 && index < array.length - 1) {
            const date_1 = calcDate(m.created_at);
            const date_2 = calcDate(array[index - 1]?.created_at);

            if (!compareDate(date_1, date_2)) tag = displayDate(date_1);
          }

          return (
            <>
              {tag && <DateTag key={index}>{tag}</DateTag>}
              {m.sent_by === userId ? (
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
              )}
            </>
          );
        })
      )}
    </div>
  );
}

function DateTag({ children }) {
  return (
    <span className="m-auto my-2 rounded-full bg-slate-900 px-4">
      {children}
    </span>
  );
}

export { Messages };
