import { useUser } from "../../../shared/hooks/useUser";
import { useUsernames } from "../../../shared/hooks/useUsernames";

import { Conversation } from "./Conversation";

function List({ conversations, search }) {
  const { data: user } = useUser();
  const { data: usernames } = useUsernames();

  return (
    <div className="flex grow flex-col gap-4">
      <Conversation key={"global"} uuid="global" />
      <hr className="text-slate-700" />
      {conversations?.length > 0 &&
        conversations.map((chat) => {
          const friendId = chat.user_1 === user?.id ? chat.user_2 : chat.user_1;
          const username = usernames?.find((el) => el.id === friendId).username;

          return (
            <Conversation
              search={search}
              friendId={friendId}
              key={chat.id}
              uuid={chat.id}
              username={username}
            />
          );
        })}
    </div>
  );
}

export { List };
