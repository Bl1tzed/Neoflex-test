import { ItemsContext } from "@/App";
import styles from "@styles/Header.module.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function Header() {
  const [cartItems] = useContext(ItemsContext);
  const productsQuant = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">QPICK</Link>
      </div>
      <div className={styles.icons}>
        <div className={styles.favoriteBox}>
          <Link to="/favorite">
            <img
              className={styles.favoriteImage}
              src="assets/Like.svg"
              alt="Favorite"
            />
            <div className={styles.showNum}></div>
          </Link>
        </div>
        <div className={styles.cartBox}>
          <Link to="/cart">
            <img
              className={styles.cartImage}
              src="assets/Cart.svg"
              alt="Cart"
            />
            <div
              className={styles.showNum}
              data-num={cartItems.length ? cartItems.length : null}
            >
              {productsQuant < 100 ? productsQuant : ":D"}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
