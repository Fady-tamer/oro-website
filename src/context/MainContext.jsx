"use client";

import { createContext, useContext, useState } from "react";

const mainStore = createContext();

const MainContext = ({ children }) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const values = {
    openMobileMenu,
    setOpenMobileMenu,
  };

  return <mainStore.Provider value={values}>{children}</mainStore.Provider>;
};

export default MainContext;

export const useMainContext = () => {
  const context = useContext(mainStore);
  if (!context) {
    throw new Error(
      "useMainContext must be used within a MainContext provider",
    );
  }
  return context;
};
