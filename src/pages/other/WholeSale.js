import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";

function WholeSale() {
  // Example benefits array (add this above your component)
const benefits = [
  {
    icon: <i class="bi bi-currency-pound"></i>,
    title: "Attractive Prices",
    description:
      "Enjoy exclusive wholesale pricing with discounted rates on bulk orders, ensuring maximum profitability for your business. Prices can be adjusted based on your order."
  },
  {
    icon: <i class="bi bi-gear"></i>,
    title: "Product Customization",
    description:
      "It is possible to discuss and customize the products as you wish, ensuring they meet your exact needs."
  },
  {
    icon:<i class="bi bi-leaf"></i> ,
    title: "Eco-Friendly & Handmade",
    description:
      "Since only eco-friendly and handmade products are available, marketing and promotion become much easier."
  },
  {
    icon: <i class="bi bi-headset"></i>,
    title: "Dedicated Support",
    description:
      "Benefit from priority support with a strong understanding of your business. Our team is always ready to discuss and provide excellent services."
  },
  {
    icon: <i class="bi bi-boxes"></i>,
    title: "Reliable Supply Chain",
    description:
      "Rely on our robust supply chain for timely deliveries and consistent stock availability, so your business never faces interruptions."
  },
  {
    icon:<i class="bi bi-graph-up-arrow"></i>,
    title: "Third-Party Business Services",
    description:
      "We provide business knowledge, advice, and technical facilities such as Accounting, Audit & Tax, Web Development, Social Media Marketing, and Content Creation through trusted third-party providers."
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
              <h1 className="fw-bold text-uppercase mt-2">Wholesale</h1>
              <p className="mt-4 mb-3 px-2 px-md-5 lead text-center text-dark" style={{lineHeight: '1.6'}}>
                Wholesale is the process of purchasing goods in large quantities
                directly from manufacturers and distributors and selling them to
                retailers, resellers or other businesses rather than to end
                consumers.The main advantage of bulk purchasing is the reduction
                in unit costs, as bulk purchases offer significant discounts.
                Therefore, if you are someone who is looking to start a business
                or is already running a business, we have provided a great
                opportunity for you to contact us and place an order at
                wholesale prices to increase the profits of your business.
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
            </div>
          </div>

          {/* Rules Section */}
          {/* <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              <div className="text-center mt-5 bg-white p-3 p-md-0 rounded-4 d-block d-md-none">
              
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
          </div> */}

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
