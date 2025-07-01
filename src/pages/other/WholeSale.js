import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";

function WholeSale() {
  return (
    <Fragment>
      <SEO titleTemplate="Collobaration" />
      <LayoutOne headerTop="visible">
        <div className="container-fluid reselling px-3">
          {/* Header Section */}
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center flex-column text-center py-5">
              <h2 className="fw-bold">Welcome To Commercial Arm</h2>
              <h1 className="fw-bold text-uppercase mt-2">Wholesale</h1>
              <p className="mt-3 mb-3 px-2 px-md-5">
                Get access to bulk pricing, exclusive deals, and priority
                support by joining our wholesale program. <br />
                Whether you're a small business or a large retailer, we provide
                high-quality products at competitive prices.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 mb-4">
              <img
                src="assets/img/banner/video.png"
                className="img-fluid w-100 rounded"
                alt="Wholesale Video"
              />
            </div>
          </div>

          {/* Benefits Section */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              <div className="text-center mt-4 bg-white p-3 p-md-0 rounded-4 d-block d-md-none">
             
                <h1 className="fw-bold">Benefits of Joining Us</h1>
                <p className="mt-3 px-2">
                  Enjoy exclusive wholesale pricing with discounted rates on
                  bulk orders, ensuring maximum profitability for your business.
                  Benefit from priority support, with a dedicated customer
                  service team ready to assist our wholesale partners. Access a
                  wide product selection, offering a diverse range of
                  high-demand products to meet market needs. Rely on our robust
                  supply chain, ensuring timely deliveries and consistent stock
                  availability, so your business never faces interruptions.
                </p>
              </div>
              <div className="text-center mt-4 d-none d-md-block">
                {/* Normal background on larger screens */}
                <h1 className="fw-bold">Benefits of Joining Us</h1>
                <p className="mt-3 px-2 px-md-5">
                  Enjoy exclusive wholesale pricing with discounted rates on
                  bulk orders, ensuring maximum profitability for your business.
                  Benefit from priority support, with a dedicated customer
                  service team ready to assist our wholesale partners. Access a
                  wide product selection, offering a diverse range of
                  high-demand products to meet market needs. Rely on our robust
                  supply chain, ensuring timely deliveries and consistent stock
                  availability, so your business never faces interruptions.
                </p>
              </div>
            </div>
          </div>

          {/* Rules Section */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              <div className="text-center mt-5 bg-white p-3 p-md-0 rounded-4 d-block d-md-none">
                {/* White background only on small screens */}
                <h1 className="fw-bold">Rules & Conditions</h1>
                <p className="mt-3 px-2">
                  To join our wholesale program, businesses must meet the
                  minimum order quantity (MOQ) requirements, ensuring bulk
                  purchasing benefits. Wholesale partners are expected to resell
                  at competitive yet reasonable prices, maintaining market
                  stability. Compliance with branding and promotional guidelines
                  is essential to uphold brand integrity. Additionally, all
                  payments must be made as per agreed terms to ensure smooth
                  transactions and continued partnership.
                </p>
              </div>
              <div className="text-center mt-5 d-none d-md-block">
                {/* Normal background on larger screens */}
                <h1 className="fw-bold">Rules & Conditions</h1>
                <p className="mt-3 px-2 px-md-5">
                  To join our wholesale program, businesses must meet the
                  minimum order quantity (MOQ) requirements, ensuring bulk
                  purchasing benefits. Wholesale partners are expected to resell
                  at competitive yet reasonable prices, maintaining market
                  stability. Compliance with branding and promotional guidelines
                  is essential to uphold brand integrity. Additionally, all
                  payments must be made as per agreed terms to ensure smooth
                  transactions and continued partnership.
                </p>
              </div>
            </div>
          </div>

          {/* Register Button */}
          <div className="row ">
            <div className="col-12 text-center d-flex justify-content-center rounded">
              <button className="btn btn-custom-re mt-4 mb-5  text-center">
                Register
              </button>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
}

export default WholeSale;
