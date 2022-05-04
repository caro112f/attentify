import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <a href="#/">Attentify</a>
        <ul>
          <li>
            <a href="#infosection">Læs mere</a>
          </li>
          <li>
            <a href="#/">Til privat</a>
          </li>
          <li>
            <a href="#/">Til skoler</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
