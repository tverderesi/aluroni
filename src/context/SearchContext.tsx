import { createContext, useReducer } from "react";
import { searchReducer } from "./searchReducer";

const SearchContext = createContext({} as any);

const SearchProvider = ({ children }: { children: any }) => {
  const initialState = { search: "", filters: { id: null, label: "" } };
  const [state, dispatch] = useReducer(searchReducer, initialState);

  return (
    <SearchContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
