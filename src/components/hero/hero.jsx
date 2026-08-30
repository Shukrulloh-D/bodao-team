import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>Франсимара Бодао Барросо</h1>
        <p>У Бодао более 50 проф поединков за плечами...</p>
        <button className={styles.cta}>ЗАПИСАТЬСЯ</button>
      </div>
    </section>
  );
};
