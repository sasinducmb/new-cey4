import React, { Fragment, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Form, Button, Row, Col } from "react-bootstrap";
import cogoToast from "cogo-toast";
import { useVerifyEmailMutation } from "../../store/slices/user-slice";

const EmailVerification = () => {
  let { pathname } = useLocation();
  const navigate = useNavigate();
  const [digits, setDigits] = useState(new Array(6).fill(""));
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.match(/^[0-9]$/) || value === "") {
      const newDigits = [...digits];
      newDigits[index] = value;
      setDigits(newDigits);

      // Focus on the next input field
      if (value !== "" && index < 5) {
        document.getElementById(`digit-${index + 1}`).focus();
      }
    }
  };

  const handleVerify = async () => {
    const code = digits.join("");
    if (code.length !== 6) {
      cogoToast.error("Please enter a 6-digit code", { position: "top-right" });
      return;
    }

    try {
      const response = await verifyEmail({ code }).unwrap();
      if (response.message) {
        navigate("/");
      }
      // Handle successful verification, such as redirecting to another page
    } catch (error) {
      if (error.data && error.data.message) {
        cogoToast.error(`Verification failed: ${error.data.message}`, {
          position: "top-right",
        });
      } else {
        cogoToast.error("Verification failed, please try again", {
          position: "top-right",
        });
      }
    }
  };
  return (
    <Fragment>
      <SEO
        titleTemplate="Login"
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
                          <h3 className="text-center">Verify Your Email</h3>
                          <p className="text-center">
                            Enter the 6-digit code sent to your email
                          </p>
                          <Row className="mb-3">
                            {digits.map((digit, index) => (
                              <Col key={index} xs="2">
                                <Form.Control
                                  type="text"
                                  id={`digit-${index}`}
                                  value={digit}
                                  onChange={(e) => handleChange(e, index)}
                                  maxLength="1"
                                  className="text-center"
                                  style={{ fontSize: "24px", height: "50px" }}
                                />
                              </Col>
                            ))}
                          </Row>
                          <div className="d-grid">
                            <Button variant="success" onClick={handleVerify}>
                              Verify
                            </Button>
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
};

export default EmailVerification;
