import styles from "./Navbar.module.scss";

import { Search } from "components/search";

export function Navbar() {
  return (
    <nav className={styles.menu}>
      <Search />
    </nav>
  );
}
