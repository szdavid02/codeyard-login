import React, { useState } from "react";
import axios from "axios";
import PasswordChecker from "./PasswordChecker";
import PasswordVisibilityButton from "./PasswordVisibility";
import styles from "../css/LoginForm.module.css";
import Logo from "../assets/pictures/acme@2x.png";
import Background from "../assets/pictures/beach.jpg";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://us-central1-ria-server-b1103.cloudfunctions.net/authenticate",
        { email: email, password: password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleVisibility = () => {
    setPasswordType((prevPasswordType) =>
      prevPasswordType === "password" ? "text" : "password"
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.overlay}>
          <div className={styles.insideOverlay}>
            <h1>Welcome to Acme.</h1>
            <h6>Create your account by filling the form below.</h6>
            <form onSubmit={handleSubmit}>
              <div>
                <label id="email" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div>
                <label>Password</label>

                <input
                  id="password"
                  type={passwordType}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className={styles.visibilitySign}>
                  <PasswordVisibilityButton
                    passwordType={passwordType}
                    handleVisibility={handleVisibility}
                  />
                </div>
                <div className={styles.passwordSign}>
                  <PasswordChecker password={password} />
                </div>
              </div>
              <button className={styles.signUp} type="submit">
                Sign up
              </button>
            </form>
            <div className={styles.rememberMe}>
              <input
                className={styles.checkBox}
                type="checkbox"
                id="remember-me"
                name="remember-me"
              />
              <label htmlFor="remember-me">Remember me.</label>
            </div>
          </div>
          <p>ⓒ 2015 Acme, Inc. Terms Privacy •••</p>
        </div>
      </div>
      <div className={styles.right}>
        <img className={styles.background} src={Background} alt="Beach" />
        <div className={styles.rightContainer}>
          <div className={styles.logo}>
            {" "}
            <img src={Logo} alt="Logo" />
          </div>
          <div>
            <h2>Do you already have an account?</h2>
          </div>
          <div>
            <h4>
              That's awesome! You can log in by clicking on the button below. To
              skip this next time, you can ask us remember your login
              credentials.
            </h4>
          </div>
          <button
            onClick={handleSubmit}
            className={styles.loginButton}
            type="submit"
          >
            Log in
          </button>
        </div>
      </div>
      ;
    </div>
  );
}
export default LoginForm;
