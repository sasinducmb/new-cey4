import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductGridListSingle from "../../components/product/ProductGridListSingle";

const ProductGridList = ({
  products,
  spaceBottomClass
}) => {
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  // console.log(products)
  return (
    <Fragment>
      {products?.map(product => {
        return (
          <div className="col-xl-3 col-sm-6 col-md-6 col-6" key={product._id}>
            <ProductGridListSingle
              spaceBottomClass={spaceBottomClass}
              product={product}
              currency={currency}
              cartItem={
                cartItems.find(cartItem => cartItem._id === product._id)
              }
              wishlistItem={
                wishlistItems.find(
                  wishlistItem => wishlistItem._id === product._id
                )
              }
              compareItem={
                compareItems.find(
                  compareItem => compareItem._id === product._id
                )
              }
            />
          </div>
        );
      })}
    </Fragment>
  );
};

ProductGridList.propTypes = {
  products: PropTypes.array,
  spaceBottomClass: PropTypes.string,
};

export default ProductGridList;
