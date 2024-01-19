import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation-bar.styles.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation-bar">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link onClick={signOutUser}>SIGN OUT</Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon/>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
