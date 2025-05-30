import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const FooterCopyright = ({ footerLogo, spaceBottomClass, colorClass }) => {
  return (
    <div className={clsx('copyright', spaceBottomClass, colorClass)}>
      <div className="footer-logo">
        <Link to={process.env.PUBLIC_URL + '/'}>
          <img
            style={{ width: '150px' }}
            alt=""
            src={process.env.PUBLIC_URL + footerLogo}
          />
        </Link>
      </div>
      <p>
        &copy; {new Date().getFullYear()}{' '}
        <a
          href="https://cey4hub.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Cey4Hub
        </a>
        .<br /> All Rights Reserved
      </p>
    </div>
  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string
};

export default FooterCopyright;
