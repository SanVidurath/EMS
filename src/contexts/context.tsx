// context.tsx
import React, { Dispatch, ReactNode, useState, SetStateAction } from "react";

export interface AppContextProps {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = React.createContext<AppContextProps | undefined>(
  undefined
);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ modal, setModal }}>
      {children}
    </AppContext.Provider>
  );
};
