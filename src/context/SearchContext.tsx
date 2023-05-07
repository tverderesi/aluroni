import React, { createContext, useReducer } from "react";
import { searchReducer } from "./searchReducer";

const SearchContext = createContext({} as any);

const SearchProvider = ({ children }: { children: any }) => {
  const initialState = { search: "" };
  const [state, dispatch] = useReducer(searchReducer, initialState);

  return (
    <SearchContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
