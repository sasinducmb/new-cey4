import { EffectFade } from "swiper";
import Swiper, { SwiperSlide } from "../../components/swiper";
import sliderData from "../../data/hero-sliders/hero-slider-seventeen.json";
import HeroSliderSeventeenSingle from "../../components/hero-slider/HeroSliderSeventeenSingle.js";

const params = {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  modules: [EffectFade],
  loop: true,
  speed: 1000,
  navigation: true,
  autoHeight: false,
};

const HeroSliderSeventeen = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <div className="row">
        <div className="col-lg-6 col-md-12 text-start position-relative">
          <img
            src="assets/img/banner/butterfly.png" // Replace with your image URL
            alt="Sustainable Products"
            className="img-fluid position-absolute butterfly-image-small" // Adjust the position as needed
          />
          <h1 className="welcome-title">Welcome to Cey4Hub</h1>
          <h2 className="subtitle">Your Sustainable Shopping Destination</h2>
          <p className="description">
            "Discover Sustainability, Embrace Growth. Your<br></br> Eco-Friendly
            Home for Conscious Shopping."
          </p>
          <a href="/shop-grid-standard" className="btn btn-success mb-3">
            Shop Now
          </a>
          <img
            src="assets/img/banner/butterfly.png" // Replace with your image URL
            alt="Sustainable Products"
            className="img-fluid position-absolute butterfly-image-small-second" // Adjust the position as needed
          />
          <img
            src="assets/img/banner/butterfly.png" // Replace with your image URL
            alt="Sustainable Products"
            className="img-fluid position-absolute bottom-0 start-20 butterfly-image d-none d-md-block" // Hide on small screens
          />
        </div>
        <div className="col-lg-6 col-md-12">
          <img
            src="assets/img/banner/hero_image.png" // Replace with your image URL
            alt="Sustainable Products"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSliderSeventeen;
