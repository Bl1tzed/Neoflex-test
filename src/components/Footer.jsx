import styles from "@styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>QPICK</div>
      <div className={styles.links}>
        <div className={styles.link}>Избранное</div>
        <div className={styles.link}>Корзина</div>
        <div className={styles.link}>Контакты</div>
      </div>
      <div className={styles.secondary}>
        <div className={styles.service}>Условия сервиса</div>
        <div className={styles.language}>
          <img src="src/assets/Circle.svg" alt="Language" />
          <div className={styles.kaz}>Каз</div>
          <div className={styles.rus}>Рус</div>
          <div className={styles.eng}>Eng</div>
        </div>
      </div>
      <div className={styles.socials}>
        <div className={styles.socialLink}>
          <a href="http://vk.com">
            <img src="src/assets/VK.svg" alt="VK" />
          </a>
        </div>
        <div className={styles.socialLink}>
          <a href="https://web.telegram.org/a/">
            <img src="src/assets/Telegram.svg" alt="Telegram" />
          </a>
        </div>
        <div className={styles.socialLink}>
          <a href="https://web.whatsapp.com/">
            <img src="src/assets/Whatsapp.svg" alt="Whatsapp" />
          </a>
        </div>
      </div>
    </footer>
  );
}
