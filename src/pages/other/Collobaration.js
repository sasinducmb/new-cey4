import { Fragment, useState } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import { useNavigate } from "react-router-dom";

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
        <div className="container-fluid position-relative p-0">
          <div className="row m-0">
            <div className="col-12 p-0">
              <img
                src="assets/img/banner/Collobaration.png"
                className="img-fluid w-100 banner-img"
                alt="Collaboration Banner"
              />
              <div className="overlay-box d-flex align-items-center justify-content-center flex-column text-center Transparent ">
                <h1 style={{ fontWeight: 600 }} className="">Welcome To Commercial Arm</h1>
                <p>
                  <b>
                    New Eco-friendly Handmade, High Quality product collection
                    of cey4hub
                  </b>
                </p>
                <button className="btn btn-custom-com mt-2">
                  Discover our collection
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row justify-content-center g-4">
            {/* WHOLESALE */}
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div className="card-custom text-center w-100 p-3">
                <div className="card-title mt-2">WHOLESALE</div>
                <button
                  onClick={goToWholeSale}
                  className="btn btn-custom mt-4"
                  aria-expanded={detailsOpen}
                >
                  Details
                  <i
                    className={`dropdown-arrow ${detailsOpen ? "open" : ""}`}
                  />
                </button>
                <img
                  src="assets/img/banner/leaf-col.png"
                  className="img-fluid mt-3"
                  alt="Wholesale"
                />
              </div>
            </div>

            {/* RESELLING */}
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div className="card-custom text-center w-100 p-3">
                <div className="card-title mt-2">RESELLING</div>
                <button
                  onClick={goToReselling}
                  className="btn btn-custom mt-4"
                  aria-expanded={detailsOpen}
                >
                  Details
                  <i
                    className={`dropdown-arrow ${detailsOpen ? "open" : ""}`}
                  />
                </button>
                <img
                  src="assets/img/banner/leaf-col.png"
                  className="img-fluid mt-3"
                  alt="Reselling"
                />
              </div>
            </div>

            {/* FRANCHISE */}
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div className="card-custom text-center w-100 p-3">
                <div className="card-title mt-2">FRANCHISE</div>
                <button
                  onClick={goToFranchise}
                  className="btn btn-custom mt-4"
                  aria-expanded={detailsOpen}
                >
                  Details
                  <i
                    className={`dropdown-arrow ${detailsOpen ? "open" : ""}`}
                  />
                </button>
                <img
                  src="assets/img/banner/leaf-col.png"
                  className="img-fluid mt-3"
                  alt="Franchise"
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
