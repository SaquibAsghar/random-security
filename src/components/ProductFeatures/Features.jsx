import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectProductsSelector,
  //   selectThisProduct,
} from "../../features/products/productsSlice";
import { addFeature } from "../../features/users/usersSlice";
import {
  addToPurchase,
  removeFromPurchase,
} from "../../features/cart/cartSlice";

let featureToPurchase = [];
const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState("");
  const { username, productId } = useParams();
  console.log({ username, productId });
  const { productFeatures } = useSelector((state) =>
    state.users.find(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    )
  );

  console.log(productFeatures);
  const product = useSelector((state) =>
    state.products.find((p) => p.productId === productId)
  );
  console.log(product);

  let purchaseCart = useSelector(
    (state) => state.cart.cartItems[username] || {}
  );

  console.log(purchaseCart);
  if (!Object.keys(purchaseCart).length) {
    purchaseCart = null;
  }
  function renderCartPurchaseButton(featureId, price) {
    console.log({ featureId });
    if (!purchaseCart && !productFeatures.includes(featureId)) {
      return (
        <button
          style={{
            cursor: "pointer",
          }}
          disabled={!price}
          onClick={() => {
            setSelectedFeature(featureId);
            console.log({ featureId });
            for (let i = 1; i <= +featureId.at(-1); i++) {
              let featureItem = `${productId}F00${i}`;
              // Insert all the feature to-be purchase list
              if (!featureToPurchase.length) {
                featureToPurchase = [...featureToPurchase, featureItem];
              } else if (!featureToPurchase.includes(featureItem)) {
                featureToPurchase = [...featureToPurchase, featureItem];
              }
            }
            featureToPurchase = featureToPurchase.filter((feature) => {
              if (feature.includes(productId)) return feature;
            });
            console.log(featureToPurchase);
            console.log(productFeatures);
            // filter out to-be purchase list and remove the feature if it alraedy has been purchased
            featureToPurchase = featureToPurchase.filter((feature) => {
              if (!productFeatures.includes(feature)) {
                return feature;
              }
            });
            console.log(featureToPurchase);
            const cart = {
              price,
              productId,
              featureId,
              featureToPurchase,
            };
            dispatch(addToPurchase({ username, featureId, cart }));
          }}
          title={
            !price && "Only available with intermediate/enterprise feature"
          }
        >
          Add this feature to purchase
        </button>
      );
    }

    if (productFeatures.includes(featureId)) {
      return <button disabled>Allready bought this feature</button>;
    }
    console.log({
      featureToPurchase,
      featureId,
    });
    if (featureToPurchase.includes(featureId)) {
      return (
        <button
          // disabled={featureId !== selectedFeature}
          onClick={() => {
            let removeFromIndex = featureToPurchase.indexOf(featureId);
            console.log(removeFromIndex);
            featureToPurchase = featureToPurchase.filter(
              (ele) => ele !== featureId
            );
            console.log(featureToPurchase);
            // setSelectedFeature("");
            dispatch(removeFromPurchase({ username, featureId }));
          }}
        >
          Remove this feature from purchase
        </button>
      );
    }

    if (!productFeatures.includes(featureId)) {
      return (
        <button
          style={{
            cursor: "pointer",
          }}
          disabled={!price}
          onClick={() => {
            setSelectedFeature(featureId);
            console.log({ featureId, productId });
            for (let i = 1; i <= +featureId.at(-1); i++) {
              let featureItem = `${productId}F00${i}`;
              // Insert all the feature to-be purchase list
              if (!featureToPurchase.length) {
                featureToPurchase = [...featureToPurchase, featureItem];
              } else if (!featureToPurchase.includes(featureItem)) {
                featureToPurchase = [...featureToPurchase, featureItem];
              }
            }
            featureToPurchase = featureToPurchase.filter((feature) => {
              if (feature.includes(productId)) return feature;
            });
            console.log(featureToPurchase);
            console.log(productFeatures);
            // filter out to-be purchase list and remove the feature if it alraedy has been purchased
            featureToPurchase = featureToPurchase.filter((feature) => {
              if (!productFeatures.includes(feature)) {
                return feature;
              }
            });
            console.log(featureToPurchase);
            const cart = {
              price,
              productId,
              featureId,
              featureToPurchase,
            };
            dispatch(addToPurchase({ username, featureId, cart }));
          }}
          title={!price && "Only avalible with intermediate/enterprise feature"}
        >
          Add this feature to purchase 1
        </button>
      );
    }
  }

  const dispatch = useDispatch();

  function addToPurchaseHandler() {}

  return (
    <>
      <div style={{ overflowY: "scroll" }}>
        <h3>{product.productName} features</h3>
        <div>
          <div>
            {product.features.map(
              ({ type, featureId, featureName, basePrice }) => (
                <div key={featureId} style={{ marginBlock: "30px" }}>
                  <br />
                  <span
                    onClick={() =>
                      dispatch(addFeature({ username, featureId }))
                    }
                  >
                    Feature Name: {featureName}
                  </span>
                  <br />
                  <span>Type: {type}</span>
                  <br />
                  <span>Base Price: $ {basePrice}</span>
                  <br />
                  <br />
                  <br />
                  {renderCartPurchaseButton(featureId, basePrice)}
                  <hr />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
