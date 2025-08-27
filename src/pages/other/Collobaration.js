import { Fragment, useState } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import { useNavigate } from "react-router-dom";
 // Custom CSS

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
                <h1 className="hero-title">Welcome To Commercial Arm</h1>
                <p className="hero-subtitle">
                  <b>
                    New Eco-friendly Handmade, High Quality product collection
                    of Cey4Hub
                  </b>
                </p>
                <button className="btn btn-custom-com mt-2 hero-btn">
                  Discover our collection
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="intro-section mt-5">
          <h1>Why Choose Us</h1>
          <p className="intro-text text-center px-3 px-md-5">
            You are all welcome to the Cey4Hub website. This platform has been created to provide great business opportunities. It is designed for sellers across different economic levels to engage with us. The specialty of this platform is that it is the only e-commerce website offering 100% eco-friendly raw materials and handmade products. In today's economic landscape, consumers are more inclined towards environmentally friendly and high-quality products, making this platform an ideal choice for businesses looking to capitalize on this growing trend.
          </p>
        </div>

        {/* Your existing content */}
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
                  <i className={`dropdown-arrow ${detailsOpen ? "open" : ""}`} />
                </button>
                <img
                  src="assets/img/banner/leaf-col.png"
                  className="img-fluid mt-3 card-img"
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
                  <i className={`dropdown-arrow ${detailsOpen ? "open" : ""}`} />
                </button>
                <img
                  src="assets/img/banner/leaf-col.png"
                  className="img-fluid mt-3 card-img"
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
                  <i className={`dropdown-arrow ${detailsOpen ? "open" : ""}`} />
                </button>
                <img
                  src="assets/img/banner/leaf-col.png"
                  className="img-fluid mt-3 card-img"
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
