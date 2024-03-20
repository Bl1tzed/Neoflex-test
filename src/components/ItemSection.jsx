import styles from "@styles/ItemSection.module.scss";
import ProductCard from "@components/ProductCard";

export default function ItemSection({ sectionName, items }) {
  return (
    <section>
      <h3 className={styles.sectionName}>{sectionName}</h3>
      <div className={styles.cards}>
        {items.map((item, index) => {
          return (
            <ProductCard
              key={item.title + index}
              id={(item.title + index).replace(/\s+/g, "")}
              item={item}
            />
          );
        })}
      </div>
    </section>
  );
}
