import React, { useState } from "react";
import "../styles/CheckOut.css";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const cart = useSelector((state) => state.cart);
 console.log(cart)
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Order Placed Successfully!");
  };

  return (
    <div className="checkout-container">
      {/* LEFT SIDE: Form */}
      <div className="checkout-left">
        <h2>Checkout</h2>
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group half-width">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group half-width">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="address">Shipping Address</label>
            <textarea
              id="address"
              placeholder="Enter your shipping address"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label>PAYMENT METHOD</label>
            <div className="payment-options">
              <label className="radio-inline">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  checked={paymentMethod === "creditCard"}
                  onChange={handlePaymentChange}
                />
                Credit Card
              </label>

              <label className="radio-inline">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cashOnDelivery"
                  checked={paymentMethod === "cashOnDelivery"}
                  onChange={handlePaymentChange}
                />
                Cash on Delivery
              </label>
            </div>
          </div>
        </form>
      </div>

      {/* RIGHT SIDE: Order Summary */}
      <div className="checkout-summary">
        <h3>Order Summary</h3>

        <div className="checkout-items">
          {cart.products.map((item, index) => (
            <div key={index} className="check-data">
              <img src={item.image} alt={item.title} className="product-img" />
              <div className="item-details">
                <p className="item-title">{item.title}</p>
                <p className="item-price">Rs. {item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="summary-details">
          <p>
            Items Total: <span>{cart.quantity}</span>
          </p>
          <p>
            Shipping Fee: <span>Rs. 0</span>
          </p>
          <p className="total-line">
            <strong>
              Total: <span>Rs. {cart.total}</span>
            </strong>
          </p>
        </div>

        <button
          type="submit"
          className="place-order-btn"
          onClick={handleSubmit}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
