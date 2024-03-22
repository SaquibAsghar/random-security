/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { useCurrentUserContext } from "../../app/context/currentUser";
import {
  completePurchase,
  removeFromPurchase,
  resetToInitial,
} from "../../features/cart/cartSlice";
import { addBulkFeatureFromCart } from "../../features/users/usersSlice";

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
        <div
          key={productId}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <>
            <span>{productId.substring(0, 4)}</span>
            <span>{featureList.featureToPurchase.toString()}</span>
            <span>{featureList.price}</span>
            <span
              style={{ cursor: "pointer" }}
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
            </span>
          </>
        </div>
      );
    });
  }

  return (
    <>
      <div
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#5f575791",
          inset: 0,
        }}
      >
        <div
          style={{
            backgroundColor: "#fafafa",
            width: "700px",
            height: "500px",
            padding: "24px",
          }}
        >
          <div style={{ display: "flex" }}>
            <span style={{ marginInline: "auto" }}>Cart Model</span>
            <span onClick={props.toggleCartModal} style={{ cursor: "pointer" }}>
              &times;
            </span>
          </div>
          <br />
          {!Object.keys(cartList).length && (
            <>
              <div>
                <p>You don&apos;t have any product to purchase</p>
              </div>
            </>
          )}
          {cartList && !!Object.keys(cartList).length && (
            <>
              <div style={{ marginBlock: "24px" }}>{renderList(cartList)}</div>

              <div>
                <p>Total Product qunatity: {uniqueProduct.length}</p>
                <p>Original Price: ${cartPrice}</p>
                {uniqueProduct.length > 1 ? (
                  <>
                    <p>
                      Discount Rate: {discountOnProducts[uniqueProduct.length]}%
                    </p>
                    <p>
                      Discount Amount: $
                      {(cartPrice * discountOnProducts[uniqueProduct.length]) /
                        100}
                    </p>
                    <p>
                      Final Price after discount: $
                      {calculateFinalPrice(
                        discountOnProducts[uniqueProduct.length]
                      )}
                    </p>
                  </>
                ) : (
                  <p>Final Price after discount {calculateFinalPrice()}</p>
                )}
              </div>
              {/* Button */}
              <div style={{ display: "flex", justifyContent: "end" }}>
                <div style={{}}>
                  <button
                    type="button"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      dispatch(resetToInitial({ username: currentUser }))
                    }
                  >
                    Clear Purchase
                  </button>
                </div>
                <div style={{}}>
                  <button
                    type="button"
                    style={{ cursor: "pointer" }}
                    onClick={() => processCheckout()}
                  >
                    Purchase Now
                  </button>
                </div>
              </div>
              {isProcessing && <span>Processing your order please wait</span>}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartModal;
