/* eslint-disable react/prop-types */
import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

const ProductList = (props) => {
  return (
    <>
      <div>ProductList</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: '1fr 1fr',
          height: "450px",
          border: "1px solid plum"
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
