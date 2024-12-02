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

const EmailVerification = () => {
  let { pathname } = useLocation();
  const navigate = useNavigate();
  const [digits, setDigits] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
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
    setLoading(true);

    try {
      const response = await verifyEmail({ code }).unwrap();
      if (response.message) {
        setLoading(false);
        navigate("/");
      }
      // Handle successful verification, such as redirecting to another page
    } catch (error) {
      if (error.data && error.data.message) {
        setLoading(false);
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
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#4CAF50",
              animation: "blink 1.5s infinite", // Add blinking animation
            }}
          >
            Cey4Hub
          </div>
          <style>
            {`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}
          </style>
        </div>
      )}
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
                          <div
                            className="alert alert-warning text-center"
                            role="alert"
                          >
                            Please check your spam or junk folder if you don't
                            see the email in your inbox.
                          </div>

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
