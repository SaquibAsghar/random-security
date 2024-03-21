import { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext({ currentUser: "saquib" });

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("rtripati");

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUserContext = () => useContext(CurrentUserContext);
