import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";

function Franchise() {
  const benefits = [
    {
      icon: <i class="bi bi-currency-pound"></i>,
      title: "Attractive Prices",
      description:
        "Enjoy attractive prices and easy terms & conditions, making it simple to start and grow your business.",
    },
    {
      icon: <i class="bi bi-graph-down-arrow"></i>,
      title: "Low Risk",
      description:
        "Run your business with reduced risk by operating under a proven and supportive framework.",
    },
    {
      icon: <i class="bi bi-tag"></i>,
      title: "Recognized Brand",
      description:
        "Easier to sell products due to operating under a recognized brand, building consumer trust quickly.",
    },
    {
      icon: <i class="bi bi-headset"></i>,
      title: "Franchisor Support",
      description:
        "Receive training, marketing, merchandising strategies, and operational support to grow your business faster.",
    },
    {
      icon: <i class="bi bi-cash-coin"></i>,
      title: "Easier Financing",
      description:
        "Benefit from easier access to financing due to working with an established and trusted brand.",
    },
    {
      icon:<i class="bi bi-gear-fill"></i>,
      title: "Product Customization",
      description:
        "Have the flexibility to discuss and customize products according to your requirements.",
    },
    {
      icon: <i class="bi bi-graph-up-arrow"></i>,
      title: "Third-Party Business Services",
      description:
        "Access business knowledge, advice, and technical facilities such as Accounting, Audit & Tax, Web Development, Social Media Marketing, and Content Creation through trusted third-party providers.",
    },
  ];

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
              <p
                className="mt-4 mb-3 px-2 px-md-5 lead text-center text-dark "
                style={{ lineHeight: "1.6" }}
              >
                A franchise is the granting of rights by an established trading
                company to an individual or company to operate a business using
                the name, brand, products, and business system under a created
                business model. Accordingly, the franchisee was obligated to pay
                a fee to the franchisor on an ongoing basis to the mother
                company. This model allowed an individual to start and run a
                business under a successful brand name. Therefore, we offer you
                a great opportunity to run your business profitably using the
                brand we have built over many years in the global marketplace,
                based on customer trust and quality and environmental
                friendliness.
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

          {/* Rules Section */}
          {/* <div className="row justify-content-center">
            <div className="col-12 col-md-10">
          
              <div className="text-center bg-white p-3 rounded-4 shadow-sm d-block d-md-none mt-4">
                <h1 className="fw-bold">Rules & Conditions</h1>
                <p className="mt-3 px-2">
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

    
              <div className="text-center mt-5 d-none d-md-block">
                <h1 className="fw-bold">Rules & Conditions</h1>
                <p className="mt-3 px-2 px-md-5">
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
          </div> */}

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
