import { Navbar } from "components/navbar";
import styles from "./menu.module.scss";
import { Hero } from "components/hero";

export function Menu() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className={styles.foodMenu}>
        <h3 className={styles.foodMenu__title}>Cardápio</h3>
      </section>
    </main>
  );
}

export function Button() {
  return (
    <button className={styles.btn}>
      <span>Button</span>
    </button>
  );
}
