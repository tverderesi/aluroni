import styles from "./Hero.module.scss";
import { ReactComponent as Pasta } from "assets/menu/pasta.svg";

export function Hero() {
  return (
    <header className={styles.header}>
      <Pasta className={styles.pasta} />
      <div className={styles.flexCol}>
        <h1 className={styles.header__text}>Aluroni</h1>
        <h2 className={styles.header__text__lighter}>Pasta and Code</h2>
      </div>
    </header>
  );
}
