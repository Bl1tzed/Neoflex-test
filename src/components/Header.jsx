import styles from "@styles/Header.module.scss";

export default function Header({ num }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>QPICK</div>
      <div className={styles.icons}>
        <div className={styles.favoriteBox}>
          <img
            className={styles.favoriteImage}
            src="src/assets/Like.svg"
            alt="Favorite"
          />
          <div className={styles.showNum}></div>
        </div>
        <div className={styles.cartBox}>
          <img
            className={styles.cartImage}
            src="src/assets/Cart.svg"
            alt="Cart"
          />
          <div className={styles.showNum} data-num={num ? num : null}>
            {num}
          </div>
        </div>
      </div>
    </header>
  );
}
