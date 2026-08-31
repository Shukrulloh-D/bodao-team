import { COACHES } from "@/data/constants";
import { CoachCard } from "../coach-card/coach-card";
import styles from "./coaches.module.css";

export const Coaches = () => {
  return (
    <section className={styles.section} id="coaches">
      <div className={styles.container}>
        <h2 className={styles.title}>ТРЕНЕРЫ</h2>
        <div className={styles.grid}>
          {COACHES.map((coach) => (
            <CoachCard key={coach.id} coach={coach} />
          ))}
        </div>
      </div>
    </section>
  );
};
