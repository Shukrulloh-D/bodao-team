import { HERO } from "@/data/constants";
import { useModal } from "@/app/providers/modal-context";
import styles from "./hero.module.css";

export const Hero = () => {
  const { openModal } = useModal();

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>{HERO.eyebrow}</p>
        <div className={styles.imageWrap}>
          <img src={HERO.image} alt={HERO.title} className={styles.image} />
        </div>
        <h1 className={styles.title}>
          {HERO.title.split(" ").map((word) => (
            <span key={word}>{word}</span>
          ))}
        </h1>
        <div className={styles.bottomRow}>
          <p className={styles.text}>{HERO.text}</p>
          <button className={styles.cta} onClick={openModal}>
            <span className={styles.arrow}>→</span> ЗАПИСАТЬСЯ
          </button>
        </div>
      </div>
    </section>
  );
};
