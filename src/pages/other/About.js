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

        <div className="container-fluid p-0">
          <div className="about-us-container">
            <div className="header text-center mb-4">
              <h1 className="fw-bold">About Us</h1>
              <p className="text-center mx-auto" style={{ maxWidth: "600px" }}>
                Welcome to GeyHub - your trusted destination for eco-friendly
                and sustainable products. We are driven by a passion to build a
                greener future by offering high-quality goods that not only
                cater to your needs but also contribute positively to the
                environment.
              </p>
            </div>

            <div className="row justify-content-center mb-5">
              <div className="col-md-8">
                <div className="row"  style={{ backgroundImage: `url(${backgroundImagePathback})`,height:'500px' }}>

                <div className="col-md-5 d-flex justify-content-center align-items-center">
                <div className="card-body p-4">
                    <h2 className="card-title text-center mb-4 text-success">
                      Our Vision
                    </h2>
                    <p className="card-text text-center">
                      We envision a world where environmental consciousness is
                      the standard, and every purchase contributes to a
                      healthier planet. Our ideal care economy recognizes the
                      role of businesses and individuals welfare high-quality,
                      eco-friendly, and ethically produced goods. Through
                      responsible trade and innovative innovations in
                      sustainability.
                    </p>
                  </div>
                </div>
                <div className="col-md-7">

                <div
                  className="card vision-card"
                  style={{ backgroundImage: `url(${backgroundImagePath})` }}
                >
                  
                </div>
                </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mb-5">
              <div className="col-md-8">
                <div className="row"  style={{ backgroundImage: `url(${backgroundImagePathback})`,height:'500px' }}>

                <div className="col-md-5 d-flex justify-content-center align-items-center">
                <div className="card-body p-4">
                    <h2 className="card-title text-center mb-4 text-success">
                    Our Mission
                    </h2>
                    <p className="card-text text-center">
                    Our mission is to empower consumers to make informed
                      choices by providing ethically sourced, eco-friendly
                      products that promote sustainability, ethical sourcing,
                      and minimal environmental impact. We're dedicated to
                      transparency, education, and safeguarding the health of
                      our planet and communities.
                    </p>
                  </div>
                </div>
                <div className="col-md-7">

                <div
                  className="card vision-card"
                  style={{ backgroundImage: `url(${backgroundImagePath})` }}
                >
                  
                </div>
                </div>
                </div>
              </div>
            </div>
            {/* <div className="row justify-content-center">
              <div className="col-md-8">
                
                <div className="card border-0 mission-card">
                  <div className="card-body p-4">
                    <h2 className="card-title text-center mb-4 text-success">
                      Our Mission
                    </h2>
                    <p className="card-text text-center">
                      Our mission is to empower consumers to make informed
                      choices by providing ethically sourced, eco-friendly
                      products that promote sustainability, ethical sourcing,
                      and minimal environmental impact. We're dedicated to
                      transparency, education, and safeguarding the health of
                      our planet and communities.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default About;
