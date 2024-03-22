/* eslint-disable react/prop-types */
import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

const ProductList = (props) => {
  return (
    <>
      <div>
        <h2 style={{ fontSize: "xx-large" }}>Our Products</h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "450px",
          border: "1px solid plum",
        }}
      >
        <div>
          <Product {...props} />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default ProductList;
