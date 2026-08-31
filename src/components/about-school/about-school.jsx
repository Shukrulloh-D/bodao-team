import { ABOUT_SCHOOL } from "@/data/constants";
import { Button } from "../button/button";
import { useModal } from "@/app/providers/modal-context";
import styles from "./about-school.module.css";

export const AboutSchool = () => {
  const { openModal } = useModal();

  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.mainImage}>
            <img src={ABOUT_SCHOOL.mainImage} alt="О школе" />
          </div>
          <div className={styles.circleRow}>
            <div className={styles.circleImage}>
              <img src={ABOUT_SCHOOL.circleImage} alt="Тренировка" />
            </div>
            <span className={styles.connector} />
            <Button onClick={openModal}>ЗАПИСАТЬСЯ</Button>
          </div>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{ABOUT_SCHOOL.title}</h2>
          <p className={styles.text}>{ABOUT_SCHOOL.text}</p>
        </div>
      </div>
    </section>
  );
};
