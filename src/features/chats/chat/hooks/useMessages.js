import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";

import { fetchMessages, syncChat } from "../../../../services/apiChat";
import { getUser } from "../../../../services/apiAuth";

function useMessages() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);

  const { id: chatId } = useParams();
  const channelRef = useRef(null); // Creato in modo che React non possa mai avere 2 canali attivi contemporaneaente, prima di questo avevo una variabile let creata all'interno dell'useEffect che avrebbe potuto creare questo problema in futuro.

  useEffect(() => {
    (async function fetchChat() {
      try {
        setIsLoading(true);
        const messages = await fetchMessages(chatId);

        setMessages(messages);
        setUser(await getUser());
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [chatId]);

  useEffect(() => {
    // Non so perché abbia dovuto creare due effetti distinti
    channelRef.current = syncChat(chatId, setMessages);

    return () => {
      if (channelRef.current) channelRef.current.unsubscribe();
    };
  }, [chatId]);

  return [isLoading, messages, user]; // Se dovesse contenere piú valori, potrebbe aver senso ritornare un oggetto, per miglior leggibilitá e scalabilitá.
}

export { useMessages };
