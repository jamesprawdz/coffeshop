import React from "react";
import CartItem from "./CartItem";
import axios from "axios";
import "./cart.css";

function Cart({ setCurrentUser, currentUser, cart, setCart }) {
  const handleCheckout = () => {
    axios
      .post(
        "/checkout",
        {
          user_id: currentUser.id,
          cart_id: currentUser.cart.id,
          destroy_items: true, // added parameter to destroy all cart items
        },
        { withCredentials: true }
      )
      .then((response) => {
        setCart([]);
        setCurrentUser((prevState) => ({
          ...prevState,
          cart: { id: prevState.cart.id, total: 0 },
        }));
        alert("Order was successful!");
      })
      .catch((error) => {
        console.log("Error:", error);
        console.log("Error response:", error.response);
        console.log("Error message:", error.message);
        alert("There was an error with your order. Please try again.");
      });
  };

  const handleSetCart = (newCart) => {
    setCart(newCart);
    const newTotal = newCart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setCurrentUser((prevState) => ({
      ...prevState,
      cart: { ...prevState.cart, total: newTotal },
    }));
  };

  return (
    <div className="master-container">
      <div className="card cart">
        <label className="title">Your cart</label>
        <div className="products">
          {cart && cart.length > 0 ? (
            cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                setCart={setCart}
                setCurrentUser={setCurrentUser}
              />
            ))
          ) : (
            <p>Your cart is currently empty.</p>
          )}
        </div>
      </div>
      <div className="card coupons">
        <label className="title">Apply coupons</label>
        <form className="coupons-form">
          <input
            type="text"
            placeholder="Apply your coupons here"
            className="input_field"
          />
          <button>Apply</button>
        </form>
      </div>
      <div className="card checkout">
        <label className="title">Checkout</label>
        <div className="details">
          <span>Your cart subtotal:</span>
          <span>${currentUser.cart?.total}</span>
          <span>Discount through applied coupons:</span>
          <span>$0.00</span>
          <span>Shipping fees:</span>
          <span>$5.00</span>
        </div>
        <div className="checkout--footer">
          <label className="price">
            <sup>$</sup>
            {parseFloat(currentUser.cart?.total) + 5.0}
          </label>
          {cart.length > 0 && (
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
