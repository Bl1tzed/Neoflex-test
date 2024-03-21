import { Routes, Route } from "react-router-dom";

import styles from "@styles/App.module.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ShopPage from "@components/ShopPage";
import CartPage from "@components/CartPage";

import { useState, createContext } from "react";
import NotFoundPage from "./components/NotFoundPage";
export const ItemsContext = createContext([]);

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <ItemsContext.Provider value={[cartItems, setCartItems]}>
      <div className={styles.contentWrapper}>
        <Header />
        <main className={styles.content}>
          <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ItemsContext.Provider>
  );
}

export default App;
