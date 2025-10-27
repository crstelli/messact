import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { getUsername } from "../../../../lib/apiAuth";

function Conversation({ uuid, friendId }) {
  const [username, setUsername] = useState();
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/chats/${uuid}?username=${username || "Global Chat"}`);
  }

  useEffect(() => {
    (async function () {
      friendId && setUsername(await getUsername(friendId));
    })();
  }, [friendId]);

  return friendId || uuid === "global" ? (
    <div
      onClick={handleClick}
      className="grid cursor-pointer grid-cols-[auto_1fr] items-center gap-x-3 text-sm"
    >
      <div className="size-10 rounded-full bg-sky-200"></div>
      <h4 className="font-semibold">
        {uuid === "global" ? "Global Chat" : username}
      </h4>
    </div>
  ) : (
    <p>no</p>
  );
}

export { Conversation };
