import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectProductsSelector } from "../../features/products/productsSlice";
import ProductList from "./ProductList";

const Products = () => {
  const navigate = useNavigate();
  const allProducts = useSelector(selectProductsSelector);
  console.log(allProducts);
  return (
    <>
      <div>Products</div>
      <button onClick={() => navigate(-1)}>Back to dashboard</button>
      <div>
        <ProductList list={allProducts} />
      </div>
    </>
  );
};

export default Products;
