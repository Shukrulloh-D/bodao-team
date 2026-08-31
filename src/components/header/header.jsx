import { CONTACTS } from "@/data/constants";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип — путь БЕЗ /public/ */}
        <a href="/" className={styles.logo}>
          <img src="/favicon.svg" alt="Bodao Fight Team" />
        </a>

        <div className={styles.addresses}>
          <svg
            className={styles.pinIcon}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle
              cx="12"
              cy="9.5"
              r="2.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <div className={styles.addressList}>
            {CONTACTS.addresses.map((address) => (
              <p key={address}>{address}</p>
            ))}
          </div>
        </div>

        <div className={styles.phoneBlock}>
          <svg
            className={styles.phoneIcon}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <div className={styles.phoneText}>
            <a href={`tel:${CONTACTS.headerPhone.replace(/[^\d+]/g, "")}`}>
              {CONTACTS.headerPhone}
            </a>
            <a
              href={CONTACTS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsapp}
            >
              Написать нам в What's app
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
