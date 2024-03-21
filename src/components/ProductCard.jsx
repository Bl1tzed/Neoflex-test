import styles from "@styles/ProductCard.module.scss";
import { useContext } from "react";
import { ItemsContext } from "@/App";
import { motion } from "framer-motion";

export default function ProductCard({ item, index }) {
  const [cartItems, setCartItems] = useContext(ItemsContext);
  const itemIndex = cartItems.findIndex((value) => value.id === item.id);

  function buyHandler() {
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
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.3 + 0.3 * Math.floor(index / 3),
        duration: 0.3,
      }}
      className={styles.card}
    >
      <div className={styles.cardImageWrapper}>
        <img src={item.img} alt="Product Image" className={styles.cardImage} />
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.firstRow}>
          <div className={styles.cardName}>{item.title}</div>
          <div
            className={styles.cardPrice}
            data-oldprice={
              item.oldPrice ? item.oldPrice.toLocaleString() : null
            }
          >
            {item.price.toLocaleString()} ₽
          </div>
        </div>
        <div className={styles.secondRow}>
          <div className={styles.cardRate}>
            <img src="assets/Star.svg" alt="Star" />
            {item.rate}
          </div>
          <button onClick={buyHandler} className={styles.buyButton}>
            Купить
          </button>
        </div>
      </div>
    </motion.div>
  );
}
