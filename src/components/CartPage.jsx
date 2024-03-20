import { useContext } from "react";
import { ItemsContext } from "@/App";
import CartCard from "@components/CartCard";
import CartPayment from "@components/CartPayment";
import styles from "@styles/CartPage.module.scss";

export default function CartPage() {
  const [cartItems] = useContext(ItemsContext);
  return (
    <div className={styles.cart}>
      <div className={styles.cartName}>Корзина</div>
      <div className={styles.cartInterface}>
        <div className={styles.cartCards}>
          {cartItems.length ? (
            cartItems.map((item, index) => {
              return <CartCard key={item.title + index} item={item} />;
            })
          ) : (
            <div className={styles.emptyCart}>Ваша корзина пуста</div>
          )}
        </div>
        {!!cartItems.length && <CartPayment />}
      </div>
    </div>
  );
}
