import React, { Component } from "react";
import img from "../src/images/mobile.jpeg";
import "./App.css";
import "./bootstrap.min.css";
import "./shopping-cart.css";
import "./Icons/css/font-awesome.css";
import NavBar from "./Shopping-Application/navbar";
import Banner from "./Shopping-Application/banner";
import Products from "./Shopping-Application/Products";
import Footer from "./Shopping-Application/footer";
import Bill from "./Shopping-Application/cartBill";
class App extends Component {
  constructor() {
    super();
    this.handleProduct = this.handleProduct.bind(this);
    this.addItem = this.addItem.bind(this);
    this.lessItem = this.lessItem.bind(this);
  }
  state = {
    products: [
      { id: 1, title: "Phone", price: 30, purchase: 0, addInCart: false },
      { id: 2, title: "Card", price: 10, purchase: 0, addInCart: false },
      { id: 3, title: "Pouch", price: 5, purchase: 0, addInCart: false },
      { id: 4, title: "Pen", price: 4, purchase: 0, addInCart: false },
      { id: 5, title: "Wallet", price: 5, purchase: 0, addInCart: false },
      { id: 6, title: "Drive", price: 5, purchase: 0, addInCart: false }
    ],
    counter: 0,
    isModal: false
  };

  isShow = () => {
    if (!this.state.isModal) {
      this.setState({ isModal: true });
    } else {
      this.setState({ isModal: false });
    }
  };

  handleProduct = prod => {
    this.setState(prev => {
      return { counter: prev.counter + 1 };
    });
    const products = [...this.state.products];
    const index = products.indexOf(prod);
    products[index] = { ...prod };
    products[index].purchase++;
    products[index].addInCart = true;
    this.setState({ products });
  };

  addItem(prod) {
    const products = [...this.state.products];
    const index = products.indexOf(prod);
    products[index] = { ...prod };
    products[index].purchase++;
    products[index].addInCart = true;
    this.setState({ products });
  }

  lessItem(prod) {
    if (prod.purchase <= 1) {
      this.setState(prev => {
        return { counter: prev.counter - 1 };
      });
    }
    const products = [...this.state.products];
    const index = products.indexOf(prod);
    products[index] = { ...prod };
    if (products[index].purchase <= 1) {
      products[index].addInCart = false;
    }
    products[index].purchase--;
    this.setState({ products });
  }

  render() {
    return (
      <div>
        <NavBar cart={this.state.counter} />
        {this.state.isModal ? (
          <Bill
            close={this.isShow}
            increment={this.addItem}
            decrement={this.lessItem}
            products={this.state.products}
          />
        ) : (
          ""
        )}
        <Banner />
        <div className="show-cart ">
          <button onClick={this.isShow} className="fa fa-cart-plus btn btn-danger"> Cart</button>
        </div>
        <div className="jumbotron">
          <h1 className="text-center">Our Products</h1>
          <div className="container">
            <div className="row">
              <Products
                add={this.addItem}
                less={this.lessItem}
                fn={this.handleProduct}
                img={img}
                products={this.state.products}
              />
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <Footer />
      </div>
    );
  }
}
export default App;
