import { Routes, Route } from "react-router-dom";

import styles from "@styles/App.module.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ShopPage from "@components/ShopPage";
import CartPage from "@components/CartPage";

import { useState, createContext } from "react";

export const ItemsContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  return (
    <ItemsContext.Provider value={[cartItems, setCartItems]}>
      <div className={styles.contentWrapper}>
        <Header cartItems={cartItems} />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ItemsContext.Provider>
  );
}

export default App;
