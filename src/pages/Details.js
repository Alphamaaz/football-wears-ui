import React, { useEffect, useState } from "react";
import "../styles/Details.css";
import Products from "../components/Products"
import Quantity from "../components/Quantity";
import Button from "../components/Button";
import {  useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { productDetails } from "../components/data";

const Details = () => {
  const [activeSize, setActiveSize] = useState('SMALL');
  const [activeSleeve, setActiveSleeve] = useState("HALF SLEEVE");
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigate()
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = productDetails[parseInt(id)];


  if (!product) {
    return <p>Loading product details...</p>;
  }
// this functions are handling the size and sleeve slected

  const handleSizeButtonClick = (size) => {
    setActiveSize(size); // Set the active button's size
  };
  const handleSleeveButtonClick = (sleeve) => {
    setActiveSleeve(sleeve); // Set the active button's size
  };

// this function is getting the total quantity of the item 

   const handleQuantityChange = (newQuantity) => {
     setQuantity(newQuantity);
    
   };

  //  here products are dispatching or getting from the reux

 const handleCartClick = () => {
   
   dispatch(addProduct({ ...product, quantity, activeSize, activeSleeve }));
   toast.success("Item added to cart!");
 };

  return (
    <>
      <div className="details-container container">
        <div className="left">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="right">
          <h1>{product.title}</h1>

          {/* ⭐ Review Stars */}
          <div className="review-stars">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="star">
                &#9733;
              </span> // solid star
            ))}
            <span className="review-count">(34 Reviews)</span>
          </div>

          <div className="price-div">
            <span className="originl-price">Rs {product.originalPrice}</span>
            <span className="sal-price">Rs {product.price}</span>
            <span className="sale">Sale</span>
          </div>

          <div className="size-selector">
            <span>Size</span>
            {["SMALL", "MEDIUM", "LARGE", "XL"].map((size, index) => (
              <button
                key={index}
                className={`size-button ${activeSize === size ? "active" : ""}`}
                onClick={() => handleSizeButtonClick(size.trim())}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="size-selector">
            <span>Sleeve</span>
            {["HALF SLEEVE", "FULL SLEEVE"].map((sleeve, index) => (
              <button
                key={index}
                className={`size-button ${
                  activeSleeve === sleeve ? "active" : ""
                }`}
                onClick={() => handleSleeveButtonClick(sleeve)}
              >
                {sleeve}
              </button>
            ))}
          </div>

          <Quantity onQuantityChange={handleQuantityChange} />

          <div className="button-dev">
            <Button
              label="Add to Cart"
              onClick={handleCartClick}
              type="transparent"
              size="medium"
            />
            <Button
              label="Buy it now"
              onClick={() => {
                handleCartClick()
                navigation("/checkout")}}
              type="primry"
              size="medium"
            />
          </div>

         
        </div>
      </div>

      <Products />
      <ToastContainer />
    </>
  );
};

export default Details;
