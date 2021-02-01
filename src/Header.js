import React from "react";
import ".";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLriegEsVvav_Vs4EF-Y74ZGLka-hawoOqkw&usqp=CAU"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* logo */}
      </div>

      <div className="header__option">
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">Guest</span>
        </div>
      </div>

      <div className="header__option">
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
      </div>

      <div className="header__option">
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
