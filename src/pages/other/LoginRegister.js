import React, { Fragment, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import axios from "axios";
import cogoToast from "cogo-toast";
import {
  useRegisterUserMutation,
  useLoginMutation,
} from "../../store/slices/user-slice";
import ClipLoader from "react-spinners/ClipLoader";
import { Modal, Button } from "react-bootstrap";

const LoginRegister = () => {
  let { pathname } = useLocation();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  // New reseller-specific fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [sellingPlatform, setSellingPlatform] = useState("");
  const [otherPlatform, setOtherPlatform] = useState("");
  
  const [registerUser] = useRegisterUserMutation();
  const [login, { isLoading }] = useLoginMutation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [userType, setUserType] = useState("regular");
  const [activeTab, setActiveTab] = useState("login");
  // Terms and conditions modal state
  const [showTerms, setShowTerms] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();

      if (response.message) {
        const userRole = response.user.role; // assuming the backend sends `role`

        cogoToast.success("Login successful", { position: "top-right" });

        if (userRole === "admin") {
          // Full redirect to admin dashboard running on port 3001
          window.location.href = process.env.REACT_APP_DASHBOARD_URL;
        } else if (userRole === "user" || userRole === "reseller") {
          // Navigate within the current React app
          navigate("/");
        } else {
          // Optional: handle unknown role
          cogoToast.error("Unknown role. Access denied.", {
            position: "top-right",
          });
        }
      }
    } catch (error) {
      if (error.status === 400 && error.data && error.data.message) {
        cogoToast.error(`Login failed: ${error.data.message}`, {
          position: "top-right",
        });
      } else {
        cogoToast.error("Login failed, please try again", {
          position: "top-right",
        });
      }
    }
  };

  const handleUserTypeChange = (e) => {
    const newUserType = e.target.value;
    setUserType(newUserType);

    // If switching to reseller, show terms modal
    if (newUserType === "reseller" && !acceptedTerms) {
      setShowTerms(true);
    }
  };

  const handleCloseTerms = () => {
    setShowTerms(false);
    // If terms were not accepted, revert to regular user
    if (!acceptedTerms) {
      setUserType("regular");
    }
  };

  // Handle terms acceptance
  const handleAcceptTerms = () => {
    setAcceptedTerms(true);
    setShowTerms(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      cogoToast.error("Passwords do not match", { position: "top-right" });
      return;
    }

    // Additional validation for reseller
    if (userType === "reseller") {
      if (!firstName || !lastName || !fullAddress || !sellingPlatform) {
        cogoToast.error("Please fill in all required reseller fields", { 
          position: "top-right" 
        });
        return;
      }
      if (sellingPlatform === "Other" && !otherPlatform) {
        cogoToast.error("Please specify your selling platform", { 
          position: "top-right" 
        });
        return;
      }
    }

    setLoading(true);
    try {
      const registrationData = {
        name,
        password,
        email,
        city,
        state,
        country,
        phoneNumber,
        userType,
        // Include reseller-specific data if applicable
        ...(userType === "reseller" && {
          firstName,
          lastName,
          fullAddress,
          sellingPlatform: sellingPlatform === "Other" ? otherPlatform : sellingPlatform,
        })
      };

      const response = await registerUser(registrationData).unwrap();

      if (response.message) {
        setLoading(false);
        navigate("/email-verification");
      }
    } catch (error) {
      setLoading(false);
      // Check if the error is a specific API response
      if (error.status === 400 && error.data && error.data.message) {
        if (error.data.message === "User already exists") {
          cogoToast.error(
            "User already exists. Please use a different email.",
            {
              position: "top-right",
            }
          );
        } else {
          cogoToast.error(`Registration failed: ${error.data.message}`, {
            position: "top-right",
          });
        }
      } else {
        // General error handling
        cogoToast.error("Registration failed, please try again", {
          position: "top-right",
        });
      }
      console.error("Registration error:", error);
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
        <div className="container d-flex justify-content-end align-items-center mb-5  green-section">
          <div className="row w-100">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <h1 className="green-section-right">Ready to Go Green?</h1>
            </div>
            <div className="col-md-6 form-section pb-5 green-section-left">
              <Tab.Container
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k)}
              >
                <Nav variant="pills" className="mb-4 justify-content-center">
                  <Nav.Item>
                    <Nav.Link eventKey="login" aria-label="Login">
                      <h4 className="m-1 mx-4">Sign In</h4>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="register" aria-label="Register">
                      <h4 className="m-1">Sign Up</h4>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="login">
                    <form onSubmit={handleLogin}>
                      <div className="mb-3">
                        <label htmlFor="login-email" className="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="login-email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="login-password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="login-password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="row d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary w-50">
                          Login
                        </button>
                        <p
                          className="mt-2"
                          onClick={() => setActiveTab("register")}
                          style={{ cursor: "pointer" }}
                        >
                          Don't have an account?{" "}
                          <span style={{ color: "#007bff" }}>
                            Please sign up
                          </span>
                        </p>
                      </div>
                    </form>
                  </Tab.Pane>
                  <Tab.Pane eventKey="register">
                    <form onSubmit={handleRegister}>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="register-email" className="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="register-email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="register-password"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="register-password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="confirm-password"
                          className="form-label"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="confirm-password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </div>

                      {/* User Type Selection */}
                      <div className="mb-4">
                        <label className="form-label">Register as</label>
                        <div className="d-flex gap-4">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="userType"
                              id="regularUser"
                              value="regular"
                              checked={userType === "regular"}
                              onChange={handleUserTypeChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="regularUser"
                            >
                              Regular User
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="userType"
                              id="resellerUser"
                              value="reseller"
                              checked={userType === "reseller"}
                              onChange={handleUserTypeChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="resellerUser"
                            >
                              Reseller
                              {acceptedTerms && (
                                <span className="ms-2 text-success">
                                  <small>(Terms Accepted)</small>
                                </span>
                              )}
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Extended Reseller Form Fields */}
                      {userType === "reseller" && (
                        <div className="border p-3 mb-4 rounded bg-light">
                          <h5 className="mb-3 text-primary">Reseller Information</h5>
                          
                          {/* Full Name */}
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <label htmlFor="firstName" className="form-label">
                                First Name <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                              />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label htmlFor="lastName" className="form-label">
                                Last Name <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          {/* Full Postal Address */}
                          <div className="mb-3">
                            <label htmlFor="fullAddress" className="form-label">
                              Full Postal Address <span className="text-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              id="fullAddress"
                              rows="3"
                              placeholder="Enter your complete address including country"
                              value={fullAddress}
                              onChange={(e) => setFullAddress(e.target.value)}
                              required
                            />
                          </div>

                          {/* Selling Platform */}
                          <div className="mb-3">
                            <label htmlFor="sellingPlatform" className="form-label">
                              Selling Platform <span className="text-danger">*</span>
                            </label>
                            <select
                              className="form-select"
                              id="sellingPlatform"
                              value={sellingPlatform}
                              onChange={(e) => setSellingPlatform(e.target.value)}
                              required
                            >
                              <option value="">Select Platform</option>
                              <option value="Amazon">Amazon</option>
                              <option value="Etsy">Etsy</option>
                              <option value="E-bay">E-bay</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>

                          {/* Other Platform Input */}
                          {sellingPlatform === "Other" && (
                            <div className="mb-3">
                              <label htmlFor="otherPlatform" className="form-label">
                                Please specify your platform <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="otherPlatform"
                                placeholder="Enter your selling platform"
                                value={otherPlatform}
                                onChange={(e) => setOtherPlatform(e.target.value)}
                                required
                              />
                            </div>
                          )}

                          {/* Contact Number */}
                          <div className="mb-3">
                            <label htmlFor="resellerPhone" className="form-label">
                              Contact Number <span className="text-danger">*</span>
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              id="resellerPhone"
                              placeholder="Enter your contact number"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      )}

                      {/* Regular User Fields */}
                      {userType === "regular" && (
                        <>
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <label htmlFor="city" className="form-label">
                                City
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                              />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label htmlFor="state" className="form-label">
                                State
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <label htmlFor="phone" className="form-label">
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                              />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label htmlFor="country" className="form-label">
                                Country
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                              />
                            </div>
                          </div>
                        </>
                      )}

                      <div className="row d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-primary w-75"
                          disabled={userType === "reseller" && !acceptedTerms}
                        >
                          Create Account
                        </button>
                        {userType === "reseller" && !acceptedTerms && (
                          <div className="text-center mt-2 text-danger">
                            <small>
                              Please accept reseller terms to continue
                            </small>
                          </div>
                        )}
                      </div>
                    </form>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>

        {/* Terms and Conditions Modal */}
        <Modal show={showTerms} onHide={handleCloseTerms} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Reseller Terms and Conditions</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ maxHeight: "400px", overflowY: "auto" }}>
              <h5>Terms and Conditions for Resellers</h5>
              <p>
                By selecting "Reseller" and proceeding with registration, you agree to the following terms:
              </p>
              <ol>
                <li>You will represent our products professionally and accurately.</li>
                <li>You agree to follow all applicable laws and regulations in your jurisdiction.</li>
                <li>You will not engage in deceptive or misleading marketing practices.</li>
                <li>You understand that reseller pricing and terms may differ from regular customers.</li>
                <li>You agree to maintain accurate records of your sales and transactions.</li>
                <li>You will comply with all platform-specific rules (Amazon, Etsy, eBay, etc.).</li>
                <li>You understand that this agreement may be terminated by either party with notice.</li>
              </ol>
              <p>
                <strong>Note:</strong> Additional terms may apply based on your selling platform and location.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseTerms}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAcceptTerms}>
              Accept Terms
            </Button>
          </Modal.Footer>
        </Modal>
      </LayoutOne>
    </Fragment>
  );
};

export default LoginRegister;