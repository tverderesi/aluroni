import { AppContext } from "context/AppContext";
import styles from "./Sorter.module.scss";
import options from "./options.json";
import classNames from "classnames";
import { useContext, useState } from "react";

export default function Sorter() {
  const { sort, dispatch } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const sortName =
    sort && options.find((option) => option.value === sort)?.name;
  return (
    <button
      className={classNames({
        [styles.sorter]: true,
        [styles["sorter--active"]]: sort !== "",
        [styles["sorter--open"]]: open,
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{sortName || "Sort By"}</span>
      {open ? (
        <span className="material-symbols-outlined">arrow_upward</span>
      ) : (
        <span className="material-symbols-outlined">arrow_downward</span>
      )}
      <div
        className={classNames({
          [styles.sorter__options]: true,
          [styles["sorter__options--active"]]: open,
        })}
      >
        {options.map((option) => (
          <div
            className={styles.sorter__option}
            key={option.value}
            onClick={() =>
              dispatch({ type: "SET_SORT", payload: option.value })
            }
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}
