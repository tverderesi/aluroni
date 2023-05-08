import foodMenu from "./itens.json";

import styles from "./Dishes.module.scss";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "context/AppContext";
import { Dish } from "./dish";

export function Dishes() {
  const [list, setList] = useState(foodMenu);
  const { search, filters, sort } = useContext(AppContext);

  function testSearch(title: string) {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filters.id !== null) return filters.id === id;
    return true;
  }

  function sortDishes(newList: typeof foodMenu) {
    switch (sort) {
      case "servings":
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "people_served":
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case "price":
        return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = foodMenu.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id)
    );
    setList(sortDishes(newList));
  }, [search, filters, sort]);

  return (
    <div className={styles.dishes}>
      {list.map((item) => (
        <Dish key={item.id} {...item} />
      ))}
    </div>
  );
}
