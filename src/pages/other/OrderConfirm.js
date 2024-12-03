import React, { Fragment, useState } from "react";
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
function OrderConfirm() {
  let { pathname } = useLocation();
  const navigate = useNavigate();
  const [digits, setDigits] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const orderId = localStorage.getItem("orderId");
  return (
    <Fragment>
      <SEO
        titleTemplate="order-confirm"
        description="Login page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}

        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Tab.Container>
                      <div className="d-flex  vh-100">
                        <Form>
                          <h3 className="text-center">Order confirm</h3>
                          <p className="text-center alert alert-warning text-center">
                            Your order has been confirmed. You will receive an
                            email confirmation shortly with the order details.
                            Please check your inbox or spam folder.
                          </p>

                          <p className="text-center " style={{fontSize:"20px"}}><b>Order ID : {orderId}</b></p>

                          <div className="d-grid">
                          <Button variant="success" onClick={() => navigate("/")}>Back to Homepage</Button>
                          </div>
                        </Form>
                      </div>
                    </Tab.Container>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
}

export default OrderConfirm;
