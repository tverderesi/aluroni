import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

export const AppContext = createContext({} as any);

export const AppProvider = ({ children }: { children: any }) => {
  const initialState = {
    search: "",
    filters: { id: null, label: "" },
    sort: "",
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
