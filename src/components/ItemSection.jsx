import styles from "@styles/ItemSection.module.scss";
import ProductCard from "@components/ProductCard";
import { motion } from "framer-motion";
export default function ItemSection({ sectionName, items }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className={styles.sectionName}>{sectionName}</h3>
      <div className={styles.cards}>
        {items.map((item, index) => {
          return (
            <ProductCard key={item.title + index} index={index} item={item} />
          );
        })}
      </div>
    </motion.section>
  );
}
