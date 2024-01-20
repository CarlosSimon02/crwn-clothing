import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { addItemToCart, removeItemToCart } = useContext(CartContext);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name}/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity"></span>
      <span className="price"></span>
      <div className="remove-button">&#1005</div>
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
};

export default CheckoutItem;
