import { useSidebar } from "./useSidebar";

import { AddFriendForm } from "./AddFriendForm";
import { SearchBar } from "./SearchBar";
import { Header } from "./Header";
import { List } from "./List";

import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { Logo } from "../../components/Logo";

function Sidebar({ classes }) {
  const { conversations, showModal, openModal, closeModal, handleAddFriend } =
    useSidebar();

  return (
    <div
      className={`row-span-2 flex h-full w-full flex-col gap-3 bg-neutral-900/90 p-4 text-neutral-300 ${classes}`}
    >
      <Logo />
      <SearchBar />
      <Header length={conversations.length} />
      <List conversations={conversations} />
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
