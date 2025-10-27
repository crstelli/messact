import { useState } from "react";
import toast from "react-hot-toast";

import { useConversations } from "./hooks/useConversations";
import { useModal } from "./hooks/useModal";
import { useLogout } from "./hooks/useLogout";

import { AddFriendForm } from "./components/AddFriendForm";
import { SearchBar } from "./components/SearchBar";
import { Header } from "./components/Header";
import { List } from "./components/List";

import { Button } from "../../shared/components/Button";
import { ButtonRed } from "../../shared/components/ButtonRed";
import { Modal } from "../../shared/components/Modal";
import { Logo } from "../../shared/components/Logo";
import { Spinner } from "../../shared/components/Spinner";

function Sidebar({ classes }) {
  const { conversations, error, isLoading, addFriend } = useConversations();
  const { modal, openModal, closeModal } = useModal();
  const { logout } = useLogout();

  const [search, setSearch] = useState("");

  if (error) toast.error(error.message);

  return (
    <div
      className={`row-span-2 flex h-full w-full flex-col gap-3 bg-neutral-900/90 p-4 text-neutral-300 ${classes}`}
    >
      {isLoading ? (
        <span className="m-auto">
          <Spinner />
        </span>
      ) : (
        <>
          <Logo />
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Header length={conversations?.length} />
          <List search={search} conversations={conversations} />
          <Button onClick={openModal} classes={"mt-auto"}>
            Add a friend
          </Button>
          <ButtonRed onClick={logout}>Logout</ButtonRed>
          {modal && (
            <Modal onClose={closeModal}>
              <AddFriendForm
                onSubmit={(friendId) => {
                  addFriend(friendId);
                  closeModal();
                }}
              />
            </Modal>
          )}
        </>
      )}
    </div>
  );
}

export { Sidebar };
