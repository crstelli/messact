import { useEffect, useState } from "react";
import { getUser } from "../../lib/apiAuth";
import { Conversation } from "./Conversation";

function List({ conversations }) {
  const [userId, setUserId] = useState();

  useEffect(() => {
    (async function () {
      const { id } = await getUser();
      setUserId(id);
    })();
  }, []);

  return (
    <div className="flex grow flex-col gap-4">
      <Conversation key={"global"} uuid="global" />
      <hr className="text-slate-700" />
      {conversations.length > 0 &&
        conversations.map((chat) => {
          const friendId = chat.user_1 === userId ? chat.user_2 : chat.user_1;
          return (
            <Conversation friendId={friendId} key={chat.id} uuid={chat.id} />
          );
        })}
    </div>
  );
}

export { List };
