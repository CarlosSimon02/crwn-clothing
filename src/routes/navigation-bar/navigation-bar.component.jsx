import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../context/cart.context";

import {
  NavigationBarContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation-bar.styles";

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationBarContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <NavLink onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationBarContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
