import styles from "./Navbar.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import { Search } from "components/search";

export function Navbar() {
  return (
    <nav className={styles.menu}>
      <Logo />
      <Search />
    </nav>
  );
}
