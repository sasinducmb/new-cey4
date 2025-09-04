import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDiscountPrice } from "../../../helpers/product";
import { deleteFromCart } from "../../../store/slices/cart-slice";
import { useGetUserProfileQuery } from "../../../store/slices/user-slice";

const MenuCart = ({ userProfile }) => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  let cartTotalPrice = 0;
  const isReseller = userProfile?.role === "reseller";
  return (
    <div className="shopping-cart-content">
      {cartItems && cartItems.length > 0 ? (
        <Fragment>
        <ul>
            {cartItems.map((item) => {
              let finalProductPrice = 0;
              let finalDiscountedPrice = 0;

              let basePrice = item.selectedVariation
                ? item.selectedVariation.price.basePrice
                : item.price.basePrice;

              let resellerPrice =
                isReseller && item.resellerPrice
                  ? basePrice - item.resellerPrice
                  : basePrice;

              let discountedPrice = getDiscountPrice(resellerPrice, item.discount);

              finalProductPrice = +(resellerPrice * currency.currencyRate).toFixed(2);
              finalDiscountedPrice = +(
                (discountedPrice ?? resellerPrice) * currency.currencyRate
              ).toFixed(2);

              cartTotalPrice +=
                (discountedPrice !== null ? finalDiscountedPrice : finalProductPrice) *
                item.quantity;

              return (
                <li className="single-shopping-cart" key={item.cartItemId}>
                  <div className="shopping-cart-img">
                    <Link to={process.env.PUBLIC_URL + "/product/" + item.id}>
                      {item.mainImage ? (
                        <img
                          className="img-fluid"
                          src={`${
                            process.env.REACT_APP_BACKEND_URL
                          }/${item.mainImage.replace(/\\/g, "/")}`}
                          alt=""
                        />
                      ) : (
                        <span>No image available</span>
                      )}
                    </Link>
                  </div>
                  <div className="shopping-cart-title">
                    <h4>
                      <Link to={process.env.PUBLIC_URL + "/product/" + item.id}>
                        {item.name}
                        {item.selectedVariation?.name && (
                          <span> ({item.selectedVariation.name})</span>
                        )}
                      </Link>
                    </h4>
                    <h6>Qty: {item.quantity}</h6>
                    <span>
                      {discountedPrice !== null
                        ? currency.currencySymbol + finalDiscountedPrice
                        : currency.currencySymbol + finalProductPrice}
                    </span>
                    {item.selectedProductColor && item.selectedProductSize ? (
                      <div className="cart-item-variation">
                        <span>Color: {item.selectedProductColor}</span>
                        <span>Size: {item.selectedProductSize}</span>
                      </div>
                    ) : null}
                  </div>
                  <div className="shopping-cart-delete">
                    <button
                      onClick={() => dispatch(deleteFromCart(item.cartItemId))}
                    >
                      <i className="fa fa-times-circle" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="shopping-cart-total">
            <h4>
              Total :{" "}
              <span className="shop-total">
                {currency.currencySymbol + cartTotalPrice.toFixed(2)}
              </span>
            </h4>
          </div>
          <div className="shopping-cart-btn btn-hover text-center">
            <Link className="default-btn" to={process.env.PUBLIC_URL + "/cart"}>
              view cart
            </Link>
            <Link
              className="default-btn"
              to={process.env.PUBLIC_URL + "/checkout"}
            >
              checkout
            </Link>
          </div>
        </Fragment>
      ) : (
        <p className="text-center">No items added to cart</p>
      )}
    </div>
  );
};

export default MenuCart;
