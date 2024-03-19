import styles from "@styles/App.module.scss";
import Header from "@components/Header.jsx";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className={styles.contentWrapper}>
      <Header />
      <div className={styles.cards}>
        {headphones.map((item, index) => {
          return (
            <ProductCard
              key={item.title + index}
              productImageLink={item.img}
              productName={item.title}
              productPrice={item.price}
              productRate={item.rate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

const headphones = [
  {
    img: "src/assets/Item1.png",
    title: "Apple BYZ S852I",
    price: "2927",
    rate: 4.7,
  },
  {
    img: "src/assets/Item2.png",
    title: "Apple EarPods",
    price: "2327",
    rate: 4.5,
  },
  {
    img: "src/assets/Item3.png",
    title: "Apple EarPods",
    price: "2327",
    rate: 4.5,
  },
];
