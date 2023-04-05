import { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";
function ProductPage({
  currentUser,
  addToCart,
  products,
  quantity,
  setQuantity,
  filteredProducts,
}) {
  return (
    <div className="product-page">
      <h1 className="shop-header">Shop</h1>
      <ProductList
        className="product-list"
        products={filteredProducts}
        addToCart={addToCart}
        currentUser={currentUser}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
}

export default ProductPage;
