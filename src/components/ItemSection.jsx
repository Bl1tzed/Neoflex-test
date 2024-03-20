import styles from "@styles/ItemSection.module.scss";
import ProductCard from "@components/ProductCard";

export default function ItemSection({ setNum, sectionName, items }) {
  return (
    <section>
      <h3 className={styles.sectionName}>{sectionName}</h3>
      <div className={styles.cards}>
        {items.map((item, index) => {
          return (
            <ProductCard
              key={item.title + index}
              productImageLink={item.img}
              productName={item.title}
              productPrice={item.price}
              productRate={item.rate}
              setNum={setNum}
              oldProductPrice={item.oldPrice ? item.oldPrice : null}
            />
          );
        })}
      </div>
    </section>
  );
}
