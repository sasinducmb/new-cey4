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
          titleText="Daily Deals"
          positionClass="text-center"
          borderClass="no-border"
        />
        <div className="row">
          <ProductGrid
            // category={category} // Uncomment and define `category` if needed
            // type="new"          // Uncomment if a specific type is required
            
            start={0}
            end={8}
            spaceBottomClass="mb-25"
          />
        </div>
        {/* <div>
          <h2>banner</h2>
        </div> */}
        <div className="row">
          <ProductGrid
            // category={category} // Uncomment and define `category` if needed
            // type="new"          // Uncomment if a specific type is required
            start={9}
            end={17}
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
