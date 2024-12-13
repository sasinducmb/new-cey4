import { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { loadStripe } from "@stripe/stripe-js";
import {
  useCreateOrderMutation,
  useCreatePaymentSessionMutation,
} from "../../store/slices/orderSlice";
import { useParams } from "react-router-dom";
import { deleteAllFromCart } from "../../store/slices/cart-slice";
const Checkout = () => {
  let cartTotalPrice = 0;
  const dispatch = useDispatch();
  const { id, itemQuantity } = useParams();
  const { products } = useSelector((state) => state.product);
  const product = products.find((product) => product._id === id);
  let { pathname } = useLocation();
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const [isDeliverySameAsBilling, setIsDeliverySameAsBilling] = useState(true);

  // const totalDeliveryCost = cartItems.reduce(
  //   (total, item) => total + item.totalDeliveryCost,
  //   0
  // );

  const handleRadioChange = (e) => {
    setIsDeliverySameAsBilling(e.target.value === "yes");
  };

  const [createOrder, { isLoading: isOrderLoading }] = useCreateOrderMutation();
  const [createPaymentSession, { isLoading: isPaymentLoading }] =
    useCreatePaymentSessionMutation();

  const [customerDetails, setCustomerDetails] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    phone: "",
    email: "",
    orderNotes: "",
  });

  const [deliveryDetails, setDeliveryDetails] = useState({
    DeliveryApartment: "",
    DeliveryStreetAddress: "",
    DeliveryCity: "",
    DeliveryState: "",
    DeliveryPostalCode: "",
    DeliveryPhone: "",
    DeliveryEmail: "",
    DeliveryOrderNotes: "",
    DeliveryFullName: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const handleInputChangeDeliver = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails({ ...deliveryDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      items: cartItems.map((item) => ({
        product: item._id,
        quantity: id ? itemQuantity : item.quantity,
      })),

      overallTotal: cartTotalPrice,
      billingInfo: customerDetails,
      deliveryInfo: deliveryDetails,
    };

    try {
      const response = await createOrder(orderData).unwrap();
      // console.log(response);

      if (response.message) {
        const stripe = await loadStripe(process.env.REACT_APP_STRIP_PK);

        const paymentIdResponse = await createPaymentSession({
          overallTotal: orderData.overallTotal,
          orderId: response.orderId,
        }).unwrap();

        // console.log(paymentIdResponse);

        const session = paymentIdResponse.id;

        if (session) {
          // Store orderId in local storage
          localStorage.setItem("orderId", response.orderId);

          dispatch(deleteAllFromCart());

          stripe.redirectToCheckout({
            sessionId: session,
          });

          // if (result.error) {
          //   console.error("Stripe checkout error:", result.error.message);
          // } else {
          //   // After successful payment, clear the cart
          //   dispatch(deleteAllFromCart());
          //   console.log("Payment completed, cart cleared!");
          // }
        } else {
          console.error("Payment session creation failed");
        }
      } else {
        console.log("Order creation failed");
      }
    } catch (error) {
      console.error("Failed to create order:", error);
    }
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="Checkout"
        description="Checkout page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Checkout", path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {id || (cartItems && cartItems.length >= 1) ? (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-7">
                    <div className="billing-info-wrap">
                      <h3>Billing Details</h3>
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info mb-20">
                            <label>First Name</label>
                            <input
                              type="text"
                              name="firstName"
                              value={customerDetails.firstName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info mb-20">
                            <label>Last Name</label>
                            <input
                              type="text"
                              name="lastName"
                              value={customerDetails.lastName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <label>Email Address</label>
                          <input
                            type="text"
                            name="email"
                            value={customerDetails.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-lg-12">
                          <div className="billing-select mb-20">
                            <label>Country</label>
                            <input
                              type="text"
                              name="country"
                              value={customerDetails.country}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="billing-info mb-20">
                            <label>Street Address</label>
                            <input
                              className="billing-address"
                              placeholder="House number and street name"
                              type="text"
                              name="streetAddress"
                              value={customerDetails.streetAddress}
                              onChange={handleInputChange}
                              required
                            />
                            <input
                              placeholder="Apartment, suite, unit etc."
                              type="text"
                              name="apartment"
                              value={customerDetails.apartment}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="billing-info mb-20">
                            <label>Town / City</label>
                            <input
                              type="text"
                              name="city"
                              value={customerDetails.city}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info mb-20">
                            <label>State</label>
                            <input
                              type="text"
                              name="state"
                              value={customerDetails.state}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info mb-20">
                            <label>Postcode / ZIP</label>
                            <input
                              type="text"
                              name="postalCode"
                              value={customerDetails.postalCode}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info mb-20">
                            <label>Phone</label>
                            <input
                              type="text"
                              name="phone"
                              value={customerDetails.phone}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info mb-20">
                            <div className="billing-info mb-20">
                              <label>Company Name (optional)</label>
                              <input
                                type="text"
                                name="companyName"
                                value={customerDetails.companyName}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="alert alert-warning">
                            Do you want the delivery details to be the same as
                            billing?
                          </h4>
                          <div className="radio-group mb-4 alert alert-warning">
                            <label>
                              <input
                                type="radio"
                                name="deliverySame"
                                value="yes"
                                required
                                checked={isDeliverySameAsBilling}
                                onChange={handleRadioChange}
                              />
                              Yes
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="deliverySame"
                                value="no"
                                required
                                checked={!isDeliverySameAsBilling}
                                onChange={handleRadioChange}
                              />
                              No
                            </label>
                          </div>
                        </div>

                        {!isDeliverySameAsBilling && (
                          <div className="delivery-info">
                            <h3>Delivery Information</h3>
                            <label>Full Name</label>
                            <input
                              type="text"
                              name="DeliveryFullName"
                              value={deliveryDetails.DeliveryFullName}
                              onChange={handleInputChangeDeliver}
                            />
                            <label>Street Address</label>
                            <input
                              type="text"
                              name="DeliveryStreetAddress"
                              value={deliveryDetails.DeliveryStreetAddress}
                              onChange={handleInputChangeDeliver}
                            />
                            <label>Apartment</label>
                            <input
                              type="text"
                              name="DeliveryApartment"
                              value={deliveryDetails.DeliveryApartment}
                              onChange={handleInputChangeDeliver}
                            />
                            <label>City</label>
                            <input
                              type="text"
                              name="DeliveryCity"
                              value={deliveryDetails.DeliveryCity}
                              onChange={handleInputChangeDeliver}
                            />
                            <label>State</label>
                            <input
                              type="text"
                              name="DeliveryState"
                              value={deliveryDetails.DeliveryState}
                              onChange={handleInputChangeDeliver}
                            />
                            <label>Postal Code</label>
                            <input
                              type="text"
                              name="DeliveryPostalCode"
                              value={deliveryDetails.DeliveryPostalCode}
                              onChange={handleInputChangeDeliver}
                            />
                            <label>Phone</label>
                            <input
                              type="text"
                              name="DeliveryPhone"
                              value={deliveryDetails.DeliveryPhone}
                              onChange={handleInputChangeDeliver}
                            />
                            <label>Email</label>
                            <input
                              type="text"
                              name="DeliveryEmail"
                              value={deliveryDetails.DeliveryEmail}
                              onChange={handleInputChangeDeliver}
                            />
                          </div>
                        )}
                      </div>

                      <div className="additional-info-wrap">
                        <h4>Additional information</h4>
                        <div className="additional-info">
                          <label>Order notes</label>
                          <textarea
                            placeholder="Notes about your order, e.g. special notes for delivery."
                            name="orderNotes"
                            value={customerDetails.orderNotes}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="your-order-area">
                      <h3>Your order</h3>
                      <div className="your-order-wrap gray-bg-4">
                        <div className="your-order-product-info">
                          <div className="your-order-top">
                            <ul>
                              <li>Product</li>
                            </ul>
                          </div>
                          <div className="your-order-middle">
                            <ul>
                              {id && product ? (
                                // Render the single product if 'id' exists
                                <li key={product._id}>
                                  {/* Set default quantity to 1 if not present */}
                                  {(() => {
                                    const quantity = product.quantity || 1; // Default quantity is 1

                                    // Calculate the discounted price for the single product
                                    const discountedPrice = getDiscountPrice(
                                      product.price.basePrice,
                                      product.discount
                                    );
                                    const finalProductPrice = (
                                      product.price.basePrice *
                                      currency.currencyRate
                                    ).toFixed(2);
                                    const finalDiscountedPrice = (
                                      discountedPrice * currency.currencyRate
                                    ).toFixed(2);

                                    // Calculate the total price for the single product
                                    if (discountedPrice != null) {
                                      cartTotalPrice +=
                                        finalDiscountedPrice * itemQuantity;
                                    } else {
                                      cartTotalPrice +=
                                        finalProductPrice * itemQuantity;
                                    }

                                    return (
                                      <span>
                                        <div className="order-middle-left">
                                          {product.name}
                                        </div>
                                        <div className="order-middle-left">
                                          {itemQuantity} X
                                          <span className="order-price order-middle-right">
                                            {discountedPrice !== null
                                              ? currency.currencySymbol +
                                                (
                                                  finalDiscountedPrice *
                                                  quantity
                                                ).toFixed(2)
                                              : currency.currencySymbol +
                                                (
                                                  finalProductPrice * quantity
                                                ).toFixed(2)}
                                          </span>
                                        </div>
                                      </span>
                                    );
                                  })()}
                                </li>
                              ) : (
                                // Render the cart items if 'id' does not exist
                                cartItems.map((cartItem, key) => {
                                  const discountedPrice = getDiscountPrice(
                                    cartItem.price.basePrice,
                                    cartItem.discount
                                  );
                                  const finalProductPrice = (
                                    cartItem.price.basePrice *
                                    currency.currencyRate
                                  ).toFixed(2);
                                  const finalDiscountedPrice = (
                                    discountedPrice * currency.currencyRate
                                  ).toFixed(2);

                                  // Calculate cart total price based on the presence of a discount
                                  if (discountedPrice != null) {
                                    cartTotalPrice +=
                                      finalDiscountedPrice * cartItem.quantity;
                                  } else {
                                    cartTotalPrice +=
                                      finalProductPrice * cartItem.quantity;
                                  }

                                  return (
                                    <li key={key}>
                                      <span className="order-middle-left">
                                        {cartItem.name} X {cartItem.quantity}
                                      </span>{" "}
                                      <span className="order-price">
                                        {discountedPrice !== null
                                          ? currency.currencySymbol +
                                            (
                                              finalDiscountedPrice *
                                              cartItem.quantity
                                            ).toFixed(2)
                                          : currency.currencySymbol +
                                            (
                                              finalProductPrice *
                                              cartItem.quantity
                                            ).toFixed(2)}
                                      </span>
                                    </li>
                                  );
                                })
                              )}
                            </ul>
                          </div>
                          <div className="your-order-bottom">
                            {/* <ul>
                              <li className="your-order-shipping">Shipping</li>
                              <li>
                                {totalDeliveryCost > 0
                                  ? `${
                                      currency.currencySymbol
                                    }${totalDeliveryCost.toFixed(2)}`
                                  : "Free shipping"}
                              </li>
                            </ul> */}
                          </div>
                          <div className="your-order-total">
                            <ul>
                              <li className="order-total">Total</li>
                              <li>
                                {currency.currencySymbol +
                                  cartTotalPrice.toFixed(2)}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="payment-method"></div>
                      </div>
                      <div className="place-order mt-25">
                        <button
                          type="submit"
                          disabled={isOrderLoading || isPaymentLoading}
                        >
                          {isOrderLoading || isPaymentLoading
                            ? "Processing..."
                            : "Create Order and Payment Session"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in cart to checkout <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Checkout;
