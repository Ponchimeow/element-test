import { createContext, useContext, useEffect, useMemo } from "react";

const defaultAppContextProps = {
  id: "",
};

const AppContext = createContext<{ id: string }>(defaultAppContextProps);
export const useApp = () => useContext(AppContext);

export const AppProvider: React.FC<
  React.PropsWithChildren<{ appId: string }>
> = ({ appId, children }) => {
  return (
    <AppContext.Provider value={{ id: "test" }}>{children}</AppContext.Provider>
  );
};
