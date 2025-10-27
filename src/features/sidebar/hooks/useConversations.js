import { useEffect, useRef } from "react";
import {
  fetchConversations,
  syncConversations,
  createConversation,
} from "../../../lib/apiChat";

import { useQuery, useQueryClient } from "@tanstack/react-query";

function useConversations() {
  const queryClient = useQueryClient();
  const channelRef = useRef(null);

  const {
    isLoading,
    error,
    data: conversations,
  } = useQuery({
    queryKey: ["conversations"],
    queryFn: () => fetchConversations(),
  });

  useEffect(() => {
    (async function () {
      channelRef.current = await syncConversations((payload) =>
        queryClient.setQueryData(["conversations"], (old) =>
          old ? [...old, payload.new] : [payload.new],
        ),
      );
    })();

    return () => {
      if (channelRef.current) {
        channelRef.current?.unsubscribe?.();
      }
    };
  }, [queryClient]);

  const addFriend = (friendId) => {
    createConversation(friendId);
  };

  return {
    isLoading,
    error,
    conversations,
    addFriend,
  };
}

export { useConversations };
