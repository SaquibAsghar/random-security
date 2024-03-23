import { useSelector } from "react-redux";
import { selectProductsSelector } from "../../features/products/productsSlice";
import ProductList from "./ProductList";
import { ProductsListWrapper } from "./Product.style";

const Products = () => {
  const allProducts = useSelector(selectProductsSelector);
  return (
    <>
      <ProductsListWrapper>
        <ProductList list={allProducts} />
      </ProductsListWrapper>
    </>
  );
};

export default Products;
