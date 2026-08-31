import { INSTAGRAM_IMAGES } from "@/data/constants";
import styles from "./instagram.module.css";

export const Instagram = () => {
  return (
    <section className={styles.section} id="instagram">
      <div className={styles.container}>
        <h2 className={styles.title}>БЛОК ИНСТАГРАММА</h2>
        <div className={styles.grid}>
          {INSTAGRAM_IMAGES.map((src, index) => (
            <a
              key={src}
              href="#"
              className={styles.item}
              aria-label="Открыть в Instagram"
            >
              <img src={src} alt={`Instagram ${index + 1}`} />
              <span className={styles.overlay}>
                <svg viewBox="0 0 24 24" fill="none" className={styles.icon}>
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4.2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
