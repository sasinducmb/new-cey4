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

  // Function to render the content based on active section
  const renderContent = () => {
    if (activeSection === "description") {
      return (
      <div
        dangerouslySetInnerHTML={{ __html: product.fullDescription }}
      />
    );
    } else if (activeSection === "specification") {
      return (
        <ul>
          <li>Height: {product.dimensions.dheight}</li>
          <li>Width: {product.dimensions.dwidth}</li>
          <li>Length: {product.dimensions.dlength}</li>
        </ul>
      );
    }
    return null; // No content to show by default
  };

  return (
    <div className={clsx("shop-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            {/* Product image gallery based on the galleryType */}
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
            {/* Product description info */}
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

        {/* Section to show Full Description or Specification */}
        <div className="row section-switcher">
          <div className="col-lg-2 col-md-6">
            <button
              className={clsx("section-button", {
                active: activeSection === "description",
              })}
              onClick={() => setActiveSection("description")}
            >
              Full Description
            </button>
          </div>
          <div className="col-lg-2 col-md-6">
            <button
              className={clsx("section-button", {
                active: activeSection === "specification",
              })}
              onClick={() => setActiveSection("specification")}
            >
              Specification
            </button>
          </div>
        </div>

        {/* Content based on the active section */}
        <div className="product-content mt-4">{renderContent()}</div>
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
