import { CONTACTS, FOOTER_LINKS, PLACEHOLDER_TEXT } from "@/data/constants";
import styles from "./footer.module.css";

const SOCIAL_ICONS = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.8A11.7 11.7 0 0 1 3.4 4.6a4.2 4.2 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4a4 4 0 0 1-1.9.1 4.1 4.1 0 0 0 3.9 2.9A8.3 8.3 0 0 1 2 18.4a11.7 11.7 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.9 8.4H3.6V20h3.3V8.4ZM5.3 3.4a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM20.4 20h-3.3v-6.1c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V20H9.3V8.4h3.2v1.6h.1c.4-.8 1.6-1.7 3.2-1.7 3.4 0 4.1 2.3 4.1 5.2V20Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-2.7 0-3.1 0-4.1.1-1.1 0-1.8.2-2.4.5a4.9 4.9 0 0 0-1.8 1.1A4.9 4.9 0 0 0 2.6 5.5c-.3.6-.5 1.3-.5 2.4C2 8.9 2 9.3 2 12s0 3.1.1 4.1c0 1.1.2 1.8.5 2.4a4.9 4.9 0 0 0 1.1 1.8 4.9 4.9 0 0 0 1.8 1.1c.6.3 1.3.5 2.4.5C9 22 9.3 22 12 22s3.1 0 4.1-.1c1.1 0 1.8-.2 2.4-.5a4.9 4.9 0 0 0 1.8-1.1 4.9 4.9 0 0 0 1.1-1.8c.3-.6.5-1.3.5-2.4.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c0-1.1-.2-1.8-.5-2.4a4.9 4.9 0 0 0-1.1-1.8 4.9 4.9 0 0 0-1.8-1.1c-.6-.3-1.3-.5-2.4-.5C15.1 2 14.7 2 12 2Zm0 1.8c2.6 0 3 0 4 .1.9 0 1.5.2 1.8.3.5.2.8.4 1.1.7.3.3.5.6.7 1.1.1.3.3.9.3 1.8.1 1 .1 1.4.1 4s0 3-.1 4c0 .9-.2 1.5-.3 1.8-.2.5-.4.8-.7 1.1-.3.3-.6.5-1.1.7-.3.1-.9.3-1.8.3-1 .1-1.4.1-4 .1s-3 0-4-.1c-.9 0-1.5-.2-1.8-.3-.5-.2-.8-.4-1.1-.7a2.9 2.9 0 0 1-.7-1.1c-.1-.3-.3-.9-.3-1.8-.1-1-.1-1.4-.1-4s0-3 .1-4c0-.9.2-1.5.3-1.8.2-.5.4-.8.7-1.1.3-.3.6-.5 1.1-.7.3-.1.9-.3 1.8-.3 1-.1 1.4-.1 4-.1Zm0 3a5.2 5.2 0 1 0 0 10.4 5.2 5.2 0 0 0 0-10.4Zm0 8.6a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8Zm5.4-8.8a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
    </svg>
  ),
};

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.about}>
          <img
            src="/public/logo.svg"
            alt="Bodao Fight Team"
            className={styles.logo}
          />
          <p className={styles.text}>{PLACEHOLDER_TEXT}</p>
          <div className={styles.socials}>
            {Object.entries(CONTACTS.socials).map(([name, href]) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                className={styles.socialIcon}
              >
                {SOCIAL_ICONS[name]}
              </a>
            ))}
          </div>
          <a href="#" className={styles.policyLink}>
            Политика конфиденциальности
          </a>
        </div>

        <nav className={styles.nav}>
          <h3>Разделы сайта</h3>
          <ul>
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contacts}>
          <h3>Контакты</h3>

          <p className={styles.label}>Номер телефона; What's App</p>
          <p className={styles.value}>
            <a href={`tel:${CONTACTS.phone.replace(/[^\d+]/g, "")}`}>
              {CONTACTS.phone}
            </a>
          </p>

          <p className={styles.label}>Эл.почта</p>
          <p className={styles.value}>
            <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
          </p>

          <p className={styles.label}>Адреса залов</p>
          {CONTACTS.addresses.map((address) => (
            <p key={address} className={styles.value}>
              {address}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};
