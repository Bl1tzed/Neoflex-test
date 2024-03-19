import styles from "@styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>QPICK</div>
      <div className={styles.icons}>
        <img src="src/assets/Like.svg" alt="Favorite" />
        <img src="src/assets/Cart.svg" alt="Cart" />
      </div>
    </header>
  );
}
