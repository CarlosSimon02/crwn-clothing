import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation-bar.styles.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const NavigationBar = () => {
  return (
    <Fragment>
      <div className="navigation-bar">
        <Link className="logo-container">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
