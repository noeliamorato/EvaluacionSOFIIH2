import { useModalContext } from "../context/modalContext";

export const useModal = (titulo, contenido) => {
  const { setOpenModal, setTitulo, setContenido } = useModalContext();

  const openModal = () => {
    setTitulo(titulo);
    setContenido(contenido);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return { openModal, closeModal };
};
