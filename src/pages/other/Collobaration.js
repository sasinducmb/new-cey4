import { Fragment, useState } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import { useNavigate } from "react-router-dom";
import WholeSale from "./WholeSale";
function Collobaration() {
  const navigate = useNavigate();
  const [detailsOpen, setDetailsOpen] = useState(false);
  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  };
  const goToReselling = () => {
    setDetailsOpen(!detailsOpen);
    navigate("/reselling");
  };

  const goToFranchise = () => {
    setDetailsOpen(!detailsOpen);
    navigate("/franchise");
  };
  const goToWholeSale = () => {
    setDetailsOpen(!detailsOpen);
    navigate("/wholesale");
  };
  return (
    <Fragment>
      <SEO titleTemplate="Collobaration" />
      <LayoutOne headerTop="visible">
        <div className="container-fluid position-relative">
          <div className="row">
            <div className="col-md-12 border p-0 position-relative">
              {/* Background Image */}
              <img
                src="assets/img/banner/Collobaration.png"
                className="d-block w-100 rounded-0"
                alt="First slide"
              />

              {/* Transparent Box Overlay */}
              <div className="overlay-box d-flex align-items-center justify-content-center Transparent flex-column">
                <h1 style={{ fontWeight: 600 }}>Welcome To Commercial Arm </h1>
                <p>
                  {" "}
                  <b>
                    New Eco-friendly Handmade, High Quality product collection
                    of cey4hub
                  </b>
                </p>
                <button className="btn btn-custom-com">
                  Discovery our collection
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row d-flex jjustify-content-between align-items-center mt-5">
            <div className="col-md-4 text-center">
              <div className="card-custom text-center">
                <div className="card-title mt-2">WHOLESALE</div>
                <button
                  onClick={goToWholeSale}
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
                  onClick={goToReselling}
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
                <div className="card-title mt-2">FRANCHISE</div>
                <button
                  onClick={goToFranchise}
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
