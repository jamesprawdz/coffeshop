import React, { useState } from "react";
import axios from "axios";
import "./cart.css";

function CartItem({ item, setCart, setCurrentUser }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleRemoveItem = async () => {
    try {
      await axios.delete(`/cart_items/${item.id}`);
      // Fetch cart items again to update state
      fetchCartItems();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateQuantity = async (newQuantity) => {
    try {
      await axios.patch(`/cart_items/${item.id}`, {
        quantity: newQuantity,
      });
      setQuantity(newQuantity);
      // Fetch cart items again to update state
      fetchCartItems();
      setCurrentUser((prevState) => ({
        ...prevState,
        cart: {
          ...prevState.cart,
          total:
            prevState.cart.total +
            item.product.price * (newQuantity - quantity),
        },
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCartItems = async () => {
    axios
      .get("/cart_items", { withCredentials: true })
      .then((response) => {
        setCart(response.data);
        updateTotal(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateTotal = (cartItems) => {
    const newTotal = cartItems.reduce(
      (accumulator, currentItem) =>
        accumulator + currentItem.quantity * currentItem.product.price,
      0
    );
    setCurrentUser((prevState) => ({
      ...prevState,
      cart: { id: prevState.cart.id, total: newTotal },
    }));
  };

  return (
    <div className="product">
      {/* Product image */}
      {item.product.image && (
        <img src={item.product.image} alt={item.product.name} />
      )}

      <div>
        <span>{item.product.name}</span>
        <label className="price small">${item.product.price * quantity}</label>
      </div>
      <div className="quantity">
        <button onClick={() => handleUpdateQuantity(quantity - 1)}>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="14"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              stroke="#47484b"
              d="M20 12L4 12"
            ></path>
          </svg>
        </button>
        <label>{quantity}</label>
        <button onClick={() => handleUpdateQuantity(quantity + 1)}>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="14"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              stroke="#47484b"
              d="M12 4V20M20 12H4"
            ></path>
          </svg>
        </button>
      </div>
      <button className="remove-from-cart-btn" onClick={handleRemoveItem}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
