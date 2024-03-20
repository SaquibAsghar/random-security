/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <>
      {props.list.map((product) => (
        <div key={product.productId}>
          <h1>
            <Link to={product.productId}>{product.productName}</Link>
          </h1>
        </div>
      ))}
    </>
  );
};

export default Product;
