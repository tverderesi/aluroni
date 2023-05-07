import { Navbar } from "components/navbar";
import styles from "./menu.module.scss";
import { Hero } from "components/hero";
import { Filters } from "components/filters";

export function Menu() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className={styles.foodMenu}>
        <h2 className={styles.foodMenu__title}>Menu</h2>
        <div className={styles.foodMenu__filter}>
          <Filters />
        </div>
      </section>
    </main>
  );
}
