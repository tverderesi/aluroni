import { Navbar } from "components/navbar";
import styles from "./menu.module.scss";
import { Hero } from "components/hero";
import { Filters } from "components/filters";
import Sorter from "components/sorter";
import { Dishes } from "components/dishes";

export function Menu() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className={styles.foodMenu}>
        <h2 className={styles.foodMenu__title}>Menu</h2>
        <div className={styles.foodMenu__filters}>
          <Filters />
        </div>
        <Dishes />
      </section>
    </main>
  );
}
