import { useState } from "react";
import { useModal } from "@/app/providers/modal-context";
import styles from "./modal.module.css";

export const Modal = () => {
  const { isOpen, closeModal } = useModal();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !agreed) {
      alert("Заполните все поля и примите согласие");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setTimeout(() => {
        setSent(false);
        closeModal();
        setName("");
        setPhone("");
        setAgreed(false);
      }, 2000);
    }, 1000);
  };

  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={closeModal}>
          ×
        </button>
        <h2 className={styles.title}>Записаться на тренировку</h2>

        {sent ? (
          <div className={styles.success}>
            ✅ Спасибо! Мы свяжемся с вами в ближайшее время.
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label>Ваше имя</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Иван Иванов"
                required
              />
            </div>

            <div className={styles.field}>
              <label>Ваш телефон</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (999) 123-45-67"
                required
              />
            </div>

            <div className={styles.agreement}>
              <input
                type="checkbox"
                id="agree"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                required
              />
              <label htmlFor="agree">
                Нажимая на кнопку, я соглашаюсь с{" "}
                <a href="#">политикой конфиденциальности</a>
              </label>
            </div>

            <button type="submit" className={styles.submit} disabled={loading}>
              {loading ? "Отправка..." : "ОТПРАВИТЬ"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
