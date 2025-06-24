import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";

function WholeSale() {
  return (
    <Fragment>
      <SEO titleTemplate="Collobaration" />
      <LayoutOne headerTop="visible">
        <div className="container-fluid reselling">
          <div className="row ">
            <div className="col-md-12 d-flex justify-content-center align-items-center flex-column">
              <h2 className="mt-5">Welcome To Commercial Arm </h2>
              <h1>
                {" "}
                <b>Wholesale</b>
              </h1>
              <p className="text-center mt-3 mb-3">
                Get access to bulk pricing, exclusive deals, and priority
                support by joining our wholesale program.<br></br> Whether you're a small
                business or a large retailer, we provide high-quality products
                at competitive prices.
              </p>
            </div>
          </div>
          <div>
            <div className="row d-flex justify-content-center align-items-center mt-3">
              <div className="col-md-10 ">
                <img
                  src="assets/img/banner/video.png"
                  className="d-block w-100 rounded-0"
                  alt="First slide"
                />
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center mt-3">
            <div className="col-md-10">
              <div className="text-center mt-5">
                <h1>
                  {" "}
                  <b>Benefits of Joining Us</b>
                </h1>
                <p className="text-center mt-3">
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
          <div className="row d-flex justify-content-center align-items-center mt-3">
            <div className="col-md-10">
              <div className="text-center mt-3">
                <h1>
                  {" "}
                  <b>Rules & Conditions</b>
                </h1>
                <p className="text-center mt-3">
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

          <div className="row d-flex justify-content-center align-items-center">
            <button className="btn btn-custom-re d-flex justify-content-center mt-4 mb-3">
              Register
            </button>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
}

export default WholeSale;
