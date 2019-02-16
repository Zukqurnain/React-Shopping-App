import React from "react";

const NavBar = props => {
  const { cart } = props;
  return (
    <div>
      <nav className="navbar text-white bg-dark ">
        <span className="navbar-brand mb-0 h1">
          Shopping Application
          <span className="ml-3 fa fa-cart-plus">
            <sup className="badge mt-2 bg-danger">{cart > 0 ? cart : ""}</sup>
          </span>
        </span>
      </nav>
    </div>
  );
};

export default NavBar;
