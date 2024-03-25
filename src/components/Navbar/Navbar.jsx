import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Home from "../Home/Home";
import { selectCartList } from "../../features/cart/cartSlice";
import CartModal from "../Modal/CartModal";
import {
  CartIcon,
  CartIconContainer,
  ChangeUserNavBar,
} from "../../common/Common.style";

const Navbar = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const toggleCartModal = () => {
    setIsCartModalOpen((prevState) => !prevState);
  };
  const cart = useSelector((state) => state.cart.cartItems);
  return (
    <>
      <ChangeUserNavBar>
        <Home />
        <CartIconContainer>
          <CartIcon onClick={toggleCartModal}>
            <img
              src="/images/shopping-cart.svg"
              alt="shopping cart image"
              height={35}
              style={{
                verticalAlign: "middle",
              }}
            />
          </CartIcon>
        </CartIconContainer>
      </ChangeUserNavBar>
      {isCartModalOpen && <CartModal toggleCartModal={toggleCartModal} />}
    </>
  );
};

export default Navbar;
