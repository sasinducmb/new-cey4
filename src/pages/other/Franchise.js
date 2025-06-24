import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";

function Franchise() {
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
                <b>Franchise</b>
              </h1>
              <p className="text-center mt-3 mb-3">
                Join our franchise network and operate under our trusted brand.
                Gain access to a proven business model, full support, and
                exclusive benefits.
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
                  As a franchise partner, you'll benefit from brand recognition
                  by operating under a well-established and trusted name in the
                  market. You'll receive comprehensive business support,
                  including training, marketing assistance, and operational
                  guidance to help ensure your success. The program also offers
                  an exclusive territory, giving you a competitive edge and a
                  protected market area. With our proven business model, the
                  profitability potential is high, giving you the opportunity to
                  build a sustainable, rewarding business with the backing of a
                  strong brand.
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
                  Becoming a franchise partner requires an initial investment
                  and franchise fee, ensuring access to our established brand
                  and business model. Franchisees must adhere to company
                  policies and branding guidelines to maintain consistency and
                  reputation. A strong commitment to quality and customer
                  service is essential to uphold our standards and customer
                  trust. Additionally, active participation in business
                  operations is expected to ensure smooth management and
                  long-term success.
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

export default Franchise;
