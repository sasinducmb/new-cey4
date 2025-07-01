import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";

function Franchise() {
  return (
    <Fragment>
      <SEO titleTemplate="Collobaration" />
      <LayoutOne headerTop="visible">
        <div className="container-fluid reselling px-3">
          {/* Header */}
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center flex-column text-center py-5">
              <h2 className="fw-bold">Welcome To Commercial Arm</h2>
              <h1 className="fw-bold text-uppercase mt-2">Franchise</h1>
              <p className="mt-3 px-2 px-md-5">
                Join our franchise network and operate under our trusted brand.
                Gain access to a proven business model, full support, and exclusive benefits.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-10">
              <img
                src="assets/img/banner/video.png"
                className="img-fluid w-100 rounded"
                alt="Franchise Visual"
              />
            </div>
          </div>

          {/* Benefits Section */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              {/* Mobile view */}
              <div className="text-center bg-white p-3 rounded-4 shadow-sm d-block d-md-none mt-4">
                <h1 className="fw-bold">Benefits of Joining Us</h1>
                <p className="mt-3 px-2">
                  As a franchise partner, you'll benefit from brand recognition by operating under a well-established and trusted name in the market.
                  You'll receive comprehensive business support, including training, marketing assistance, and operational guidance to help ensure your success.
                  The program also offers an exclusive territory, giving you a competitive edge and a protected market area.
                  With our proven business model, the profitability potential is high, giving you the opportunity to build a sustainable, rewarding business with the backing of a strong brand.
                </p>
              </div>

              {/* Desktop view */}
              <div className="text-center mt-5 d-none d-md-block">
                <h1 className="fw-bold">Benefits of Joining Us</h1>
                <p className="mt-3 px-2 px-md-5">
                  As a franchise partner, you'll benefit from brand recognition by operating under a well-established and trusted name in the market.
                  You'll receive comprehensive business support, including training, marketing assistance, and operational guidance to help ensure your success.
                  The program also offers an exclusive territory, giving you a competitive edge and a protected market area.
                  With our proven business model, the profitability potential is high, giving you the opportunity to build a sustainable, rewarding business with the backing of a strong brand.
                </p>
              </div>
            </div>
          </div>

          {/* Rules Section */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              {/* Mobile view */}
              <div className="text-center bg-white p-3 rounded-4 shadow-sm d-block d-md-none mt-4">
                <h1 className="fw-bold">Rules & Conditions</h1>
                <p className="mt-3 px-2">
                  Becoming a franchise partner requires an initial investment and franchise fee,
                  ensuring access to our established brand and business model. Franchisees must
                  adhere to company policies and branding guidelines to maintain consistency and reputation.
                  A strong commitment to quality and customer service is essential to uphold our standards and customer trust.
                  Additionally, active participation in business operations is expected to ensure smooth management and long-term success.
                </p>
              </div>

              {/* Desktop view */}
              <div className="text-center mt-5 d-none d-md-block">
                <h1 className="fw-bold">Rules & Conditions</h1>
                <p className="mt-3 px-2 px-md-5">
                  Becoming a franchise partner requires an initial investment and franchise fee,
                  ensuring access to our established brand and business model. Franchisees must
                  adhere to company policies and branding guidelines to maintain consistency and reputation.
                  A strong commitment to quality and customer service is essential to uphold our standards and customer trust.
                  Additionally, active participation in business operations is expected to ensure smooth management and long-term success.
                </p>
              </div>
            </div>
          </div>

          {/* Register Button */}
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <button className="btn btn-custom-re mt-4 px-5 py-2 mb-5">
                Register
              </button>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
}

export default Franchise;
