import styles from "./Header.module.scss";
import logo from "./Attentify_Logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <div id="logo_wrapper">
          <img src={logo} className="logo" alt="" />
        </div>
        <ul>
          <li>
            <a href="#infosection">Læs mere</a>
          </li>
          <li>
            <a href="#/">Til forældre</a>
          </li>
          <li>
            <a href="#/">Til skoler</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
