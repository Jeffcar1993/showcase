import styles from "./Header.module.css";
import { View } from "../App";

type HeaderProps = {
  projectName: View;
  setView: (view: View) => void;
}

function Header(props: HeaderProps) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <button className={styles.title} onClick={() => props.setView("Portfolio")}>
            React Showcase
          </button>
          {props.projectName != "Portfolio" && (
            <h2 className={styles.projectName}>{props.projectName}</h2>
          )}
          <div className={styles.language}>
            <button >
              <img src="public/eu.jpeg"></img>
            </button>
            <button className={styles.active}>
              <img src="public/esp.png"></img>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
