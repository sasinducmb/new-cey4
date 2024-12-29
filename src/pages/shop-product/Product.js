import React, { Fragment } from "react"; 
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import { useGetVariationQuery } from "../../store/slices/user-slice";
const Product = () => {
  let { pathname } = useLocation();
  let { id } = useParams();
  const { products } = useSelector((state) => state.product);
  const product = products.find(product => product._id === id);
  const { data, isLoading } = useGetVariationQuery();
  console.log(data);
 const filteredData = Array.isArray(data)
    ? data.filter(item => item.productId?._id === id)
    : [];
  // console.log(filteredData);
  if (!product) {
    return <div>Product not found</div>;
  }
  

  return (
    <Fragment>
      <SEO
        titleTemplate="Product Page"
        description="Product Page of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
         pages={[
          {label: "Home", path: "/" },
          {label: "Shop Product", path: pathname }
        ]} 
        />

        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
          productVariation={filteredData}
        />

        {/* product description tab */}
        {/* <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={product.description}
        /> */}

        {/* related product slider */}
        {/* <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={product.category}
        /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default Product;
