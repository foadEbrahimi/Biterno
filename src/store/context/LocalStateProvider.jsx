import { createContext, useContext, useState } from "react";

const LocalStateContext = createContext();

function LocalStateProvider({ children }) {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => setShowNav((prev) => !prev);
  return (
    <LocalStateContext.Provider value={{ showNav, toggleNav }}>
      {children}
    </LocalStateContext.Provider>
  );
}

function useLocalState() {
  const context = useContext(LocalStateContext);
  return context;
}

export { LocalStateProvider, useLocalState };
