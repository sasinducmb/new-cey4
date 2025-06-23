import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";

function Reselling() {
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
                <b>RESELLING</b>
              </h1>
              <p className="text-center mt-5">
                Become a reseller and start your own business with minimal
                investment. <br></br>Our reselling program allows individuals
                and small businesses to sell our products and earn a profit.
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
                  As a reseller, you'll enjoy the flexibility of selling without
                  holding inventory, allowing you to start your business with
                  minimal upfront investment. You have the opportunity to earn
                  profits on every sale, setting your own margins to maximize
                  earnings. The work model is flexible, enabling you to sell
                  online or offline at your convenience, and we provide
                  marketing support, including promotional materials, to help
                  boost your sales and visibility. With these benefits, our
                  reselling program makes it easy for you to grow a profitable
                  business with our trusted products.
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
                  For our reselling program, partners must place orders through
                  our official channels and ensure they maintain fair pricing to
                  protect the brand’s integrity. Ethical marketing and selling
                  practices are required to build trust and promote a positive
                  brand image. Resellers are also expected to comply with local
                  business regulations to operate legally and responsibly within
                  their markets.
                </p>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center align-items-center">
            <button className="btn btn-custom-re d-flex justify-content-center mt-4">
              Register
            </button>
          </div>
          <div className="row d-flex justify-content-center align-items-center mt-3">
            <div className="col-md-10 mb-5">
              <img
                src="assets/img/banner/video.png"
                className="d-block w-100 rounded-0"
                alt="First slide"
              />
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
}

export default Reselling;
