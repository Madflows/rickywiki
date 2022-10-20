import { createContext, useContext, useState } from "react";

const ModalContext = createContext({});

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [activeCharacter, setActiveCharacter] = useState(false);
  return (
    <ModalContext.Provider value={{ activeCharacter, setActiveCharacter }}>
      {children}
    </ModalContext.Provider>
  );
};
