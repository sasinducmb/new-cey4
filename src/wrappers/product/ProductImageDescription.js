import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { getDiscountPrice } from "../../helpers/product";
import ProductImageGallery from "../../components/product/ProductImageGallery";
import ProductDescriptionInfo from "../../components/product/ProductDescriptionInfo";
import ProductImageGallerySideThumb from "../../components/product/ProductImageGallerySideThumb";
import ProductImageFixed from "../../components/product/ProductImageFixed";
const ProductImageDescription = ({
  spaceTopClass,
  spaceBottomClass,
  galleryType,
  product,
}) => {
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const wishlistItem = wishlistItems.find((item) => item.id === product.id);
  const compareItem = compareItems.find((item) => item.id === product.id);

  const discountedPrice = getDiscountPrice(
    product.price.basePrice,
    product.discount
  );
  const finalProductPrice = +(
    product.price.basePrice * currency.currencyRate
  ).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);

  // State to handle switching between Full Description and Specification
  const [activeSection, setActiveSection] = useState(null);

  // Updated renderContent function with specifications and features
  const renderContent = () => {
    if (activeSection === "description") {
      return (
        <div dangerouslySetInnerHTML={{ __html: product.fullDescription }} />
      );
    } else if (activeSection === "specification") {
      return (
        <div>
          <ul>
            <li>Height: {product.dimensions.dheight} cm</li>
            <li>Width: {product.dimensions.dwidth} cm</li>
            <li>Length: {product.dimensions.dlength} cm</li>
          </ul>
        </div>
      );
    } else if (activeSection === "features") {
      return (
        <div className="feature-list">
          {product.features && product.features.length > 0 ? (
            product.features.map((feature, index) => (
              <div
                key={index}
                className="list-group-item shadow-sm bg-light my-2 py-2 px-3"
                style={{
                  borderRadius: "50px",
                  margin: "5px 0", // Adds spacing between items
                  display: "block",
                  width: "100%", // Ensures each item takes full width
                }}
              >
                {feature}
              </div>
            ))
          ) : (
            <div className="list-group-item">No features available</div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={clsx("shop-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            {galleryType === "leftThumb" ? (
              <ProductImageGallerySideThumb
                product={product}
                thumbPosition="left"
              />
            ) : galleryType === "rightThumb" ? (
              <ProductImageGallerySideThumb product={product} />
            ) : galleryType === "fixedImage" ? (
              <ProductImageFixed product={product} />
            ) : (
              <ProductImageGallery product={product} />
            )}
          </div>
          <div className="col-lg-6 col-md-6">
            <ProductDescriptionInfo
              product={product}
              discountedPrice={discountedPrice}
              currency={currency}
              finalDiscountedPrice={finalDiscountedPrice}
              finalProductPrice={finalProductPrice}
              cartItems={cartItems}
              wishlistItem={wishlistItem}
              compareItem={compareItem}
            />
          </div>
        </div>

        <div className="row section-switcher">
          <div className="col-lg-2 col-md-6">
            <button
              className={clsx("section-buttons", {
                active: activeSection === "description",
              })}
              onClick={() => setActiveSection("description")}
            >
              Full Description
            </button>
          </div>
          <div className="col-lg-2 col-md-6">
            <button
              className={clsx("section-buttons", {
                active: activeSection === "specification",
              })}
              onClick={() => setActiveSection("specification")}
            >
              Specification
            </button>
          </div>
          <div className="col-lg-2 col-md-6">
            <button
              className={clsx("section-buttons", {
                active: activeSection === "features",
              })}
              onClick={() => setActiveSection("features")}
            >
              Features
            </button>
          </div>
          <div className="col-lg-2 col-md-6">
            <button
              className={clsx("section-buttons", {
                active: activeSection === "Review",
              })}
              onClick={() => setActiveSection("Review")}
            >
              Review
            </button>
          </div>
        </div>

        {activeSection && (
  <div className="product-contents mt-4">
    {renderContent()}
  </div>
)}
      </div>
    </div>
  );
};

ProductImageDescription.propTypes = {
  galleryType: PropTypes.string,
  product: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default ProductImageDescription;
