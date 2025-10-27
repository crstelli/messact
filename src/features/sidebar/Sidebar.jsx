import toast from "react-hot-toast";

import { useConversations } from "./hooks/useConversations";
import { useModal } from "./hooks/useModal";
import { useLogout } from "./hooks/useLogout";

import { AddFriendForm } from "./components/AddFriendForm";
import { SearchBar } from "./components/SearchBar";
import { Header } from "./components/Header";
import { List } from "./components/List";

import { Button } from "../../components/Button";
import { ButtonRed } from "../../components/ButtonRed";
import { Modal } from "../../components/Modal";
import { Logo } from "../../components/Logo";
import { Spinner } from "../../components/Spinner";

function Sidebar({ classes }) {
  const { conversations, error, isLoading, addFriend } = useConversations();
  const { modal, openModal, closeModal } = useModal();

  const { logout } = useLogout();

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
          <SearchBar />
          <Header length={conversations?.length} />
          <List conversations={conversations} />
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
