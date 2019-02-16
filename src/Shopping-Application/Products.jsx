import React from "react";
import Product from "./Product";

const Products = props => {
  const { products, img } = props;
  return products.map(prod => (
    <Product
      prod={prod}
      img={img}
      add={props.add}
      less={props.less}
      handleProduct={props.fn}
      key={prod.id}
    />
  ));
};

export default Products;
