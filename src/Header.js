import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header(props) {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://previews.123rf.com/images/freaktor/freaktor2002/freaktor200200085/139383943-vegetables-on-shopping-cart-trolley-grocery-logo-icon-design-vector.jpg"
        />
      </Link>

      
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <Link to={!user && "/login"}>
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne">
            Hello {!user ? "Guest" : user.email}{" "}
            {/* No need of optional chaninig that is question mark because we already protected when we check (!user)*/}
          </span>
          <span className="header__optionLineTwo">
            {user ? "Sign Out" : "Sign In"}
          </span>
        </div>
      </Link>


      <div className="header__option">
        <span className="header__optionLineOne">Returns</span>
        <span className="header__optionLineTwo">Orders</span>
      </div>

      <div className="header__option">
        <span className="header__optionLineOne">My</span>
        <span className="header__optionLineTwo">Prime</span>
      </div>

      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon/>
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
            {/* ? Gracefully Handle errors like if basket becomes undefined */}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
