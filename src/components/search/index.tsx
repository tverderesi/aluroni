import { useContext } from "react";
import style from "./Search.module.scss";
import { SearchContext } from "context/SearchContext";

export function Search() {
  const { search, dispatch } = useContext(SearchContext);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_SEARCH", payload: e.target.value });
  };

  return (
    <div className={style.search}>
      <input value={search} onChange={handleSearch} />

      <span className="material-symbols-outlined">search</span>
    </div>
  );
}
