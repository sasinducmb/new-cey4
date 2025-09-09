import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import BannerOne from "../../wrappers/banner/BannerOne";
import TextGridOne from "../../wrappers/text-grid/TextGridOne";
import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import { node } from "prop-types";
// import backgroundImage from '../../../public/assets/img/banner/new-about-back.png';
const About = () => {
  let { pathname } = useLocation();
  const backgroundImagePath = `${process.env.PUBLIC_URL}/assets/img/banner/new-about-back.png`;
  const backgroundImagePathback = `${process.env.PUBLIC_URL}/assets/img/banner/back.png`;
  return (
    <Fragment>
      <SEO
        titleTemplate="About us"
        description="About page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        {/* <Breadcrumb
          pages={[
            { label: 'Home', path: process.env.PUBLIC_URL + '/' },
            { label: 'About us', path: process.env.PUBLIC_URL + pathname },
          ]}
        /> */}
        {/* <div className="about-banner"></div> */}
        {/* section title with text */}
        {/* <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" /> */}
        {/* banner */}
        {/* <BannerOne spaceBottomClass="pb-70" /> */}
        {/* text grid */}
        {/* <TextGridOne spaceBottomClass="pb-70" /> */}
        {/* fun fact */}
        {/* <FunFactOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
          bgClass="bg-gray-3"
        /> */}
        {/* team member */}
        {/* <TeamMemberOne spaceTopClass="pt-10" spaceBottomClass="pb-20" /> */}
        {/* brand logo slider */}
        {/* <BrandLogoSliderOne spaceBottomClass="pb-70" /> */}
        {/* <div className="container-fluid border">
          <div className="row">
            <img
              src="assets/img/banner/about-banner.png"
              alt="Respect for Nature"
              className="img-fluid"
            />
          </div>
        </div> */}{" "}
        {/* <div className="container-fluid border p-0">
          <img
            src="assets/img/banner/newAboutUs.png"
            alt="Butterfly Decoration"
            className="img-fluid w-100 rounded-0"
          />
          
        </div> */}
        <div className="row ">
          {/* video content */}
          <video width="100%" autoPlay loop>
            <source src="assets/img/video/new.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container mt-5 ">
          {/* <h1 className="text-center mb-4 fw-bold">About Us</h1> */}

          <p className="text-center">
            Our main goal is to create an environmentally friendly lifestyle by
            promoting renewable and bio-degradable solutions to the general
            public. We are focusing on this through various aspects and also we
            are building core values for that.
          </p>
          <div class="container mt-5 ">
            <div class="row mb-4">
              <div class="col-md-6">
                <div
                  class="card text-white gradient-background mb-4 h-100 "
                  style={{ border: "none" }}
                >
                  <h3 className="text-center mt-4 fw-bold">Vision</h3>

                  <div class="card-body">
                    <p class="card-text vesion-card">
                      We envision a future where sustainable consumerism is the
                      standard, and every purchase contributes to a healthier
                      planet. Our retail arm, cey4hub, aims to be the go-to
                      destination for individuals seeking high-quality,
                      eco-friendly goods, fostering a community that celebrates
                      responsible living and champions innovation in sustainable
                      practices.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div
                  class="card text-white gradient-background mb-3 h-100"
                  style={{ border: "none" }}
                >
                  <h3 className="text-center mt-4 fw-bold">Mission</h3>

                  <div class="card-body">
                    <p class="card-text vesion-card">
                      Our mission is to empower consumers to make informed
                      choices by providing an ethically sourced selection of
                      eco-friendly products that prioritise sustainability,
                      ethical sourcing, and minimal environmental impact. We are
                      dedicated to fostering a conscious consumer culture that
                      values the health of our planet and communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-6 mb-4 d-flex">
              <div className="card about-card h-100">
                <div className="card-body">
                  <img
                    src="assets/img/banner/about-img-one.png"
                    alt="Respect for Nature"
                    className="img-fluid"
                  />
                  <h5 className="card-title-ab mt-3">RESPECT FOR NATURE</h5>
                  <p className="card-text">
                    We value our connection to nature by making responsible
                    business decisions that protect the environment and promote
                    sustainability.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4 d-flex">
              <div className="card about-card h-100">
                <div className="card-body">
                  <img
                    src="assets/img/banner/about-img-two.png"
                    alt="Stewardship"
                    className="img-fluid"
                  />
                  <h5 className="card-title-ab mt-3">STEWARDSHIP</h5>
                  <p className="card-text">
                  We lead with purpose, offering support and resources to empower future generations and build a healthy, ethical society.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card about-card h-100">
                <div className="card-body">
                  <img
                    src="assets/img/banner/about-img-three.png"
                    alt="Sustainability"
                    className="img-fluid"
                  />
                  <h5 className="card-title-ab mt-3">SUSTAINABILITY</h5>
                  <p className="card-text">
                  We meet today's needs responsibly, ensuring a sustainable future through efficiency, conservation, and respect for nature
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card about-card h-100">
                <div className="card-body">
                  <img
                    src="assets/img/banner/about-img-four.png"
                    alt="Reduced Energy Consumption"
                    className="img-fluid"
                  />
                  <h5 className="card-title-ab mt-3">
                    REDUCED ENERGY CONSUMPTION
                  </h5>
                  <p className="card-text">
                  We use 100% natural resources and advanced technology to minimize waste and maximize efficiency, positively impacting the environment
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card about-card h-100">
                <div className="card-body">
                  <img
                    src="assets/img/banner/about-img-zero.png"
                    alt="Zero Waste"
                    className="img-fluid"
                  />
                  <h5 className="card-title-ab mt-3">ZERO WASTE</h5>
                  <p className="card-text">
                  From production to consumption, we use eco-friendly, reusable, and biodegradable materials, minimizing waste and contributing to a sustainable future
                  </p>
                </div>
              </div>
            </div>
            {/* 3rd row */}
            <div className="col-md-3 mb-4">
              <div className="card about-card h-100">
                <div className="card-body">
                  <img
                    src="assets/img/banner/about-img-five.png"
                    alt="Zero Waste"
                    className="img-fluid"
                  />
                  <h5 className="card-title-ab mt-3">
                    Sustainable Transport & Packaging
                  </h5>
                  <p className="card-text">
                  We use eco-friendly transport and packaging from production to delivery, promoting sustainable mobility for a greener future.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card about-card h-100">
                <div className="card-body">
                  <img
                    src="assets/img/banner/about-img-six.png"
                    alt="Zero Waste"
                    className="img-fluid"
                  />
                  <h5 className="card-title-ab mt-3">
                    Local and Sustainable Food
                  </h5>
                  <p className="card-text">
                  Busy lifestyles and artificial diets harm our health, so we promote clean, local, and toxin-free food for a healthier future.
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-3 mb-4">
              <div className="card about-card h-100">
                <div className="card-body">
                  <img
                    src="assets/img/banner/about-img-sevent.png"
                    alt="Zero Waste"
                    className="img-fluid"
                  />
                  <h5 className="card-title-ab mt-3">
                    Natural Habitats and Wildlife
                  </h5>
                  <p className="card-text">
                  We use eco-friendly, reusable, and biodegradable materials from start to finish, minimizing waste and making a positive impact on society’s future.
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-3 mb-4">
              <div className="card about-card h-100">
                <div className="card-body">
                  <img
                    src="assets/img/banner/about-img-eight.png"
                    alt="Zero Waste"
                    className="img-fluid"
                  />
                  <h5 className="card-title-ab mt-3">Culture and Heritage</h5>
                  <p className="card-text">
                  Our approach honors cultural heritage and traditions, preserving human history and passing its value to future generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default About;
