import React from "react";
import { filters as filtersList } from "./filters";
import styles from "./Filters.module.scss";
import classNames from "classnames";
import { SearchContext } from "context/SearchContext";

type Filter = { id: number; label: string };

export function Filters() {
  const { filters, dispatch } = React.useContext(SearchContext);
  console.log(styles["filters__filter--active"]);
  const handleFilterClick = (filter: Filter) => {
    dispatch({ type: "SET_FILTER", payload: filter });
  };
  return (
    <div className={styles.filters}>
      {filtersList.map((filter: Filter) => {
        return (
          <button
            className={classNames({
              [styles.filters__filter]: true,
              [styles["filters__filter--active"]]: filter.id === filters.id,
            })}
            key={filter.id}
            onClick={() => handleFilterClick(filter)}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
