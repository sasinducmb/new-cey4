import PropTypes from "prop-types";
import clsx from "clsx";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx('welcome-area', spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To Cey4Hub</h1>
          <p>
            Welcome to Cey4hub – your trusted destination for eco-friendly and
            sustainable products. We are driven by a passion to build a greener
            future by offering high-quality goods that not only cater to your
            needs but also contribute positively to the environment.
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
