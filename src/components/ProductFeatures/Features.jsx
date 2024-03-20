import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectProductsSelector,
  //   selectThisProduct,
} from "../../features/products/productsSlice";
import { addFeature } from "../../features/users/usersSlice";
import { addToPurchase } from "../../features/cart/cartSlice";

const Features = () => {
  const { username, productId } = useParams();
  console.log({ username, productId });
  const { productFeatures } = useSelector((state) =>
    state.users.find(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    )
  );
  const product = useSelector((state) =>
    state.products.find((p) => p.productId === productId)
  );
  console.log(product);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <p>Features of the product {productId}</p>
        <div>
          <h2>Details</h2>
          <hr />
          <br />
          <h3>Product Name: {product.productName}</h3>
          <div>
            {product.features.map(({ type, featureId, featureName }) => (
              <div key={featureId} style={{ marginBlock: "30px" }}>
                <span>Type: {type}</span>
                <br />
                <span
                  onClick={() => dispatch(addFeature({ username, featureId }))}
                >
                  Feature Name: {featureName}
                </span>
                <br />
                <br />
                <span>
                  isDisabled:{" "}
                  {productFeatures.includes(featureId)
                    ? "do not select"
                    : "can select this feature"}
                </span>
                <br />
                <br />
                {productFeatures.includes(featureId) ? (
                  "Already brought this feature"
                ) : (
                  <button
                    onClick={() => {
                      dispatch(addToPurchase({ username, featureId }));
                    }}
                  >
                    Buy this feature
                  </button>
                )}

                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
