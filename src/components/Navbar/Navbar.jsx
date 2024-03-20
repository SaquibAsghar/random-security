import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Home from "../Home/Home";
import { selectCartList } from "../../features/cart/cartSlice";
import CartModal from "../Modal/CartModal";

const Navbar = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const toggleCartModal = () => {setIsCartModalOpen(prevState => !prevState)}
  const cart = useSelector((state) => state.cart.cartItems);
  console.log(cart);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <ul style={{ display: "flex" }}>
          <li
            style={{
              listStyle: "none",
              marginInlineEnd: "1rem",
              cursor: "pointer",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li
            style={{
              listStyle: "none",
              marginInlineEnd: "1rem",
              cursor: "pointer",
            }}
          >
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              Dashboard
            </Link>
          </li>
          <li
            style={{
              listStyle: "none",
              marginInlineEnd: "1rem",
              cursor: "pointer",
            }}
          >
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </li>
        </ul>
        <div>
          <span style={{ cursor: "pointer" }} onClick={toggleCartModal}>Cart icon</span>
        </div>
      </div>
      <div>
        <Home />
      </div>
      {isCartModalOpen && <CartModal toggleCartModal={toggleCartModal}/>}
    </>
  );
};

export default Navbar;
