import { useState } from "react";

function useModal() {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return { modal, openModal, closeModal };
}

export { useModal };
