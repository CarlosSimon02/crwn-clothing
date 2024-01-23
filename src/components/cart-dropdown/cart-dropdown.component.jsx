import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.jsx";

import {
  CartDropDownContainer,
  CartItems,
  CartDropdownButton,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("./checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </CartItems>
      <CartDropdownButton onClick={goToCheckoutHandler}>
        Go to Checkout
      </CartDropdownButton>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
