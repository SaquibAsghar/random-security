import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToPurchase,
  removeFromPurchase,
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
let featureToPurchase1 = {};
const Features = () => {
  const [, setSelectedFeature] = useState("");
  const { username, productId } = useParams();
  const { productFeatures: userPurchaseProductFeature } = useSelector((state) =>
    state.users.find(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    )
  );

  const product = useSelector((state) =>
    state.products.find((p) => p.productId === productId)
  );

  let purchaseCart = useSelector(
    (state) => state.cart.cartItems[username] || {}
  );

  const removedFeatureList = useSelector(
    (state) => state.cart.lastRemovedFeatureFromCart || []
  );

  let presentProductIdFeatureInCart = useSelector(
    (state) => state.cart[productId]
  );

  if (!Object.keys(purchaseCart).length) {
    purchaseCart = null;
  }

  function renderCartPurchaseButton(featureId, price) {
    // If purchase amount is 0
    // if (!price) return;

    // If user already purchase the product feature, display disabled purchase button
    if (userPurchaseProductFeature.includes(featureId)) {
      return (
        <Button disabled className="purchased">
          Purchased
        </Button>
      );
    }
    // Show Remove button if feature is present inside the cart(featureToPurchase)

    if (
      (!removedFeatureList.length &&
        !removedFeatureList.includes(featureId) &&
        featureToPurchase1[productId]?.includes(featureId)) ||
      (removedFeatureList.length &&
        !removedFeatureList.includes(featureId) &&
        featureToPurchase1[productId]?.includes(featureId))
    ) {
      return (
        <Button
          onClick={() => {
            if (purchaseCart[featureId]) {
              featureToPurchase1[productId] = featureToPurchase1[
                productId
              ].filter((feature) => feature !== featureId);
              dispatch(removeFromPurchase({ username, featureId, productId }));
            }
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
      return ["F001", "F002"].includes(featureId.substring(4)) ? (
        <span style={{ textAlign: "center" }}>
          Available with Intermediate and Enterprise
        </span>
      ) : (
        <Button
          style={{
            cursor: "pointer",
          }}
          disabled={!price}
          onClick={() => {
            setSelectedFeature(featureId);
            for (let i = 1; i <= +featureId.at(-1); i++) {
              let featureItem = `${productId}F00${i}`;
              // Insert all the feature to-be purchase list
              if (!featureToPurchase1[productId]) {
                featureToPurchase1[productId] = [featureItem];
              } else if (!featureToPurchase1[productId].includes(featureItem)) {
                featureToPurchase1[productId] = [
                  ...featureToPurchase1[productId],
                  featureItem,
                ];
              }
            }
            featureToPurchase = featureToPurchase.filter((feature) => {
              if (feature.includes(productId)) return feature;
            });
            // filter out to-be purchase list and remove the feature if it alraedy has been purchased
            featureToPurchase = featureToPurchase.filter((feature) => {
              if (!userPurchaseProductFeature.includes(feature)) {
                return feature;
              }
            });

            // filter out the features which are not purchase by user yet
            featureToPurchase1[productId] = featureToPurchase1[
              productId
            ].filter((feature) => {
              if (!userPurchaseProductFeature.includes(feature)) {
                return feature;
              }
            });

            // This will remove the duplication from the cart list, when cart modal is opened
            if (false && presentProductIdFeatureInCart) {

              featureToPurchase1[productId] = featureToPurchase1[
                productId
              ].filter((ele) => {
                if (!presentProductIdFeatureInCart.includes(ele)) {
                  return ele;
                }
              });
            }

            const cart = {
              price,
              productId,
              featureId,
              featureToPurchase: featureToPurchase1[productId],
            };
            dispatch(addToPurchase({ username, featureId, cart }));
          }}
        >
          Add
        </Button>
      );
    }
  }

  const dispatch = useDispatch();

  return (
    <>
      <FeaturesWrapper>
        <FeaturesHeading>{product.productName} features</FeaturesHeading>
        <>
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
        </>
      </FeaturesWrapper>
    </>
  );
};

export default Features;
