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
  selectGetLastRemovedFeature,
} from "../../features/cart/cartSlice";
import {
  Button,
  FeatureCard,
  FeatureName,
  FeaturePlan,
  FeaturePrice,
  FeaturesCardsContainer,
  FeaturesHeading,
  FeaturesWrapper,
} from "./Feature.style";

let featureToPurchase = [];
const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState("");
  const { username, productId } = useParams();
  console.log({ username, productId });
  const { productFeatures: userPurchaseProductFeature } = useSelector((state) =>
    state.users.find(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    )
  );

  console.log(userPurchaseProductFeature);
  const product = useSelector((state) =>
    state.products.find((p) => p.productId === productId)
  );
  console.log(product);

  let purchaseCart = useSelector(
    (state) => state.cart.cartItems[username] || {}
  );


  console.log({
    featureToPurchase,
  });


  console.log({
    featureToPurchase,
  });

  console.log(purchaseCart);
  if (!Object.keys(purchaseCart).length) {
    purchaseCart = null;
  }

  function renderCartPurchaseButton(featureId, price) {
    console.log({ featureId });

    // If purchase amount is 0
    if (!price) return;

    // If user already purchase the product feature, display disabled purchase button
    if (userPurchaseProductFeature.includes(featureId)) {
      return <Button disabled>Purchased</Button>;
    }

    console.log({
      featureToPurchase,
      featureId,
    });
    // Show Remove button if feature is present inside the cart(featureToPurchase)
    if (featureToPurchase.includes(featureId)) {
      return (
        <Button
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
          Remove
        </Button>
      );
    }

    //conditon if purchaseCart is empty and that product feature is not available in user purchase account
    if (
      (!purchaseCart && !userPurchaseProductFeature.includes(featureId)) ||
      (!purchaseCart?.[featureId] &&
        !userPurchaseProductFeature.includes(featureId))
    ) {
      return (
        <Button
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
            console.log(userPurchaseProductFeature);
            // filter out to-be purchase list and remove the feature if it alraedy has been purchased
            featureToPurchase = featureToPurchase.filter((feature) => {
              if (!userPurchaseProductFeature.includes(feature)) {
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
        >
          Add
        </Button>
      );
    }

    // if (!userPurchaseProductFeature.includes(featureId)) {
    //   return (
    //     <Button
    //       style={{
    //         cursor: "pointer",
    //       }}
    //       disabled={!price}
    //       onClick={() => {
    //         setSelectedFeature(featureId);
    //         console.log({ featureId, productId });
    //         for (let i = 1; i <= +featureId.at(-1); i++) {
    //           let featureItem = `${productId}F00${i}`;
    //           // Insert all the feature to-be purchase list
    //           if (!featureToPurchase.length) {
    //             featureToPurchase = [...featureToPurchase, featureItem];
    //           } else if (!featureToPurchase.includes(featureItem)) {
    //             featureToPurchase = [...featureToPurchase, featureItem];
    //           }
    //         }
    //         featureToPurchase = featureToPurchase.filter((feature) => {
    //           if (feature.includes(productId)) return feature;
    //         });
    //         console.log(featureToPurchase);
    //         console.log(userPurchaseProductFeature);
    //         // filter out to-be purchase list and remove the feature if it alraedy has been purchased
    //         featureToPurchase = featureToPurchase.filter((feature) => {
    //           if (!userPurchaseProductFeature.includes(feature)) {
    //             return feature;
    //           }
    //         });
    //         console.log(featureToPurchase);
    //         const cart = {
    //           price,
    //           productId,
    //           featureId,
    //           featureToPurchase,
    //         };
    //         dispatch(addToPurchase({ username, featureId, cart }));
    //       }}
    //       title={!price && "Only avalible with intermediate/enterprise feature"}
    //     >
    //       Add 1
    //     </Button>
    //   );
    // }
  }

  const dispatch = useDispatch();

  return (
    <>
      <FeaturesWrapper>
        <FeaturesHeading>{product.productName} features</FeaturesHeading>
        <div>
          <FeaturesCardsContainer>
            {product.features.map(
              ({ type, featureId, featureName, basePrice }) => (
                <FeatureCard key={featureId}>
                  <FeatureName>{featureName}</FeatureName>
                  <FeaturePlan>Plan: {type}</FeaturePlan>
                  <FeaturePrice>Price: $ {basePrice}</FeaturePrice>
                  {renderCartPurchaseButton(featureId, basePrice)}
                </FeatureCard>
              )
            )}
          </FeaturesCardsContainer>
        </div>
      </FeaturesWrapper>
    </>
  );
};

export default Features;
