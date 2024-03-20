/* eslint-disable react/prop-types */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useCurrentUserContext } from "../../app/context/currentUser";

const CartModal = (props) => {
  const { currentUser } = useCurrentUserContext();
  const cartList = useSelector((state) => state.cart.cartItems["rtripati"]);
  console.log(cartList);
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
          <div style={{ marginBlock: "24px" }}>
            {cartList.map((cart) => {
              return (
                <div
                  key={cart}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <>
                    <span>{cart.substring(0, 4)}</span>
                    <span>{cart}</span>
                    <span>1000</span>
                  </>
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: "end" }}>
            <button type="button" style={{ cursor: "pointer" }}>
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
