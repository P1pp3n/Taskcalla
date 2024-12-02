import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import products from "../products.json";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<ProductList products={products} />} />
      <Route
        path="/product/:id"
        element={<ProductDetails products={products} />}
      />
    </Routes>
  </Router>
);

export default App;
