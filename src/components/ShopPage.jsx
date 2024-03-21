import ItemSection from "@components/ItemSection.jsx";
import { products } from "@constants/products";

export default function ShopPage() {
  return (
    <>
      {products.map((section) => {
        return (
          <ItemSection
            key={section.name}
            sectionName={section.name}
            items={section.items}
          />
        );
      })}
    </>
  );
}
