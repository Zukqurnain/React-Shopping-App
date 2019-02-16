import React from "react";
import "../shopping-cart.css";
import CartList from "./cartList";
import Summary from "./summary";

class Bill extends React.Component {
  render() {
    const { products, increment, decrement, close } = this.props;
    const cartProd = products.filter(x => x.addInCart === true);
    return (
      <div>
        <section className="shopping-cart modal dark">
          <span className="fa fa-2x fa-remove text-danger" onClick={close} />
          <div className="container animated white fadeInLeft">
            <div className="content">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="items">
                    {cartProd.length ? (
                      cartProd.map(prod => (
                        <CartList
                          key={prod.id}
                          increment={increment}
                          decrement={decrement}
                          prod={prod}
                        />
                      ))
                    ) : (
                      <h1>Empty Cart</h1>
                    )}
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <Summary prod={products} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Bill;
