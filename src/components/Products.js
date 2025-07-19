import React, { useEffect, useState } from "react";
import Product from "./Product";
import "../styles/Products.css";
import {products} from "./data";
const Products = () => {
  return (
    <>
      {/* Here is rendering the Player version section in home screen products  */}
      <div className="title">
        <h1>PLAYER VERSION</h1>
      </div>
      <Product data={products} category={"playerVersion"} />
      {/* Here is rendering the Featured Collection section in home screen products */}
      <div className="title">
        <h1>RETRO SHIRTS  </h1>
      </div>
      <Product data={products} category={"retroshirts"} />
      {/* Here is rendering the shorts section in home screen products  */}

      <div className="title">
        <h1>CLUB SHIRTS</h1>
      </div>
      <Product data={products} category={"clubshirts"} />
      <div className="title">
        <h1>NATIONAL SHIRTS</h1>
      </div>
      <Product data={products} category={"nationalshirts"} />
    </>
  );
};

export default Products;
