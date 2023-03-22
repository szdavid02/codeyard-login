import Eye from "../assets/pictures/fa-eye@2x.png";
import SlashEye from "../assets/pictures/fa-eye-slash@2x.png";
import styles from "../css/PasswordVisibility.module.css";

function PasswordVisibilityButton({ passwordType, handleVisibility }) {
  return (
    <button
      className={styles.visibilityButton}
      type="button"
      onClick={handleVisibility}
    >
      {passwordType === "password" ? (
        <img className={styles.icons} src={Eye} alt="Show password" />
      ) : (
        <img className={styles.icons} src={SlashEye} alt="Hide password" />
      )}
    </button>
  );
}

export default PasswordVisibilityButton;
