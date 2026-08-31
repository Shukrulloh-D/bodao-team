import { DIRECTIONS } from "@/data/constants";
import styles from "./directions.module.css";

export const Directions = () => {
  return (
    <section className={styles.section} id="directions">
      <div className={styles.container}>
        <h2 className={styles.title}>НАПРАВЛЕНИЯ</h2>
      </div>
      <div className={styles.grid}>
        {DIRECTIONS.map((item) => (
          <div key={item.id} className={styles.item}>
            <img src={item.image} alt={item.title} />
            <span className={styles.label}>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
