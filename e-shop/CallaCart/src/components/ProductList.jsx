import React, { useState } from "react";
import { motion } from "framer-motion";

const ProductList = ({ products }) => {
  const [filter, setFilter] = useState("all");
  const [sortOption, setSortOption] = useState("none");

  // Filter products based on category
  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price") return a.price - b.price; // Sort by price (low to high)
    if (sortOption === "name") return a.name.localeCompare(b.name); // Sort alphabetically by name
    return 0; // No sorting
  });

  return (
    <div>
      {/* Filter Dropdown */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="filter">Filter by Category: </label>
        <select id="filter" onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="Fashion">Fashion</option>
        </select>
      </div>

      {/* Sorting Dropdown */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="sort">Sort by: </label>
        <select id="sort" onChange={(e) => setSortOption(e.target.value)}>
          <option value="none">None</option>
          <option value="price">Price (Low to High)</option>
          <option value="name">Name (A to Z)</option>
        </select>
      </div>

      {/* Product List */}
      <div className="product-list">
        {sortedProducts.map((product) => (
          <motion.div
            key={product.id}
            className="product-card"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              border: "1px solid #ddd",
              padding: "1rem",
              borderRadius: "5px",
              marginBottom: "1rem",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ maxWidth: "100%" }}
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              <strong>${product.price.toFixed(2)}</strong>
            </p>
            <button
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              View Details
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
