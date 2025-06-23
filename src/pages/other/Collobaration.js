import { Fragment, useState } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
function Collobaration() {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  };
  return (
    <Fragment>
      <SEO titleTemplate="Collobaration" />
      <LayoutOne headerTop="visible">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 border ">
              <img
                src="assets/img/banner/Collobaration.png"
                className="d-block w-100 rounded-0"
                alt="First slide"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="card-custom text-center">
                <div className="card-title mt-2">WHOLESALE</div>
                <button
                  onClick={toggleDetails}
                  className="btn btn-custom mt-4"
                  aria-expanded={detailsOpen}
                  aria-controls="details-content"
                >
                  Details
                  <i
                    className={`dropdown-arrow ${detailsOpen ? "open" : ""}`}
                  />
                </button>
                {/* Leaves SVG Icon */}
                <img
                  src="assets/img/banner/leaf-col.png"
                  className="d-block w-100 rounded-0"
                  alt="First slide"
                />
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="card-custom text-center">
                <div className="card-title mt-2">RESELLING</div>
                <button
                  onClick={toggleDetails}
                  className="btn btn-custom mt-4"
                  aria-expanded={detailsOpen}
                  aria-controls="details-content"
                >
                  Details
                  <i
                    className={`dropdown-arrow ${detailsOpen ? "open" : ""}`}
                  />
                </button>
                {/* Leaves SVG Icon */}
                <img
                  src="assets/img/banner/leaf-col.png"
                  className="d-block w-100 rounded-0"
                  alt="First slide"
                />
              </div>
            </div><div className="col-md-4 text-center">
              <div className="card-custom text-center">
                <div className="card-title mt-2">FRANCHISE</div>
                <button
                  onClick={toggleDetails}
                  className="btn btn-custom mt-4"
                  aria-expanded={detailsOpen}
                  aria-controls="details-content"
                >
                  Details
                  <i
                    className={`dropdown-arrow ${detailsOpen ? "open" : ""}`}
                  />
                </button>
                {/* Leaves SVG Icon */}
                <img
                  src="assets/img/banner/leaf-col.png"
                  className="d-block w-100 rounded-0"
                  alt="First slide"
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
}

export default Collobaration;
