import styles from "@styles/ProductCard.module.scss";
import { useContext } from "react";
import { ItemsContext } from "@/App";

export default function ProductCard({ item }) {
  const [cartItems, setCartItems] = useContext(ItemsContext);

  function buyHandler(item) {
    const itemIndex = cartItems.findIndex((value) => value.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setCartItems([...cartItems, newItem]);
    } else {
      const newItem = {
        ...cartItems[itemIndex],
        quantity: cartItems[itemIndex].quantity + 1,
      };
      const newCart = cartItems.slice();
      newCart.splice(itemIndex, 1, newItem);
      setCartItems(newCart);
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <img src={item.img} alt="Product Image" className={styles.cardImage} />
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.firstRow}>
          <div className={styles.cardName}>{item.title}</div>
          <div
            className={styles.cardPrice}
            data-oldprice={item.oldPrice ? item.oldPrice : null}
          >
            {item.price} ₽
          </div>
        </div>
        <div className={styles.secondRow}>
          <div className={styles.cardRate}>
            <img src="src/assets/Star.svg" alt="Star" />
            {item.rate}
          </div>
          <button onClick={() => buyHandler(item)} className={styles.buyButton}>
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}
