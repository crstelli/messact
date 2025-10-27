import { useEffect, useRef } from "react";
import { useParams } from "react-router";

import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { fetchMessages, syncMessages } from "../../lib/apiChat";

function useMessages() {
  const { id: chatId } = useParams();
  const queryClient = useQueryClient();
  const channelRef = useRef(null); // Creato in modo che React non possa mai avere 2 canali attivi contemporaneaente, prima di questo avevo una variabile let creata all'interno dell'useEffect che avrebbe potuto creare questo problema in futuro.

  const {
    isLoading,
    error,
    data: messages,
  } = useQuery({
    queryKey: ["messages", chatId],
    queryFn: () => fetchMessages(chatId),
    enabled: !!chatId,
  });

  useEffect(() => {
    channelRef.current = syncMessages(chatId, (payload) => {
      queryClient.setQueryData(["messages", chatId], (old) =>
        old ? [...old, payload.new] : [payload.new],
      );
    });

    return () => {
      if (channelRef.current) channelRef.current?.unsubscribe?.();
    };
  }, [chatId, queryClient]);

  return [isLoading, messages, error];
}

export { useMessages };
