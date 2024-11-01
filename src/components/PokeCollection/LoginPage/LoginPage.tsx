import styles from "./LoginPage.module.css";
import { UserContext } from "../UserProvider/UserProvider";
import * as React from "react";

function LoginPage() {
  const userContext = React.useContext(UserContext)!;

  if (!userContext) {
    throw new Error("LoginPage must be used within a UserProvider");
  }

  const [usernameInput, setUsernameInput] = React.useState<string>("");

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!usernameInput.trim()) {
      alert("Username cannot be empty");
      return;
    }

    userContext.setUsername(usernameInput);
  }

  return (
    <>
      <div className={styles.loginPage}>
        <div className={styles.container}>
          <img
            className={styles.image}
            alt="PokeAPI Logo"
            src="public/pokeapi.png"
          ></img>
          <form className={styles.loginForm} onSubmit={handleLogin}>
            <input
              type="text"
              value={usernameInput}
              className={styles.username}
              onChange={(e) => setUsernameInput(e.target.value)}
            ></input>
            <button className={styles.loginButton}>Enter</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
