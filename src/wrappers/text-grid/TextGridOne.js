import PropTypes from "prop-types";
import clsx from "clsx";
import textGridData from "../../data/text-grid/text-grid-one.json";
import TextGridOneSingle from "../../components/text-grid/TextGridOneSingle.js";

const TextGridOne = ({ spaceBottomClass }) => {
  return (
    <div className={clsx('about-mission-area', spaceBottomClass)}>
      <div className="container">
        {/* Vision Section */}
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="vision-content">
              <h2>Our Vision</h2>
              <p>
                We envision a future where sustainable consumerism is the
                standard, and every purchase contributes to a healthier planet.
                Our retail arm Cey4Hub aims to be the go-to destination for
                individuals seeking high-quality, eco-friendly goods, fostering
                a community that celebrates responsible living and champions
                innovation in sustainable practices.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="vision-image">
              <img
                src="/assets/img/banner/vision.jpg"
                alt="Vision"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="row align-items-center mt-4">
          <div className="col-lg-6 col-md-6">
            <div className="mission-image">
              <img
                src="/assets/img/banner/mission.jpg"
                alt="Mission"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>
                Our mission is to empower consumers to make informed choices by
                providing an ethically sourced selection of eco-friendly
                products that prioritise sustainability, ethical sourcing, and
                minimal environmental impact. We are dedicated to fostering a
                conscious consumer culture that values the health of our planet
                and communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TextGridOne.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default TextGridOne;
