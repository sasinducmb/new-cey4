import React from "react";

function Design() {
  return (
    <div className="container position-relative">
      <div className="review-row d-flex justify-content-center align-items-end position-relative text-center">
        <img
          src="assets/img/banner/revieIcon.png"
          alt="review"
          className="img-fluid reviewIcon-imgage position-absolute reviewIcon-imgage-right"
        />
        <img
          src="assets/img/banner/leaf.png"
          alt="review"
          className="img-fluid reviewIcon-imgage position-absolute reviewIcon-imgage-left"
        />
        <h2 className="service-header w-100">Customer Reviews</h2>
      </div>
    </div>
  );
}

export default Design;
