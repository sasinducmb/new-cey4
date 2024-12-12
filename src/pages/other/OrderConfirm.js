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
function OrderConfirm() {
  let { pathname } = useLocation();
  const navigate = useNavigate();
  const [digits, setDigits] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const orderId = localStorage.getItem("orderId");
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

        <Tab.Container defaultActiveKey="login" >
          <div className="order-confirmation-wrapper d-flex align-items-center justify-content-center" ref={formRef}>
            <div className="order-form-wrapper p-4 border bg-white" >
              <Form className="order-form" >
                <h3 className="text-center text-success">Order Confirmation</h3>
                <h4 className="text-center">
                  <b>Dear Dilrukshan Jayawardhane</b>
                </h4>
                <p className="text-center border p-3">
                  Your order has been confirmed. You will receive an email
                  confirmation shortly with the order details. Please check your
                  inbox or spam folder.
                </p>

                <div className="summary-wrapper d-flex justify-content-between border p-3 mb-3">
                  <div className="col-md-6">
                    <b>Summary</b>
                    <p>Order ID: {orderId}</p>
                    <p>Order Date: 2024.12.11</p>
                    <p>Time: 10.00 p.m</p>
                    <p>Payment Method: Visa</p>
                  </div>
                  <div className="col-md-6 text-end">
                    <p>Subtotal: 100.00</p>
                    <p>Delivery Fee: Free</p>
                    <p>
                      <b>Total: 100.00</b>
                    </p>
                  </div>
                </div>

                <div className="billing-wrapper border p-3 mb-3">
                  <b>Billing Address</b>
                  <p>123 Main Street, Cityville</p>
                  <p>State, Country</p>
                </div>

                <div className="items-wrapper d-flex text-center mb-3">
                  <div className="col-md-4 border p-2">Item</div>
                  <div className="col-md-4 border p-2">Quantity</div>
                  <div className="col-md-4 border p-2">Price</div>
                </div>

                {[
                  { item: "Wireless Mouse", quantity: 1, price: "20" },
                  { item: "Keyboard", quantity: 2, price: "50" },
                  { item: "Monitor Stand", quantity: 1, price: "35" },
                ].map((product, index) => (
                  <div
                    className="items-wrapper d-flex text-center mb-2"
                    key={index}
                  >
                    <div className="col-md-4 border p-2">{product.item}</div>
                    <div className="col-md-4 border p-2">
                      {product.quantity}
                    </div>
                    <div className="col-md-4 border p-2">{product.price}</div>
                  </div>
                ))}

                {/* Footer Section */}
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
                  {/* <Button variant="primary" onClick={handlePrint}>
                    Download Receipt
                  </Button> */}
                </div>
              </Form>
            </div>
          </div>
        </Tab.Container>
      </LayoutOne>
    </Fragment>
  );
}

export default OrderConfirm;
