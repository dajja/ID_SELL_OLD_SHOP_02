import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Register from "./components/Register";
import Catalog from "./components/Catalog";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/1" element={<Catalog />} />
        <Route path="/product" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
