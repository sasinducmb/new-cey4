import React from 'react';

const NewsletterSection = () => {
  return (
    <div className="container text-center my-5 d-flex flex-column justify-content-center align-items-center px-3">
      <h2 style={{ fontWeight: "bold" }}>
        OUR NEWEST PRODUCTS STRAIGHT TO YOUR INBOX.
      </h2>
      <p>
        Be the first to know about our products, limited-time offers, community events, and more.
      </p>

      {/* Responsive Input and Button */}
      <div className="w-100 w-md-75 w-lg-50 mt-3">
        <form className="row g-2 justify-content-center">
          <div className="col-12 col-md-7">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email address"
              aria-label="Email address"
              required
            />
          </div>
          <div className="col-12 col-md-auto mt-2">
            <button className="btn btn-success" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSection;
