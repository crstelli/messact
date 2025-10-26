import { useSidebar } from "./useSidebar";

import { ChatElement } from "./Conversation";
import { AddFriendForm } from "./AddFriendForm";

import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { Logo } from "../../components/Logo";
import { SearchBar } from "./SearchBar";
import { ConversationsHeader } from "./Header";
import { ConversationsList } from "./List";

function Sidebar({ hidden }) {
  const { conversations, showModal, openModal, closeModal, handleAddFriend } =
    useSidebar();

  return (
    <div
      className={`row-span-2 flex h-full w-full flex-col gap-3 bg-neutral-900/90 p-4 text-neutral-300 ${hidden ? "max-sm:hidden" : null}`}
    >
      <Logo />
      <SearchBar />
      <ConversationsHeader length={conversations.length} />
      <ConversationsList conversations={conversations} />
      <Button onClick={openModal} classes={"mt-auto"}>
        Add a friend
      </Button>
      {showModal && (
        <Modal onClose={closeModal}>
          <AddFriendForm onSubmit={handleAddFriend} />
        </Modal>
      )}
    </div>
  );
}

export { Sidebar };
