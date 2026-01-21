import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { EffectFade, Thumbs } from "swiper";
import AnotherLightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Swiper, { SwiperSlide } from "../../components/swiper";

/**
 * Resolves image for both:
 * - Cloudinary URLs
 * - Old local backend paths
 */
const resolveImage = (img) => {
  if (!img) return "";
  if (img.startsWith("http")) return img;
  return `${process.env.REACT_APP_BACKEND_URL}/${img.replace(/\\/g, "/")}`;
};

const ProductImageGallery = ({ product, variationImage, colorImage }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [index, setIndex] = useState(-1);

  /**
   * Priority:
   * 1. variationImage
   * 2. colorImage
   * 3. product images
   */
  const slides = variationImage
    ? [
        {
          src: resolveImage(variationImage),
          key: "variationImage",
        },
      ]
    : colorImage
    ? [
        {
          src: resolveImage(colorImage),
          key: "colorImage",
        },
      ]
    : [
        {
          src: resolveImage(product.mainImage),
          key: "mainImage",
        },
        ...(product.additionalImages || []).map((img, i) => ({
          src: resolveImage(img),
          key: `additional-${i}`,
        })),
      ];

  // Main gallery swiper
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

  // Thumbnail swiper
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
            {product.discount && (
              <span className="pink">-{product.discount}%</span>
            )}
            {product.new && <span className="purple">New</span>}
          </div>
        ) : null}

        {slides.length > 0 && (
          <Swiper options={gallerySwiperParams}>
            {slides.map((slide, key) => (
              <SwiperSlide key={slide.key || key}>
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

            {/* Lightbox */}
            <AnotherLightbox
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              slides={slides}
              plugins={[Thumbnails, Zoom, Fullscreen]}
            />
          </Swiper>
        )}
      </div>

      {/* Thumbnails only for product images */}
      {!variationImage && !colorImage && (
        <div className="product-small-image-wrapper mt-15">
          {slides.length > 0 && (
            <Swiper options={thumbnailSwiperParams}>
              {slides.map((slide, key) => (
                <SwiperSlide key={slide.key || key}>
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
          )}
        </div>
      )}
    </Fragment>
  );
};

ProductImageGallery.propTypes = {
  product: PropTypes.shape({
    mainImage: PropTypes.string.isRequired,
    additionalImages: PropTypes.arrayOf(PropTypes.string),
    discount: PropTypes.number,
    new: PropTypes.bool,
    name: PropTypes.string.isRequired,
  }).isRequired,
  variationImage: PropTypes.string,
  colorImage: PropTypes.string,
};

export default ProductImageGallery;
