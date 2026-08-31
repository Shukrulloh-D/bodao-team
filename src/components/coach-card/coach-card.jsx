import styles from "./coach-card.module.css";

export const CoachCard = ({ coach }) => {
  const { photo, nameOutline, nameSolid, description } = coach;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={photo} alt={`${nameOutline} ${nameSolid}`} />
        <h3 className={styles.name}>
          <span className={styles.outline}>{nameOutline}</span>
          <span className={styles.solid}>{nameSolid}</span>
        </h3>
      </div>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};
