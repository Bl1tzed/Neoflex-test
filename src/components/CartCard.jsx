import styles from "@styles/CartCard.module.scss";
import { useContext } from "react";
import { ItemsContext } from "@/App";

export default function CartCard({ item }) {
  const [cartItems, setCartItems] = useContext(ItemsContext);
  const itemIndex = cartItems.findIndex((value) => value.id === item.id);

  function increaseQuantityHandler() {
    const newItem = {
      ...cartItems[itemIndex],
      quantity: cartItems[itemIndex].quantity + 1,
    };
    const newCart = cartItems.slice();
    newCart.splice(itemIndex, 1, newItem);
    setCartItems(newCart);
  }

  function decreaseQuantityHandler() {
    const newItem = {
      ...cartItems[itemIndex],
      quantity: cartItems[itemIndex].quantity - 1,
    };

    if (newItem.quantity > 0) {
      const newCart = cartItems.slice();
      newCart.splice(itemIndex, 1, newItem);
      setCartItems(newCart);
    }
  }

  function deleteHandler() {
    const newCart = cartItems.slice();
    newCart.splice(itemIndex, 1);
    setCartItems(newCart);
  }

  return (
    <div className={styles.card}>
      <button className={styles.cardDeleteButton} onClick={deleteHandler}>
        <img src="assets/Delete.svg" alt="Delete item" />
      </button>
      <div className={styles.mainContent}>
        <div className={styles.cardImage}>
          <img className={styles.cardItemImage} src={item.img} alt="Image" />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.oneItemPrice}>
            {item.price.toLocaleString()} ₽
          </div>
        </div>
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.quantityBlock}>
          <button
            className={styles.plusButton}
            onClick={increaseQuantityHandler}
          >
            <img
              className={styles.plus}
              src="assets/Plus.svg"
              alt="Plus Quantity"
            />
          </button>
          <div className={styles.quantity}>{item.quantity}</div>
          <button
            className={styles.minusButton}
            onClick={decreaseQuantityHandler}
          >
            <img
              className={styles.minus}
              src="assets/Minus.svg"
              alt="Minus Quantity"
            />
          </button>
        </div>
        <div className={styles.totalPrice}>
          {(item.quantity * item.price).toLocaleString()} ₽
        </div>
      </div>
    </div>
  );
}
