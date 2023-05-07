import styles from "./Hero.module.scss";
import { ReactComponent as Pasta } from "assets/menu/pasta.svg";

export function Hero() {
  return (
    <header className={styles.header}>
      <Pasta className={styles.pasta} />
      <h1 className={styles.header__text}>
        Aluroni {""}
        <span className={styles.header__text__lighter}>Pasta and Code</span>
      </h1>
    </header>
  );
}
