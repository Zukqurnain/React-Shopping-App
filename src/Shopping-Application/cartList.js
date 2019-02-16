import React from "react";
import Button from "./addLessButton";
import logo from "../images/mobile.jpeg";
const CartList = ({ prod, increment, decrement }) => {
  return (
    <div className="product">
      <div className="row">
        <div className="col-md-3">
          <img className="img-fluid mx-auto d-block image" src={logo} alt="mobile" />
        </div>
        <div className="col-md-8">
          <div className="info">
            <div className="row">
              <div className="col-md-5 product-name">
                <div className="product-name">
                  <div className="product-info">
                    <div>
                      Title: <span className="value">{prod.title}</span>
                    </div>
                    <div>
                      Price: <span className="value">{prod.price}</span>
                    </div>
                    <div>
                      Depart: <span className="value">32GB</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 quantity">
                <label htmlFor="quantity">Quantity:</label>
                <Button
                  increment={increment}
                  decrement={decrement}
                  prod={prod}
                />
              </div>
              <div className="col-md-3 price">
                <span>{prod.price * prod.purchase}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
