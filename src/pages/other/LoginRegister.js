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

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();

      if (response.token) {
        localStorage.setItem("token", response.token);
      }
      console.log(response);  
      if (response.message) {
        // Check the user's role in the response
        response.user.role === "admin"  ?  window.location.href = process.env.REACT_APP_DASHBOARD_URL : navigate("/");      
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
      <SEO
        titleTemplate="Login"
        description="Login page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            {
              label: "Login Register",
              path: process.env.PUBLIC_URL + pathname,
            },
          ]}
        />
        <div className="login-register-area pt-100 pb-100">
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
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    Forgot Password?
                                  </Link>
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
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default LoginRegister;
