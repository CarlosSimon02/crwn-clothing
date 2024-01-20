import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  return (
    <div>
      {cartItems.map((cartItem) => {
        const { name, quantity, price } = cartItem;
        return (
          <div>
            <h1>{name}</h1>
            <div>
              {quantity} X {price}
            </div>
            <button
              onClick={() => {
                addItemToCart(cartItem);
              }}
            >
              Increment
            </button>
            <button
              onClick={() => {
                removeItemToCart(cartItem);
              }}
            >
              Decrement
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;