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
        </div> */}

        <div className="container mt-5">
          <h1 className="text-center mb-4">About Us</h1>
          <p className="text-center">
            Our main goal is to create an environmentally friendly lifestyle by
            promoting renewable and bio-degradable solutions to the general
            public. We are focusing on this through various aspects and also we
            are building core values for that.
          </p>
          <div className="row mb-3">
            {/* video content */}
            <video width="100%" autoPlay loop>
              <source src="assets/img/video/0420.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
                  <h5 className="card-title mt-3">RESPECT FOR NATURE</h5>
                  <p className="card-text">
                    Respect for nature is about recognizing our deep connection
                    to the environment and taking responsibility for its
                    protection. We have been implementing business decisions
                    while protecting the ecosystem, promoting sustainability and
                    respecting nature.
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
                  <h5 className="card-title mt-3">STEWARDSHIP</h5>
                  <p className="card-text">
                    We provide clear leadership and responsibility in direct
                    outreach, and make available resources for investing in and
                    nurturing future generations. It is creating a healthy
                    environment and a moral society.
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
                  <h5 className="card-title mt-3">SUSTAINABILITY</h5>
                  <p className="card-text">
                    We plan for the needs of the present without compromising
                    the well-being of future generations. Sustainability is
                    about reducing waste, conserving resources, being efficient
                    and respecting nature, and working to create a healthier,
                    better lifestyle for all.
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
                  <h5 className="card-title mt-3">
                    REDUCED ENERGY CONSUMPTION
                  </h5>
                  <p className="card-text">
                    Our production process uses 100% natural resources, which
                    does not harm the environment, but we reduce the amount of
                    waste we throw away and use resources with maximum
                    efficiency and effectiveness by using new technology. This
                    has a significant positive impact on the environment.
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
                  <h5 className="card-title mt-3">ZERO WASTE</h5>
                  <p className="card-text">
                    Our concept uses environmentally friendly materials from the
                    beginning of production to the end of consumption, and waste
                    is kept to a minimum, with many items being reusable and
                    others being biodegradable without harming the environment.
                    Each of our small efforts makes a huge positive contribution
                    to the future of
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
                  <h5 className="card-title mt-3">
                    Sustainable Transport & Packaging
                  </h5>
                  <p className="card-text">
                    Efficient public transportation and environmentally friendly
                    packaging are often used from the time goods are produced to
                    the time they reach the consumer. Every step towards
                    sustainable mobility contributes to a more resilient and
                    environmentally responsible future
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
                  <h5 className="card-title mt-3">
                    Local and Sustainable Food
                  </h5>
                  <p className="card-text">
                    Due to a busy lifestyle, we are prone to major health and
                    disease problems due to their  tendency towards simple and
                    artificial food patterns. Therefore, the aim is to create a
                    healthy human resource by adopting a non-artificial, local
                    and healthy food pattern that is free from toxins and
                    pesticides.
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
                  <h5 className="card-title mt-3">
                    Natural Habitats and Wildlife
                  </h5>
                  <p className="card-text">
                    Our concept uses environmentally friendly materials from the
                    beginning of production to the end of consumption, and waste
                    is kept to a minimum, with many items being reusable and
                    others being biodegradable without harming the environment.
                    Each of our small efforts makes a huge positive contribution
                    to the future of society
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
                  <h5 className="card-title mt-3">Culture and Heritage</h5>
                  <p className="card-text">
                    This concept, in production and other actions, protects and
                    respects the past values, culture, heritage, language, art,
                    customs, and traditions inherited by humanity, giving
                    respect to human history and creating a deep understanding
                    for future generations.
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
