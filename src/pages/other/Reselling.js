import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import { useNavigate } from "react-router-dom";

function Reselling() {
  const navigate = useNavigate();

  const benefits = [
    {
      title: "100% Eco-Friendly Products",
      description:
        "We are the only E-commerce website that sells products made using 100% eco-friendly natural materials.",
      icon: <i class="bi bi-leaf"></i>,
    },
    {
      title: "High Market Demand",
      description:
        "High tendency to sell products due to being 100% handmade and eco-friendly, as consumers increasingly prefer sustainable options.",
      icon: <i class="bi bi-shop-window"></i>,
    },
    {
      title: "Unique Product Range",
      description:
        "Offers unique products not often seen in the global market, making it easy to promote and sell due to consumer curiosity.",
      icon: <i class="bi bi-basket2"></i>,
    },
    {
      title: "Social Impact",
      description:
        "Help people improve their lifestyle with eco-friendly products, addressing health and mental problems in today's busy society.",
      icon: <i class="bi bi-balloon-heart"></i>,
    },
    {
      title: "Community Support",
      description:
        "Support poor and small-scale producers in rural communities by contributing significantly to their economy.",
      icon: <i class="bi bi-people-fill"></i>,
    },
    {
      title: "Psychological Satisfaction",
      description:
        "Gain great psychological satisfaction from selling socially beneficial products beyond just economic benefits.",
      icon: <i class="bi bi-emoji-laughing"></i>,
    },
    {
      title: "Marketing Support",
      description:
        "Quality photos, product descriptions, and measurements provided for easy advertising on third-party websites.",
      icon: <i class="bi bi-headset"></i>,
    },
    {
      title: "Expert Guidance",
      description:
        "Our team provides necessary advice and support for product promotion with quick customer delivery.",
      icon: <i class="bi bi-graph-up-arrow"></i>,
    },
    {
      title: "Progressive Rewards",
      description:
        "Increase your percentage points by completing various milestones based on total product sales value.",
      icon: <i class="bi bi-trophy-fill"></i>,
    },
  ];

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
                Become a reseller and start your own business with minimal
                investment. <br />
                Our reselling program allows individuals and small businesses to
                sell our products and earn a profit.
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

          {/* Benefits Section */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              {/* Mobile version - Card style */}
              <div className="d-block d-md-none">
                <div className="text-center bg-white p-4 rounded-4 shadow-sm mb-4">
                  <h1 className="fw-bold mb-4 text-success">
                    Benefits of Joining Us
                  </h1>
                  <div className="benefits-mobile">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="benefit-item-mobile mb-3 p-3 border-start border-primary border-3"
                      >
                        <div className="d-flex align-items-start">
                          <span className="benefit-icon me-3 fs-4">
                            {benefit.icon}
                          </span>
                          <div className="text-start">
                            <h6 className="fw-bold text-dark mb-2">
                              {benefit.title}
                            </h6>
                            <p className="small text-muted mb-0">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop version - Grid layout */}
              <div className="d-none d-md-block">
                <div className="text-center mt-5">
                  <h1 className="fw-bold mb-5 text-dark">
                    Benefits of Joining Us
                  </h1>
                  <div className="row g-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="col-md-4 col-lg-4">
                        <div className="benefit-card h-100 p-4 bg-white rounded-4 shadow-sm border-0 hover-lift">
                          <div className="benefit-icon-large text-center mb-3">
                            <span className="fs-1">{benefit.icon}</span>
                          </div>
                          <h5 className="fw-bold text-dark mb-3 text-center">
                            {benefit.title}
                          </h5>
                          <p className="text-muted small text-center mb-0">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
<div className="row justify-content-center mt-5">
  <div className="col-12 col-md-10">
    {/* Reseller Levels - Card style */}
    <div className="text-center bg-white p-4 rounded-4 shadow-sm mb-4">
      <h1 className="fw-bold mb-4 text-success">Reseller Selling Levels</h1>
      <div className="row g-4">
        {/* Basic Level - Small Card */}
        <div className="col-12 col-md-3">
          <div className="level-card basic-level p-4 rounded-4 shadow-sm">
            <div className="level-icon mb-3">
              <i className="bi bi-person-circle fs-3 text-primary"></i>
            </div>
            <h5 className="fw-bold text-dark mb-3">Basic Level</h5>
            <p className="text-muted mb-2">Start your journey as a reseller</p>
            <p className="text-dark fw-bold">No commission</p>
            <p className="small text-muted">Reach Silver to unlock more benefits</p>
          </div>
        </div>

        {/* Silver Level - Larger Card */}
        <div className="col-12 col-md-3">
          <div className="level-card silver-level p-4 rounded-4 shadow-sm">
            <div className="level-icon mb-3">
              <i className="bi bi-trophy fs-3 text-warning"></i>
            </div>
            <h5 className="fw-bold text-dark mb-3">Silver Level</h5>
            <p className="text-muted mb-2">Reach $500 in sales</p>
            <p className="text-dark fw-bold">5% commission</p>
            <p className="small text-muted">Unlock more benefits as you grow</p>
          </div>
        </div>

        {/* Gold Level - Larger Card */}
        <div className="col-12 col-md-3">
          <div className="level-card gold-level p-4 rounded-4 shadow-sm">
            <div className="level-icon mb-3">
              <i className="bi bi-gem fs-3 text-warning"></i>
            </div>
            <h5 className="fw-bold text-dark mb-3">Gold Level</h5>
            <p className="text-muted mb-2">Reach $1000 in sales</p>
            <p className="text-dark fw-bold">10% commission</p>
            <p className="small text-muted">Enjoy higher rewards for sales</p>
          </div>
        </div>

        {/* Platinum Level - Largest Card */}
        <div className="col-12 col-md-3">
          <div className="level-card platinum-level p-4 rounded-4 shadow-sm">
            <div className="level-icon mb-3">
              <i className="bi bi-crown fs-3 text-dark"></i>
            </div>
            <h5 className="fw-bold text-dark mb-3">Platinum Level</h5>
            <p className="text-muted mb-2">Reach $2000 in sales</p>
            <p className="text-dark fw-bold">15% commission</p>
            <p className="small text-muted">Exclusive offers and high rewards</p>
          </div>
        </div>
      </div>
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
                  Resellers must place orders through official channels and
                  maintain fair pricing to protect the brand's integrity.
                  Ethical marketing practices are required to build trust.
                  Compliance with local business regulations is expected for
                  legal and responsible operations.
                </p>
              </div>
              {/* Desktop version */}
              <div className="text-center mt-5 d-none d-md-block">
                <h1 className="fw-bold">Rules & Conditions</h1>
                <p className="mt-3 px-2 px-md-5">
                  Resellers must place orders through official channels and
                  maintain fair pricing to protect the brand's integrity.
                  Ethical marketing practices are required to build trust.
                  Compliance with local business regulations is expected for
                  legal and responsible operations.
                </p>
              </div>
            </div>
          </div>

          {/* Register Button */}
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <button
                className="btn btn-custom-re mt-4 px-5 py-2 mb-4"
                onClick={() => navigate("/login-register")}
              >
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
