import React from "react";

const Summary = props => {
  const { prod } = props;
  let total = 0;
  prod.filter(x =>
    x.purchase > 0 ? (total += x.purchase * x.price) : 0
  );

  return (
    <div className="summary">
      <h3>Summary</h3>
      <div className="summary-item">
        <span className="text">Subtotal</span>
        <span className="price">{total}</span>
      </div>
      <div className="summary-item">
        <span className="text">Discount</span>
        <span className="price">$0</span>
      </div>
      <div className="summary-item">
        <span className="text">Shipping</span>
        <span className="price">$0</span>
      </div>
      <div className="summary-item">
        <span className="text">Total</span>
        <span className="price">{total}</span>
      </div>
      <button type="button" className="btn btn-primary btn-lg btn-block">
        Checkout
      </button>
    </div>
  );
};

export default Summary;
