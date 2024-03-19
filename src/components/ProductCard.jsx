/* eslint-disable react/prop-types */
import styles from "@styles/ProductCard.module.scss";

export default function ProductCard({
  productImageLink,
  productName,
  productPrice,
  productRate,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <img
          src={productImageLink}
          alt="Product Image"
          className={styles.cardImage}
        />
      </div>

      <div className={styles.cardInfo}>
        <div className={styles.firstRow}>
          <div className={styles.cardName}>{productName}</div>
          <div className={styles.cardPrice}>{productPrice} ₽</div>
        </div>
        <div className={styles.secondRow}>
          <div className={styles.cardRate}>
            <img src="src/assets/Star.svg" alt="Star" />
            {productRate}
          </div>
          <button className={styles.buyButton}>Купить</button>
        </div>
      </div>
    </div>
  );
}
