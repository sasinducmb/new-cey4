import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { EffectFade, Thumbs } from "swiper";
import AnotherLightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Swiper, { SwiperSlide } from "../../components/swiper";

const ProductImageGallery = ({ product, variationImage, colorImage }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [index, setIndex] = useState(-1);
  console.log(colorImage);

  const slides = variationImage
    ? [
        {
          src: `${process.env.REACT_APP_BACKEND_URL}/${variationImage.replace(
            /\\/g,
            "/"
          )}`,
          key: "variationImage",
        },
      ]
    : colorImage
    ? [
        {
          src: `${process.env.REACT_APP_BACKEND_URL}/${colorImage.replace(
            /\\/g,
            "/"
          )}`,
          key: "colorImage",
        },
      ]
    : [
        {
          src: `${
            process.env.REACT_APP_BACKEND_URL
          }/${product.mainImage.replace(/\\/g, "/")}`,
          key: "mainImage",
        },
        ...product.additionalImages.map((img, i) => ({
          src: `${process.env.REACT_APP_BACKEND_URL}/${img.replace(
            /\\/g,
            "/"
          )}`,
          key: `additional-${i}`,
        })),
      ];
  const variationImageUrl = variationImage
    ? `${process.env.REACT_APP_BACKEND_URL}/${variationImage.replace(
        /\\/g,
        "/"
      )}`
    : null;

  // Format colorImage URL properly (for debugging only now)
  const colorImageUrl = colorImage
    ? `${process.env.REACT_APP_BACKEND_URL}/${colorImage.replace(/\\/g, "/")}`
    : null;

  console.log(variationImageUrl);
  console.log("Color Image URL:", colorImageUrl);
  console.log(
    "Currently showing:",
    variationImage ? "variation" : colorImage ? "color" : "product"
  );

  // Swiper slider settings
  const gallerySwiperParams = {
    spaceBetween: 10,
    loop: true,
    navigation: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    thumbs: { swiper: thumbsSwiper },
    modules: [EffectFade, Thumbs],
  };

  const thumbnailSwiperParams = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: true,
  };

  return (
    <Fragment>
      <div className="product-large-image-wrapper">
        {product.discount || product.new ? (
          <div className="product-img-badges">
            {product.discount ? (
              <span className="pink">-{product.discount}%</span>
            ) : (
              ""
            )}
            {product.new ? <span className="purple">New</span> : ""}
          </div>
        ) : (
          ""
        )}
        {slides.length > 0 ? (
          <Swiper options={gallerySwiperParams}>
            {slides.map((slide, key) => (
              <SwiperSlide key={key}>
                <button
                  className="lightgallery-button"
                  onClick={() => setIndex(key)}
                >
                  <i className="pe-7s-expand1"></i>
                </button>
                <div className="single-image">
                  <img
                    src={slide.src}
                    className="img-fluid"
                    alt={product.name}
                  />
                </div>
              </SwiperSlide>
            ))}
            <AnotherLightbox
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              slides={slides}
              plugins={[Thumbnails, Zoom, Fullscreen]}
            />
          </Swiper>
        ) : null}
      </div>
      {!variationImage && (
        <div className="product-small-image-wrapper mt-15">
          {slides.length > 0 ? (
            <Swiper options={thumbnailSwiperParams}>
              {slides.map((slide, key) => (
                <SwiperSlide key={key}>
                  <div className="single-image">
                    <img
                      src={slide.src}
                      className="img-fluid"
                      alt={product.name}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}
        </div>
      )}
    </Fragment>
  );
};

ProductImageGallery.propTypes = {
  product: PropTypes.shape({
    mainImage: PropTypes.string.isRequired,
    additionalImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    discount: PropTypes.number,
    new: PropTypes.bool,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductImageGallery;
