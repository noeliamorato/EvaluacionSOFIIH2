import  { createContext, useContext, useMemo, useState } from "react";

export const ModalContext = createContext(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      "this contexts must be used whitin a ModalContextProvider"
    );
  }
  return context;
};

export const ModalContextProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState(null);

  const value = useMemo(() => (
    { openModal, setOpenModal, titulo, setTitulo, contenido, setContenido }
  ), [openModal, setOpenModal, titulo, setTitulo, contenido, setContenido]);
  return (
    <ModalContext.Provider value={value}>
      
      { children }
    </ModalContext.Provider>
  )
}