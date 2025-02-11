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
  productVariation,
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
  const [selectedVariation, setSelectedVariation] = useState(null); // Default to the first variation
  // Updated renderContent function with specifications and features

  const handleVariationClick = (variation) => {
    setSelectedVariation(variation);
  };
  // console.log(selectedVariation);
  const renderContent = () => {
    if (activeSection === "description") {
      return (
        <div dangerouslySetInnerHTML={{ __html: product.fullDescription }} />
      );
    } else if (activeSection === "specification") {
      return (
        <div>
          {/* Dimensions Section */}
          <div
            style={{
              backgroundColor: "#f0f0f0",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>Dimensions</h3>
            <ul>
              <li>
                <strong> Height: </strong> {product.dimensions.dheight} cm
                (Approximately)
              </li>
              <li>
                <strong> Width: </strong> {product.dimensions.dwidth} cm
                (Approximately)
              </li>
              <li>
                <strong> Length: </strong> {product.dimensions.dlength} cm
                (Approximately)
              </li>
              <li>
                {" "}
                <strong> Weight:</strong> {product.weight}{" "}
                {product.weightMeasure}g (Approximately)
              </li>
              {product.capacity &&
                product.capacityMeasure &&
                product.capacityMeasure !== "N/A" && (
                  <li>
                    <strong>Capacity:</strong> {product.capacity}{" "}
                    {product.capacityMeasure}
                  </li>
                )}

            </ul>
          </div>

          {/* Features Section */}
          <div
            style={{
              backgroundColor: "#f0f0f0",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>Features</h3>
            <div className="feature-list">
              {product.features && product.features.length > 0 ? (
                <ul style={{ padding: 0, listStyleType: "none" }}>
                  <strong>Features List:</strong>
                  {product.features[0].split(",").map((feature, index) => (
                    <li
                      key={index}
                      className="list-group-item shadow-sm bg-light my-2 mx-2 py-2 px-5"
                      style={{
                        borderRadius: "50px",
                        margin: "5px 0",
                        display: "inline-block",
                        width: "auto",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      {feature.trim()}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="list-group-item">No features available</div>
              )}
            </div>
          </div>

          {/* Specifications Section */}
          <div
            style={{
              backgroundColor: "#f0f0f0",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            {/* <h3>Specifications</h3> */}
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>
                <strong>Brand:</strong> EGI
              </li>
             
              <li>
                <strong>Condition:</strong> Brand New
              </li>
              <li>
                <strong>Material:</strong> {product.material}
              </li>
              <li>
                <strong>Colour:</strong> {product.colour}
              </li>
              <li>
                <strong>Type:</strong> {product.itemType}
              </li>
              <li>
                <strong>Category:</strong> {product.category}
              </li>
              <li>
                <strong>Suitable for use:</strong> {product.department}
              </li>
              <li>
                <strong>Shape:</strong> {product.shape}
              </li>
              <li>
                <strong>Indoor/Outdoor:</strong>{" "}
                {product.indoorOutdoor
                  ? product.indoorOutdoor.charAt(0).toUpperCase() +
                    product.indoorOutdoor.slice(1)
                  : ""}
              </li>
              <li>
                <strong>Original/Reproduction:</strong>{" "}
                {product.originalReproduction}
              </li>
              <li>
                <strong>Handmade:</strong> {product.handmade}
              </li>
              <li>
                <strong>Country:</strong> Sri Lanka
              </li>
              {/* <li>
                <strong>Weight:</strong> {product.weight} kg
              </li> */}
              <li>
                <strong>Style:</strong> {product.style}
              </li>
              <li>
                <strong>Occasion:</strong> {product.occasion}
              </li>
              <li>
                <strong>Additional Part:</strong>{" "}
                {product.itemRelatedParts &&
                product.itemRelatedParts.partName ? (
                  <div>
                    {product.itemRelatedParts.partName && (
                      <>
                        {product.itemRelatedParts.partName}
                        <br />
                      </>
                    )}
                    {product.itemRelatedParts.width && (
                      <>
                        Width: {product.itemRelatedParts.width}cm
                        (Approximately)
                        <br />
                      </>
                    )}
                    {product.itemRelatedParts.height && (
                      <>
                        Height: {product.itemRelatedParts.height}cm
                        (Approximately)
                        <br />
                      </>
                    )}
                    {product.itemRelatedParts.length && (
                      <>
                        Length: {product.itemRelatedParts.length}cm
                        (Approximately)
                      </>
                    )}
                     {product.itemRelatedParts.weight && (
                      <>
                        Length: {product.itemRelatedParts.weight}g
                        (Approximately)
                      </>
                    )}
                  </div>
                ) : (
                  <div>No related parts available</div>
                )}
              </li>

            <li>
              <strong>Additional Part:</strong>{" "}
            {product.itemRelatedPartsTwo &&
              product.itemRelatedPartsTwo.length > 0 ? (
                <div>
                  {product.itemRelatedPartsTwo.map((part, index) => (
                    <div key={index}>
                      {part.partName && (
                        <>
                          Part {index + 1}: {part.partName}
                          <br />
                        </>
                      )}
                      {part.width && (
                        <>
                          Width: {part.width} cm (Approximately)
                          <br />
                        </>
                      )}
                      {part.height && (
                        <>
                          Height: {part.height} cm (Approximately)
                          <br />
                        </>
                      )}
                      {part.length && (
                        <>
                          Length: {part.length} cm (Approximately)
                          <br />
                        </>
                      )}
                      {index !== product.itemRelatedPartsTwo.length - 1 && (
                        <hr />
                      )}{" "}
                      {/* Separator */}
                    </div>
                  ))}
                </div>
              ) : (
                <div>No related parts available</div>
              )}
            </li>
            </ul>
          </div>
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
              <ProductImageGallery
                product={product}
                variationImage={selectedVariation}
              />
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
              productVariation={productVariation}
              onVariationClick={handleVariationClick}
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
          {/* <div className="col-lg-2 col-md-6">
            <button
              className={clsx("section-buttons", {
                active: activeSection === "features",
              })}
              onClick={() => setActiveSection("features")}
            >
              Features
            </button>
          </div> */}
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
          <div className="product-contents mt-4">{renderContent()}</div>
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
