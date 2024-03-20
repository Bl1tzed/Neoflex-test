import { useContext } from "react";
import { ItemsContext } from "@/App";
import styles from "@styles/CartPayment.module.scss";
export default function CartPayment() {
  const [cartItems] = useContext(ItemsContext);
  return (
    <div className={styles.payment}>
      <div className={styles.paymentPriceBlock}>
        <div className={styles.paymentTitle}>ИТОГО</div>
        <div className={styles.paymentPrice}>
          {"₽ " +
            cartItems
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toLocaleString()}
        </div>
      </div>
      <button className={styles.paymentButton}>Перейти к оформлению</button>
    </div>
  );
}
