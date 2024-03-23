/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { useCurrentUserContext } from "../../app/context/currentUser";
import {
  completePurchase,
  removeFromPurchase,
  resetToInitial,
} from "../../features/cart/cartSlice";
import { addBulkFeatureFromCart } from "../../features/users/usersSlice";
import {
  EmptyCartMessage,
  Modal,
  Overlay,
  OverlayCross,
  OverlayHeader,
  OverlayTitle,
  PriceDetailContainer,
  ProductPricingCalculation,
  ProductPricingDescription,
  ProductPricingSection,
  PurchasedItemRow,
  PurchaseItemFeaturesList,
  PurchaseItemPrice,
  PurchaseItemProductName,
  PurchaseItemRemoveIcon,
  ToPurchaseListContainer,
} from "./Modal.style";
import { Button, PurchaseNow } from "../ProductFeatures/Feature.style";
import { ButtonWrapper } from "../../common/Common.style";

const uniqueProduct = [];
const discountOnProducts = {
  2: 5,
  3: 8,
  4: 10,
  5: 15,
};
const CartModal = (props) => {
  const { productId } = useParams();
  let location = useLocation();
  console.log({
    location,
  });
  console.log({ productId });
  let cartPrice = 0;
  const { currentUser } = useCurrentUserContext();
  const [isProcessing, setIsProcessing] = useState(false);
  const dispatch = useDispatch();
  console.log({ currentUser });
  let cartList = useSelector(
    (state) => state.cart.cartItems[currentUser] || {}
  );
  console.log(cartList);
  const productList = useSelector((state) =>
    state.products.map((product) => product.productId)
  );
  function calcTotalProductFeatures() {
    let featureList = [];
    for (let key of Object.keys(cartList)) {
      featureList = [
        ...new Set([...cartList[key].featureToPurchase, ...featureList]),
      ];
    }
    console.log(featureList);
    return featureList;
  }
  const processCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      dispatch(completePurchase());
      dispatch(
        addBulkFeatureFromCart({
          username: currentUser,
          purchasedItems: calcTotalProductFeatures(),
        })
      );
      dispatch(resetToInitial({ username: currentUser }));
      setIsProcessing(false);
    }, 2000);
  };

  function calculateFinalPrice(discount = 0) {
    if (discount > 1) {
      return cartPrice - (cartPrice * discount) / 100;
    }
    return cartPrice;
  }

  function renderList(list) {
    const purchaseList = Object.entries(list);
    return purchaseList.map(([productId, featureList]) => {
      if (!uniqueProduct.includes(productId.substring(0, 4))) {
        uniqueProduct.push(productId.substring(0, 4));
      }
      cartPrice += featureList.price;
      return (
        <PurchasedItemRow key={productId}>
          <PurchaseItemProductName>
            {productId.substring(0, 4)}
          </PurchaseItemProductName>
          <PurchaseItemFeaturesList>
            {featureList.featureToPurchase.toString()}
          </PurchaseItemFeaturesList>
          <PurchaseItemPrice>{featureList.price}</PurchaseItemPrice>
          <PurchaseItemRemoveIcon
            onClick={() =>
              dispatch(
                removeFromPurchase({
                  username: currentUser,
                  featureId: productId,
                })
              )
            }
          >
            &times;
          </PurchaseItemRemoveIcon>
        </PurchasedItemRow>
      );
    });
  }

  return (
    <>
      <Modal>
        <Overlay>
          <OverlayHeader>
            <OverlayTitle>Billing</OverlayTitle>
            <OverlayCross onClick={props.toggleCartModal}>&times;</OverlayCross>
          </OverlayHeader>
          {!Object.keys(cartList).length && (
            <EmptyCartMessage>
              You don&apos;t have any product to purchase
            </EmptyCartMessage>
          )}
          {!!Object.keys(cartList).length && (
            <ToPurchaseListContainer>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 200px 1fr 1fr",
                  gap: "20px",
                }}
              >
                {["Product", "Feature", "Price"].map((label) => {
                  return <div key={label}>{label}</div>;
                })}
                <div></div>
              </div>
            </ToPurchaseListContainer>
          )}
          {cartList && !!Object.keys(cartList).length && (
            <>
              <ToPurchaseListContainer>
                {renderList(cartList)}
              </ToPurchaseListContainer>

              <PriceDetailContainer>
                <ProductPricingSection>
                  <ProductPricingDescription>
                    Total Product quantity:
                  </ProductPricingDescription>
                  <ProductPricingCalculation>
                    {uniqueProduct.length}
                  </ProductPricingCalculation>
                </ProductPricingSection>
                <ProductPricingSection>
                  <ProductPricingDescription>
                    Original Price:{" "}
                  </ProductPricingDescription>
                  <ProductPricingCalculation>
                    ${cartPrice}
                  </ProductPricingCalculation>
                </ProductPricingSection>
                {uniqueProduct.length > 1 ? (
                  <>
                    <ProductPricingSection>
                      <ProductPricingDescription>
                        Discount Rate:
                      </ProductPricingDescription>
                      <ProductPricingCalculation>
                        {discountOnProducts[uniqueProduct.length]}%
                      </ProductPricingCalculation>
                    </ProductPricingSection>
                    <ProductPricingSection>
                      <ProductPricingDescription>
                        Discount Amount:
                      </ProductPricingDescription>
                      <ProductPricingCalculation>
                        ${" "}
                        {(cartPrice *
                          discountOnProducts[uniqueProduct.length]) /
                          100}
                      </ProductPricingCalculation>
                    </ProductPricingSection>
                    <ProductPricingSection>
                      <span>Final Price after discount:</span>
                      <ProductPricingCalculation>
                        {" "}
                        $
                        {calculateFinalPrice(
                          discountOnProducts[uniqueProduct.length]
                        )}
                      </ProductPricingCalculation>
                    </ProductPricingSection>
                  </>
                ) : (
                  <>
                    <ProductPricingSection>
                      <ProductPricingDescription>
                        Final Price:
                      </ProductPricingDescription>
                      <ProductPricingCalculation>
                        {" "}
                        ${calculateFinalPrice()}
                      </ProductPricingCalculation>
                    </ProductPricingSection>
                  </>
                )}
              </PriceDetailContainer>
              {/* Button */}
              <div style={{ display: "flex", justifyContent: "end" }}>
                <ButtonWrapper>
                  <Button
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      dispatch(resetToInitial({ username: currentUser }))
                    }
                  >
                    Clear Purchase
                  </Button>
                </ButtonWrapper>
                <ButtonWrapper
                  className="mStart-3 "
                >
                  <PurchaseNow
                    style={{ cursor: "pointer" }}
                    onClick={() => processCheckout()}
                  >
                    Buy Now
                  </PurchaseNow>
                </ButtonWrapper>
              </div>
              {isProcessing && <span>Processing your order please wait</span>}
            </>
          )}
        </Overlay>
      </Modal>
    </>
  );
};

export default CartModal;
