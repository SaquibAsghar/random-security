/* eslint-disable react/prop-types */
import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import { ProductsContainer, ProductWrapper } from "./Product.style";

const ProductList = (props) => {
  return (
    <>
      <div>
        <h2 style={{ fontSize: "xx-large" }}>Our Products</h2>
      </div>
      <ProductsContainer className="mTop-3">
        <ProductWrapper>
          <Product {...props} />
        </ProductWrapper>
        <Outlet />
      </ProductsContainer>
    </>
  );
};

export default ProductList;
