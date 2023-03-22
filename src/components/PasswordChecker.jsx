import React from "react";
import styles from "../css/PasswordChecker.module.css";

function PasswordChecker(props) {
  const password = props.password;
  function getStrengthColor() {
    const hasLength = password.length >= 5;
    const hasUpperCase = /[A-Z]/.test(password) && hasLength;
    const hasSpecialChar =
      /[!@#$%^&*(),.?":{}|<>]/.test(password) && hasLength && hasUpperCase;
    const hasAllCriteria = hasLength && hasUpperCase && hasSpecialChar;

    const colors = [
      hasLength ? "red" : "gray",
      hasUpperCase ? "orange" : "gray",
      hasAllCriteria ? "yellowgreen" : "gray",
      hasAllCriteria ? "green" : "gray",
    ];

    return colors;
  }

  return (
    <div className={styles.icon}>
      {["•", "•", "•", "•"].map((letter, index) => (
        <span key={index} style={{ color: getStrengthColor()[index] }}>
          {letter}
        </span>
      ))}
    </div>
  );
}

export default PasswordChecker;
