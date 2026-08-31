import styles from "./button.module.css";

export const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      <span className={styles.arrow}>→</span>
      {children}
    </button>
  );
};
