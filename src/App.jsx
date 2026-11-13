import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getProductPrice } from "./utils/formatCurrency";

import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Products from "./components/products";
import MyCart from "./components/Cart";
import Contact from "./components/Contact";
import Smartphones from "./components/SmartPhones";
import SmartWatches from "./components/SmartWatches";
import Accessories from "./components/Accessories";
import Airpods from "./components/Airpods";
import MyAccount from "./components/MyAccount";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const addToCart = (product, quantity, category) => {
    const productId = product.id ?? `${category}-${product.name}`;
    const pricedProduct = { ...product, price: getProductPrice(product) };

    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === productId);

      if (existingItem) {
        return items.map((item) =>
          item.id === productId
            ? {
                ...item,
                price: getProductPrice(item) ?? pricedProduct.price,
                quantity: item.quantity + quantity,
              }
            : item,
        );
      }

      return [...items, { ...pricedProduct, id: productId, category, quantity }];
    });
  };

  const updateCartQuantity = (productId, quantity) => {
    setCartItems((items) =>
      items
        .map((item) => item.id === productId ? { ...item, quantity } : item)
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((items) => items.filter((item) => item.id !== productId));
  };

  return (
    <BrowserRouter>
      <div className="min-h-dvh">
        <Sidebar currentUser={currentUser} onLogout={() => setCurrentUser(null)} />
        <div className="flex min-h-dvh min-w-0 flex-col lg:pl-72">
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
            <Routes>
              <Route path="/" element={<Login onLogin={setCurrentUser} />} />
              <Route path="/login" element={<Login onLogin={setCurrentUser} />} />
              <Route path="/home" element={<Home />} />
              <Route path="/account" element={<MyAccount user={currentUser} />} />
              <Route path="/signup" element={<Signup onSignup={setCurrentUser} />} />
              <Route path="/products" element={<Products addToCart={addToCart} />} />
              <Route path="/products/smartphones" element={<Smartphones addToCart={addToCart} />} />
              <Route path="/products/smartwatches" element={<SmartWatches addToCart={addToCart} />} />
              <Route path="/products/accessories" element={<Accessories addToCart={addToCart} />} />
              <Route path="/products/airpods" element={<Airpods addToCart={addToCart} />} />
              <Route
                path="/cart"
                element={
                  <MyCart
                    items={cartItems}
                    onQuantityChange={updateCartQuantity}
                    onRemove={removeFromCart}
                  />
                }
              />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <footer className="mt-auto flex flex-col gap-2 border-t border-zinc-200 px-4 py-6 text-xs leading-5 text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
            <span>© {new Date().getFullYear()} Bitar Mobile</span>
            <span>Lebanon · Built for better connections</span>
          </footer>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={6500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
