import { SCHEDULE, PLACEHOLDER_TEXT } from "@/data/constants";
import { Button } from "../button/button";
import { useModal } from "@/app/providers/modal-context";
import styles from "./schedule.module.css";

export const Schedule = () => {
  const { openModal } = useModal();

  return (
    <section className={styles.section} id="schedule">
      <div className={styles.container}>
        <h2 className={styles.title}>РАСПИСАНИЕ ЗАНЯТИЙ</h2>
        <div className={styles.grid}>
          {SCHEDULE.map((plan) => (
            <div key={plan.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3>{plan.period}</h3>
                <span className={styles.frequency}>{plan.frequency}</span>
              </div>
              <p className={styles.text}>{PLACEHOLDER_TEXT}</p>
              <div className={styles.priceRow}>
                <span className={styles.price}>
                  {plan.price.toLocaleString("ru-RU")} ₽
                </span>
                <span className={styles.oldPrice}>
                  {plan.oldPrice.toLocaleString("ru-RU")} ₽
                </span>
              </div>
              <Button className={styles.cardButton} onClick={openModal}>
                ЗАПИСАТЬСЯ
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
