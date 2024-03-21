import styles from "@styles/Footer.module.scss";
import { clsx } from "clsx";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/" className={styles.logo}>
        QPICK
      </Link>
      <div className={styles.links}>
        <Link to="/favorite" className={styles.link}>
          Избранное
        </Link>
        <Link to="/cart" className={styles.link}>
          Корзина
        </Link>
        <Link to="/contacts" className={styles.link}>
          Контакты
        </Link>
      </div>
      <div className={styles.secondary}>
        <Link to="/service" className={styles.service}>
          Условия сервиса
        </Link>
        <div className={styles.languages}>
          <img src="assets/Circle.svg" alt="Language" />
          <div className={clsx(styles.language, styles.kaz)}>Каз</div>
          <div className={clsx(styles.language, styles.rus)}>Рус</div>
          <div className={clsx(styles.language, styles.eng)}>Eng</div>
        </div>
      </div>
      <div className={styles.socials}>
        <div className={styles.socialLink}>
          <a href="http://vk.com">
            <img src="assets/VK.svg" alt="VK" />
          </a>
        </div>
        <div className={styles.socialLink}>
          <a href="https://web.telegram.org/a/">
            <img src="assets/Telegram.svg" alt="Telegram" />
          </a>
        </div>
        <div className={styles.socialLink}>
          <a href="https://web.whatsapp.com/">
            <img src="assets/Whatsapp.svg" alt="Whatsapp" />
          </a>
        </div>
      </div>
    </footer>
  );
}
