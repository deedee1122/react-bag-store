import React from "react";

const Section_5 = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-12 order-lg-0 order-1">
          <h1 className="mb-4">
            Step by step we produce bags with natural materials
          </h1>
          <div className="d-flex align-items-center  gap-3">
            <p className="number-list">1</p>
            <div className="">
              <h4>Choosing leather for the basic material</h4>
              <p>
                We are very detailed in choosing bag materials for satisfactory
                results
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <p className="number-list">2</p>
            <div className="">
              <h4>Sewing process</h4>
              <p>
                We do not use automatic machines, but we produce by handmade
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <p className="number-list">3</p>
            <div className="">
              <h4>Finishing</h4>
              <p>
                The last process is a bag that is finished and ready to be sale
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 order-lg-1 order-0">
          <img
            className="img-fluid"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/surfrix482ycujaefpuw.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Section_5;
