import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Register from "./components/Register";
import Catalog from "./components/Catalog";
import Detail from "./components/Detail";
import Checkout from "./components/Checkout";
import About from "./components/About";
import Account from "./components/Account";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product" element={<Detail />}>
        </Route>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
