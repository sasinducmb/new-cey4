import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SectionTitle from "../../components/section-title/SectionTitle";
import ProductGrid from "./ProductGrid";

const TabProductTen = ({
  spaceTopClass,
  spaceBottomClass,
  bgColorClass,
  category,
}) => {
  return (
    <div
      className={clsx(
        "product-area",
        spaceTopClass,
        spaceBottomClass,
        bgColorClass
      )}
    >
      <div className="container">
        <SectionTitle
          titleText="Our Best-Selling Sustainable Products"
          positionClass="text-center"
          borderClass="no-border"
        />
        <div className="row">
          <ProductGrid
            // category={category} // Uncomment and define `category` if needed
            // type="new"          // Uncomment if a specific type is required

            start={0}
            end={4}
            spaceBottomClass="mb-25"
          />
        </div>
        {/* <div>
          <a href="/contact">
            <img
              src="/assets/img/banner/contact.jpg"
              alt="Contact Banner"
              width="100%"
              className="img-fluid"
              style={{ height: "450px" }}
            />
          </a>
        </div> */}
        <SectionTitle
          titleText="New Arrivals"
          positionClass="text-center"
          borderClass="no-border"
        />
        <div className="row">
          <ProductGrid
            // category={category} // Uncomment and define `category` if needed
            // type="new"          // Uncomment if a specific type is required
            start={5}
            end={8}
            spaceBottomClass="mb-25"
          />
        </div>
      </div>
    </div>
  );
};

TabProductTen.propTypes = {
  bgColorClass: PropTypes.string,
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default TabProductTen;
