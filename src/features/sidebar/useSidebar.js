import { useEffect, useRef, useState } from "react";
import {
  createConversation,
  fetchConversations,
  syncConversations,
} from "../../lib/apiChat";

function useSidebar() {
  const [conversations, setConversations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const chatsChannel = useRef(null);

  useEffect(() => {
    (async function () {
      try {
        const data = await fetchConversations(setConversations);
        setConversations(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async function () {
      chatsChannel.current = await syncConversations(setConversations);
    })();

    return () => {
      if (chatsChannel.current) {
        chatsChannel.current.unsubscribe();
      }
    };
  }, []);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function handleAddFriend(friendId) {
    createConversation(friendId);
    setShowModal(false);
  }

  return { conversations, showModal, openModal, closeModal, handleAddFriend };
}

export { useSidebar };
