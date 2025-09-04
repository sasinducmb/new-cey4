import React, { Fragment, useEffect, useRef, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { Form, Button, Row, Col } from "react-bootstrap";
import cogoToast from "cogo-toast";
import { useVerifyEmailMutation } from "../../store/slices/user-slice";
import { useReactToPrint } from "react-to-print";
import { useGetOrderByIdQuery } from "../../store/slices/orderSlice";
function OrderConfirm() {
  const orderId = localStorage.getItem("orderId");
  let { pathname } = useLocation();
  const { data: order, error, isLoading } = useGetOrderByIdQuery(orderId);

  const navigate = useNavigate();
  const [digits, setDigits] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null); // Create a reference to the receipt section
  useEffect(() => {
    console.log("formRef.current:", formRef.current);
  }, []);

  const handlePrint = useReactToPrint({
    content: () => {
      console.log("formRef.current inside handlePrint:", formRef.current);
      return formRef.current;
    },
  });
  return (
    <Fragment>
      <SEO
        titleTemplate="order-confirm"
        description="Login page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}

        <Tab.Container defaultActiveKey="login">
          <div className="order-confirmation-wrapper d-flex align-items-center justify-content-center">
            <div className="order-form-wrapper p-4 border bg-white">
              <Form className="order-form">
                <h3 className="text-center text-success">Order Confirmation</h3>
                {order && order.billingInfo ? (
                  <>
                    <h4 className="text-center">
                      <b>
                        Dear {order.billingInfo.firstName}{" "}
                        {order.billingInfo.lastName}
                      </b>
                    </h4>
                    <p className="text-center border p-3 alert alert-warning">
                      Your order has been confirmed. You will receive an email
                      confirmation shortly with the order details. Please check
                      your inbox or spam folder.
                    </p>

                    <div className="summary-wrapper d-flex justify-content-between border p-3 mb-3">
                      <div className="col-md-6">
                        <b>Summary</b>
                        <p>Order ID: {order._id}</p>
                        <p>
                          Order Date:{" "}
                          {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                        <p>
                          Time: {new Date(order.createdAt).toLocaleTimeString()}
                        </p>
                        <p>Payment Method: Visa</p>
                      </div>
                      <div className="col-md-6 text-end">
                        <p>Subtotal: £{order.overallTotal.toFixed(2)}</p>
                        <p>Delivery Fee: Free</p>
                        <p>
                          <b>Total: £{order.overallTotal.toFixed(2)}</b>
                        </p>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="billing-wrapper mb-3">
                            <b>Delivery Address</b>
                            <p>
                              <strong>Name:</strong>{" "}
                              {order.deliveryInfo.DeliveryFullName}
                            </p>
                            <p>
                              <strong>Street Address:</strong>{" "}
                              {order.deliveryInfo.DeliveryStreetAddress}
                            </p>
                            <p>
                              <strong>Apartment:</strong>{" "}
                              {order.deliveryInfo.DeliveryApartment}
                            </p>
                            <p>
                              <strong>City:</strong>{" "}
                              {order.deliveryInfo.DeliveryCity}
                            </p>
                            <p>
                              <strong>State:</strong>{" "}
                              {order.deliveryInfo.DeliveryState}
                            </p>
                            <p>
                              <strong>Postal Code:</strong>{" "}
                              {order.deliveryInfo.DeliveryPostalCode}
                            </p>
                            <p>
                              <strong>Phone:</strong>{" "}
                              {order.deliveryInfo.DeliveryPhone}
                            </p>
                            <p>
                              <strong>Email:</strong>{" "}
                              {order.deliveryInfo.DeliveryEmail}
                            </p>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="billing-wrapper mb-3">
                            <b>Billing Address</b>
                            <p>
                              <strong>Name:</strong>{" "}
                              {order.billingInfo.firstName}{" "}
                              {order.billingInfo.lastName}
                            </p>
                            <p>
                              <strong>Street Address:</strong>{" "}
                              {order.billingInfo.streetAddress}
                            </p>
                            <p>
                              <strong>Apartment:</strong>{" "}
                              {order.billingInfo.apartment}
                            </p>
                            <p>
                              <strong>City:</strong> {order.billingInfo.city}
                            </p>
                            <p>
                              <strong>State:</strong> {order.billingInfo.state}
                            </p>
                            <p>
                              <strong>Postal Code:</strong>{" "}
                              {order.billingInfo.postalCode}
                            </p>
                            <p>
                              <strong>Phone:</strong> {order.billingInfo.phone}
                            </p>
                            <p>
                              <strong>Email:</strong> {order.billingInfo.email}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="items-wrapper d-flex text-center mb-3">
                      <div className="col-md-4 border p-2">Item</div>
                      <div className="col-md-4 border p-2">Quantity</div>
                      <div className="col-md-4 border p-2">Price (£)</div>
                    </div>

                    {order.items.map((item, index) => (
                      <div
                        className="items-wrapper d-flex text-center mb-2"
                        key={index}
                      >
                        <div className="col-md-4 border p-2">
                          {item.product.name}
                        </div>
                        <div className="col-md-4 border p-2">
                          {item.quantity}
                        </div>
                        <div className="col-md-4 border p-2">
                          £
                          {(order.overallTotal / order.items.length).toFixed(2)}
                        </div>
                      </div>
                    ))}

                    <div className="footer-wrapper text-center border mt-4">
                      <img
                        src="/assets/img/logo/logo.png"
                        alt="Company Logo"
                        className="company-logo mb-3 mt-2"
                        style={{ width: "150px" }}
                      />
                      <p className="mb-1">
                        <strong>Cey4hub</strong>
                      </p>
                      <p className="mb-1">Phone: +44 (0) 7386 391 286</p>
                      <p>Email: support@cey4hub.com</p>
                    </div>

                    <div className="d-grid mt-3">
                      <Button
                        variant="success"
                        onClick={() => navigate("/")}
                        className="mb-2"
                      >
                        Back to Homepage
                      </Button>
                    </div>
                  </>
                ) : (
                  <p className="text-center text-danger">
                    Order data is not available.
                  </p>
                )}
              </Form>
            </div>
          </div>
        </Tab.Container>
      </LayoutOne>
    </Fragment>
  );
}

export default OrderConfirm;
