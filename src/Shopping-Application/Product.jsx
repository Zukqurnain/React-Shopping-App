import React from "react";

class Product extends React.Component {
  btnRender() {
    return this.props.prod.purchase < 1 ? (
      <button
        onClick={() => this.props.handleProduct(this.props.prod)}
        className="btn btn-block btn-primary"
      >
        Add to Cart
      </button>
    ) : (
      <div className="btn-group border">
        <button
          type="button"
          onClick={() => this.props.add(this.props.prod)}
          className="btn fa fa-plus btn-secondary"
        />
        <span className="p-2 w-100">
          {this.props.prod.purchase + " in cart"}
        </span>
        <button
          type="button"
          onClick={() => this.props.less(this.props.prod)}
          className="btn fa fa-minus btn-secondary"
        />
      </div>
    );
  }
  onMouseOver = () => {
    return "animated fadeInUp";
  };
  render() {
    return (
      <div className="col-md-4  mb-3">
        <div className="card text-center">
          <img
            className="card-img-top"
            width="200"
            height="200"
            src={this.props.img}
            alt="4564546"
          />
          <div className="card-body">
            <h4 className="card-title">{this.props.prod.title}</h4>
            <div className="card-text">
              <b>Price {this.props.prod.price}</b>
            </div>
          </div>
          {this.btnRender()}
        </div>
      </div>
    );
  }
}

export default Product;
