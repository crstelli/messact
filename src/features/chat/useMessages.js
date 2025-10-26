import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import toast from "react-hot-toast";

import { useUser } from "../../contexts/useUser";

import { fetchMessages, syncMessages } from "../../lib/apiChat";

function useMessages() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const user = useUser();
  const userId = user?.id;

  const { id: chatId } = useParams();
  const channelRef = useRef(null); // Creato in modo che React non possa mai avere 2 canali attivi contemporaneaente, prima di questo avevo una variabile let creata all'interno dell'useEffect che avrebbe potuto creare questo problema in futuro.

  useEffect(() => {
    (async function fetchChat() {
      try {
        setIsLoading(true);
        const messages = await fetchMessages(chatId);
        setMessages(messages);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [chatId]);

  useEffect(() => {
    // Non so perché abbia dovuto creare due effetti distinti
    channelRef.current = syncMessages(chatId, setMessages);

    return () => {
      if (channelRef.current) channelRef.current.unsubscribe();
    };
  }, [chatId]);

  return [isLoading, messages, userId]; // Se dovesse contenere piú valori, potrebbe aver senso ritornare un oggetto, per miglior leggibilitá e scalabilitá.
}

export { useMessages };
