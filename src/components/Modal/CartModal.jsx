/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useCurrentUserContext } from "../../app/context/currentUser";
import {
  completePurchase,
  removeFromPurchase,
  resetToInitial,
} from "../../features/cart/cartSlice";
import { addBulkFeatureFromCart } from "../../features/users/usersSlice";

const CartModal = (props) => {
  const { currentUser } = useCurrentUserContext();
  const [isProcessing, setIsProcessing] = useState(false);
  const dispatch = useDispatch();
  let cartList = useSelector((state) => state.cart.cartItems["rtripati"]);
  console.log(cartList);
  const processCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      dispatch(completePurchase());
      dispatch(
        addBulkFeatureFromCart({
          username: "rtripati",
          purchasedItems: cartList,
        })
      );
      dispatch(resetToInitial({ username: "rtripati" }));
      setIsProcessing(false);
    }, 2000);
  };

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
          {cartList.length === 0 && (
            <>
              <div>
                <p>You don&apos;t have any product to purchase</p>
              </div>
            </>
          )}
          {!!cartList.length && (
            <>
              <div style={{ marginBlock: "24px" }}>
                {cartList.map((cart) => {
                  return (
                    <div
                      key={cart}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <>
                        <span>{cart.substring(0, 4)}</span>
                        <span>{cart}</span>
                        <span>1000</span>
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch(
                              removeFromPurchase({ username: "rtripati", cart })
                            )
                          }
                        >
                          &times;
                        </span>
                      </>
                    </div>
                  );
                })}
              </div>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <div style={{}}>
                  <button
                    type="button"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      dispatch(resetToInitial({ username: "rtripati" }))
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
