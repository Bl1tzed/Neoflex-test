import { headphones } from "@constants/headphones";
import { twsheadphones } from "@constants/twsheadphones";
import ItemSection from "@components/ItemSection.jsx";

export default function ShopPage() {
  return (
    <>
      <ItemSection sectionName={"Наушники"} items={headphones} />
      <ItemSection
        sectionName={"Беспроводные наушники"}
        items={twsheadphones}
      />
    </>
  );
}
