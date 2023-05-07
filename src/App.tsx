import { Search } from "components/search";
import { SearchProvider } from "context/SearchContext";
import { Menu } from "pages/menu";
import React from "react";

export default function App() {
  return (
    <SearchProvider>
      <Menu />
    </SearchProvider>
  );
}
