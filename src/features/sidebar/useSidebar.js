import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import {
  createConversation,
  fetchConversations,
  syncConversations,
} from "../../lib/apiChat";

import { logout } from "../../lib/apiAuth";

function useSidebar() {
  const [conversations, setConversations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const chatsChannel = useRef(null);
  const navigate = useNavigate();

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

  function handleLogout() {
    try {
      logout();
      toast.success("Logged out");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return {
    conversations,
    showModal,
    openModal,
    closeModal,
    handleAddFriend,
    handleLogout,
  };
}

export { useSidebar };
