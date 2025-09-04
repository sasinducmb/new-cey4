import { EffectFade } from "swiper";
import Swiper, { SwiperSlide } from "../../components/swiper";

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
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
};

const HeroSliderSeventeen = () => {
  // Array of 4 image objects for the carousel
  const carouselMedia = [
    {
      id: 1,
      type: "image",
      source: "assets/img/banner/product2.png",
      alt: "Sustainable Products 1"
    },
    {
      id: 2,
      type: "image",
      source: "assets/img/banner/product02.png",
      alt: "Sustainable Products 2"
    },
    {
      id: 3,
      type: "video",
      source: "assets/img/video/webbaanner.mp4", // Replace with your actual animation video path
      // Optional: A poster image for the video
    }
  ];


  return (
    <div className="hero-slider-area">
      <div className="container">
        <div className="row align-items-center">
          {/* Left column content */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="hero-content-wrapper position-relative">
              <img
                src="assets/img/banner/butterfly.png"
                alt="Butterfly Decoration"
                className="img-fluid position-absolute butterfly-image-small"
               
              />
              
              <h1 className="welcome-title mb-3">Welcome to Cey4Hub</h1>
              <h2 className="subtitle mb-3">Your Sustainable Shopping Destination</h2>
              <p className="description mb-4">
                "Discover Sustainability, Embrace Growth. Your<br />
                Eco-Friendly Home for Conscious Shopping."
              </p>
              
              <a href="/shop-grid-standard" className="btn btn-success btn-lg mb-3">
                Shop Now
              </a>
              
              <img
                src="assets/img/banner/butterfly.png"
                alt="Butterfly Decoration"
                className="img-fluid position-absolute butterfly-image-small-second"
             
              />
              
              <img
                src="assets/img/banner/butterfly.png"
                alt="Butterfly Decoration"
                className="img-fluid position-absolute butterfly-image d-none d-md-block"
               
              />
            </div>
          </div>
          
          {/* Right column with image carousel */}
          <div className="col-lg-6 col-md-12">
            <div className="hero-slider-container">
            <Swiper options={params}>
                {carouselMedia.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="hero-slide-item">
                      {item.type === "image" ? (
                        <img
                          src={item.source}
                          alt={item.alt}
                          className="img-fluid"
                        />
                      ) : (
                        <video
                          className="img-fluid"
                          autoPlay
                          muted
                          loop
                          playsInline
                          poster={item.poster}
                        >
                          <source src={item.source} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSliderSeventeen;