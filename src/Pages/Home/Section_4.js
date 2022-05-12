import React from "react";

const Section_4 = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-12">
          <img
            className="img-fluid"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ws62l23cp5bvv7imxxnm.png"
            alt=""
          />
        </div>
        <div className="col-lg-6 col-12 ">
          <h1>We provide our brand with the best experience</h1>
          <p className="my-3">
            We are a very professional bag shop and made by hand without any
            machines at all. We are here using natural leather for the basic
            material of the bag and it is also very safe to use for you
          </p>
          <div className="row">
            <div className="col">
              <h1>24+</h1>
              <p>Years Experience’s</p>
            </div>
            <div className="col">
              <h1>1900</h1>
              <p>Bag production</p>
            </div>
            <div className="col">
              <h1>170</h1>
              <p>Award obtained</p>
            </div>
          </div>
          <button className="btn btn-outline-dark mt-3">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Section_4;
