import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
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
        toast.error(error.message);
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
    try {
      createConversation(friendId);
      toast.success("Friend added successfully.");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setShowModal(false);
    }
  }

  return { conversations, showModal, openModal, closeModal, handleAddFriend };
}

export { useSidebar };
