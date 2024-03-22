/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <>
      {props.list.map((product) => (
        <div key={product.productId} style={{ marginBlock: "22px" }}>
          <header style={{ fontSize: "28px", fontWeight: 600}}>
            <Link
              to={product.productId}
              style={{ textDecoration: "none", color: "#000" }}
            >
              {product.productName}
            </Link>
          </header>
        </div>
      ))}
    </>
  );
};

export default Product;
