import React from "react";

const Banner = () => {
  return (
    <div className="card text-center  mt-2">
      <div className="card-header">Featured</div>
      <div className="card-body">
        <h4 className="card-title display-4">
          Biggest Offer For This Month <span className="fa fa-stumbleupon" />
        </h4>
        <p className="card-text h4">
          Buy Upto 7000 thousand and enter in lucky Draw and Win $100 Dollar
          <span className="fa fa-dollar" />
        </p>
        <hr className="mt-3" />
      </div>
      <div className="card-footer text-muted">2 days ago</div>
    </div>
  );
};

export default Banner;
