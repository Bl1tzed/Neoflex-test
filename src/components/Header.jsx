import { ItemsContext } from "@/App";
import styles from "@styles/Header.module.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [cartItems] = useContext(ItemsContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">QPICK</Link>
      </div>
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
          <Link to="/cart">
            <img
              className={styles.cartImage}
              src="src/assets/Cart.svg"
              alt="Cart"
            />
            <div
              className={styles.showNum}
              data-num={cartItems.length ? cartItems.length : null}
            >
              {cartItems.length}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
