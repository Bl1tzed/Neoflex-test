import styles from "@styles/CartCard.module.scss";
import { useContext } from "react";
import { ItemsContext } from "@/App";

export default function CartCard({ item }) {
  const [cartItems, setCartItems] = useContext(ItemsContext);
  const itemIndex = cartItems.findIndex((value) => value.id === item.id);

  function plusQuantityHandler() {
    const newItem = {
      ...cartItems[itemIndex],
      quantity: cartItems[itemIndex].quantity + 1,
    };
    const newCart = cartItems.slice();
    newCart.splice(itemIndex, 1, newItem);
    setCartItems(newCart);
  }

  function minusQuantityHandler() {
    const newItem = {
      ...cartItems[itemIndex],
      quantity: cartItems[itemIndex].quantity - 1,
    };
    const newCart = cartItems.slice();
    newItem.quantity < 1
      ? newCart.splice(itemIndex, 1)
      : newCart.splice(itemIndex, 1, newItem);
    setCartItems(newCart);
  }

  function deleteHandler() {
    const newCart = cartItems.slice();
    newCart.splice(itemIndex, 1);
    setCartItems(newCart);
  }

  return (
    <div className={styles.card}>
      <button className={styles.cardDeleteButton} onClick={deleteHandler}>
        <img src="src/assets/Delete.svg" alt="Delete item" />
      </button>
      <div className={styles.mainContent}>
        <div className={styles.cardImage}>
          <img className={styles.cardItemImage} src={item.img} alt="Image" />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.oneItemPrice}>{item.price} ₽</div>
        </div>
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.quantityBlock}>
          <button className={styles.plusButton} onClick={plusQuantityHandler}>
            <img
              className={styles.plus}
              src="src/assets/Plus.svg"
              alt="Plus Quantity"
            />
          </button>
          <div className={styles.quantity}>{item.quantity}</div>
          <button className={styles.minusButton} onClick={minusQuantityHandler}>
            <img
              className={styles.minus}
              src="src/assets/Minus.svg"
              alt="Minus Quantity"
            />
          </button>
        </div>
        <div className={styles.totalPrice}>
          {Number(item.quantity) * Number(item.price)} ₽
        </div>
      </div>
    </div>
  );
}
