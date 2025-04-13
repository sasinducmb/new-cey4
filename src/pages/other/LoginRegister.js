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
  const [registerUser] = useRegisterUserMutation();
  const [login, { isLoading }] = useLoginMutation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();

      if (response.message) {
        cogoToast.success("Login successful", { position: "top-right" });
        localStorage.setItem("token", response.token);
        navigate("/");
      }

      // Handle successful login, e.g., navigate to dashboard
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

  const handleRegister = async (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      cogoToast.error("Passwords do not match", { position: "top-right" });
      return;
    }
    setLoading(true);
    try {
      const response = await registerUser({
        name,
        password,
        email,
        city,
        state,
        country,
        phoneNumber,
      }).unwrap();

      if (response.message) {
        setLoading(false);
        navigate("/email-verification");
      }
    } catch (error) {
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
        {/* breadcrumb */}
        {/* <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            {
              label: "Login Register",
              path: process.env.PUBLIC_URL + pathname,
            },
          ]}
        /> */}
        {/* <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={handleLogin}>
                              <input
                                type="email"
                                name="user-name"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Remember me</label>
                            
                                </div>
                                <button type="submit">
                                  <span>Login</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={handleRegister}>
                              <input
                                type="text"
                                name="user-name"
                                placeholder="Username"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                              />
                              <input
                                type="password"
                                name="user-confpassword"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                                required
                              />
                              <input
                                name="user-email"
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                              <input
                                name="user-city"
                                placeholder="City"
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                              />
                              <input
                                name="user-state"
                                placeholder="State"
                                type="text"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                              />
                              <input
                                name="user-mobile"
                                placeholder="Phone No"
                                type="number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                              />
                              <input
                                name="user-country"
                                placeholder="Country"
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                              />
                              <div className="button-box">
                                <button type="submit">
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="container d-flex justify-content-center align-items-center">
          <div className="row w-100">
            <div className="col-md-6 green-section d-none d-md-block">
              <h1>Ready to Go Green?</h1>
            </div>
            <div className="col-md-6 form-section p-5">
              <h2>Create Account</h2>
              <div className="mb-3">
                <button className="btn btn-light w-100 mb-2">
                  Sign up with Google
                </button>
                <button className="btn btn-light w-100">
                  Sign up with Facebook
                </button>
              </div>
              <p className="text-center">- OR -</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Create Account
                </button>
              </form>
              <p className="mt-3 text-center">
                Already have an account? <a href="#">Log in</a>
              </p>
            </div>
          </div>
        </div> */}
        <div className="container d-flex justify-content-end align-items-center mb-5  green-section">
          <div className="row w-100">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <h1 className="green-section-right">Ready to Go Green?</h1>
              <img src="assets/img/banner/Abstraction.png" className="img-fluid" style={{height:"300px",width:"300px"}}/>
            </div>
            <div className="col-md-6 form-section pb-5 green-section-left">
              <Tab.Container defaultActiveKey="login">
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

                {/* <div className="mb-3">
                  <button className="btn btn-light w-100 mb-2">
                    Continue with Google
                  </button>
                  <button className="btn btn-light w-100">
                    Continue with Facebook
                  </button>
                </div>
                <p className="text-center">- OR -</p> */}

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
                      <div className="mb-1 form-check">
                        {/* <input
                          type="checkbox"
                          className="form-check-input"
                          id="remember-me"
                        /> */}
                        {/* <label
                          className="form-check-label"
                          htmlFor="remember-me"
                        >
                          Remember me
                        </label> */}
                      </div>
                      <button type="submit" className="btn btn-primary w-25">
                        Login
                      </button>
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

                      <button type="submit" className="btn btn-primary w-50">
                        Create Account
                      </button>
                    </form>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default LoginRegister;
