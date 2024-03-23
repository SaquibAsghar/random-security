/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProductContainer, ProductWrapper } from "./Product.style";

const Product = (props) => {
  const { productId } = useParams();
  return (
    <>
      {props.list.map((product) => (
        <ProductWrapper key={product.productId}>
          <ProductContainer>
            <Link
              to={product.productId}
              className={productId === product.productId && "product-link"}
            >
              {product.productName}
            </Link>
          </ProductContainer>
        </ProductWrapper>
      ))}
    </>
  );
};

export default Product;
