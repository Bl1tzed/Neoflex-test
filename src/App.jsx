import styles from "@styles/App.module.scss";
import Header from "@components/Header.jsx";
import ItemSection from "@components/ItemSection.jsx";
import { useState } from "react";
import { headphones } from "@utils/headphones";
import { twsheadphones } from "@utils/twsheadphones";
import Footer from "./components/Footer";

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className={styles.contentWrapper}>
      <Header num={num} />
      <ItemSection
        setNum={setNum}
        sectionName={"Наушники"}
        items={headphones}
      />
      <ItemSection
        setNum={setNum}
        sectionName={"Беспроводные наушники"}
        items={twsheadphones}
      />
      <Footer />
    </div>
  );
}

export default App;
