import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import { useNavigate } from "react-router-dom";

function Reselling() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <SEO titleTemplate="Collobaration" />
      <LayoutOne headerTop="visible">
        <div className="container-fluid reselling px-3">
          {/* Header Section */}
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center flex-column text-center py-5">
              <h2 className="fw-bold">Welcome To Commercial Arm</h2>
              <h1 className="fw-bold text-uppercase mt-2">Reselling</h1>
              <p className="mt-4 mb-3 px-2 px-md-5">
                Become a reseller and start your own business with minimal investment. <br />
                Our reselling program allows individuals and small businesses to sell our products and earn a profit.
              </p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-10">
              <img
                src="assets/img/banner/video.png"
                className="img-fluid w-100 rounded"
                alt="Reselling Visual"
              />
            </div>
          </div>

          {/* Benefits Section (Mobile & Desktop Split) */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              {/* Small screens with white bg and rounded edges */}
              <div className="text-center bg-white p-3 rounded-4 d-block d-md-none shadow-sm">
                <h1 className="fw-bold">Benefits of Joining Us</h1>
                <p className="mt-3 px-2">
                  As a reseller, you'll enjoy the flexibility of selling without holding inventory,
                  allowing you to start your business with minimal upfront investment.
                  You have the opportunity to earn profits on every sale, setting your own margins
                  to maximize earnings. The work model is flexible, enabling you to sell online or offline
                  at your convenience, and we provide marketing support to help boost your sales.
                </p>
              </div>
              {/* Desktop version */}
              <div className="text-center mt-5 d-none d-md-block">
                <h1 className="fw-bold">Benefits of Joining Us</h1>
                <p className="mt-3 px-2 px-md-5">
                  As a reseller, you'll enjoy the flexibility of selling without holding inventory,
                  allowing you to start your business with minimal upfront investment.
                  You have the opportunity to earn profits on every sale, setting your own margins
                  to maximize earnings. The work model is flexible, enabling you to sell online or offline
                  at your convenience, and we provide marketing support to help boost your sales.
                </p>
              </div>
            </div>
          </div>

          {/* Rules Section (Mobile & Desktop Split) */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              {/* Small screens with white bg and rounded edges */}
              <div className="text-center bg-white p-3 rounded-4 d-block d-md-none shadow-sm mt-4">
                <h1 className="fw-bold">Rules & Conditions</h1>
                <p className="mt-3 px-2">
                  Resellers must place orders through official channels and maintain fair pricing
                  to protect the brand’s integrity. Ethical marketing practices are required to build trust.
                  Compliance with local business regulations is expected for legal and responsible operations.
                </p>
              </div>
              {/* Desktop version */}
              <div className="text-center mt-5 d-none d-md-block">
                <h1 className="fw-bold">Rules & Conditions</h1>
                <p className="mt-3 px-2 px-md-5">
                  Resellers must place orders through official channels and maintain fair pricing
                  to protect the brand’s integrity. Ethical marketing practices are required to build trust.
                  Compliance with local business regulations is expected for legal and responsible operations.
                </p>
              </div>
            </div>
          </div>

          {/* Register Button */}
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <button className="btn btn-custom-re mt-4 px-5 py-2 mb-4"
               onClick={() => navigate("/login-register")}>
                Register
              </button>
            </div>
          </div>

          {/* Footer Image */}
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-md-10">
              <img
                src="assets/img/banner/video.png"
                className="img-fluid w-100 rounded"
                alt="Final Visual"
              />
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
}

export default Reselling;
