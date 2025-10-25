import { useEffect, useRef, useState } from "react";
import {
  createConversation,
  fetchConversations,
  syncConversations,
} from "../../../services/apiChat";

import { ChatElement } from "./components/ChatElement";
import { Button } from "../../../shared/ui/Button";

import { Search } from "lucide-react";
import { Modal } from "../../../shared/ui/Modal";
import { AddFriendForm } from "./components/AddFriendForm";

function Sidebar({ hidden }) {
  const [chats, setChats] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const chatsChannel = useRef(null);

  useEffect(() => {
    (async function () {
      try {
        const data = await fetchConversations(setChats);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async function () {
      chatsChannel.current = await syncConversations(setChats);
    })();

    return () => {
      if (chatsChannel.current) {
        chatsChannel.current.unsubscribe();
      }
    };
  }, []);

  function handleModal() {
    setShowModal((mod) => !mod);
  }

  function handleAddFriend(friendId) {
    createConversation(friendId);
    setShowModal(false);
  }

  return (
    <div
      className={`row-span-2 flex h-full w-full flex-col gap-3 bg-neutral-900/90 p-4 text-neutral-300 ${hidden ? "max-sm:hidden" : null}`}
    >
      <h1>Messact</h1>
      <div className="flex items-center gap-2 rounded-full bg-neutral-800 px-4 py-2 text-sm font-light text-neutral-500">
        <Search size={18} />
        <input
          placeholder="Search for user or chat"
          className="placeholder:text-inherit focus:outline-none"
          type="text"
        />
      </div>
      <div className="flex items-center justify-between">
        <h3>Chats</h3>
        <span className="flex size-8 items-center justify-center rounded-full bg-sky-600/20 text-sm text-sky-300">
          {chats.length}
        </span>
      </div>
      <div className="flex grow flex-col gap-4">
        <ChatElement key={"global"} username={"Global Chat"} uuid="global" />
        <hr className="text-slate-700" />
        {chats.length > 0 &&
          chats.map((chat) => (
            <ChatElement key={chat.id} username={"Username"} uuid={chat.id} />
          ))}
        {showModal && (
          <Modal onClose={handleModal}>
            <AddFriendForm onSubmit={handleAddFriend} />
          </Modal>
        )}
        <Button onClick={handleModal} classes={"mt-auto"}>
          Add a friend
        </Button>
      </div>
    </div>
  );
}

export { Sidebar };
