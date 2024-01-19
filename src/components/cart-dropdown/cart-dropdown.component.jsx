import Button from "../button/button.cmponent"
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";


const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {
          [].map(() => (<CartItem/>))
        }
      </div>
      <Button>Go to Checkout</Button>
    </div>
  )
}

export default CartDropdown;