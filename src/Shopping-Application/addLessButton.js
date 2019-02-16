import React from "react";

const Button = props => {
  return (
    <div
      className="btn-group border mt-2"
      role="group"
      aria-label="Basic example"
    >
      <button
        type="button"
        onClick={() => props.increment(props.prod)}
        className="btn btn-secondary fa fa-plus"
      />
      <span className="p-2 w-100">{props.prod.purchase}</span>
      <button
        type="button"
        onClick={() => props.decrement(props.prod)}
        className="btn fa fa-minus btn-secondary"
      />
    </div>
  );
};

export default Button;
