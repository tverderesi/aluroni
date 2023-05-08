import { useContext } from "react";
import style from "./Search.module.scss";
import { AppContext } from "context/AppContext";

export function Search() {
  const { search, dispatch } = useContext(AppContext);
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
