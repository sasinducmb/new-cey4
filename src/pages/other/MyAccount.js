import { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "../../store/slices/user-slice";
import cogoToast from "cogo-toast";
const MyAccount = () => {
  let { pathname } = useLocation();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetUserProfileQuery();
  const [updateUserProfile] = useUpdateUserProfileMutation(); 

  // State to track editing mode
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || error?.status === 401 || error?.status === 403) {
      navigate("/login-register");
    }
  }, [error, navigate]);

  useEffect(() => {
    if (data?.user) {
      setFormData({
        name: data.user.name,
        email: data.user.email,
        phoneNumber: data.user.phoneNumber,
        state: data.user.state,
        city: data.user.city,
        country: data.user.country,
      });
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred</div>;

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission

  console.log(formData);
  console.log(data.user._id);
  // Toggle edit mode
  const handleEditClick = async () => {
    if (isEditing) {
      try {
        await updateUserProfile({
          userId: data?.user?._id,
          updatedData: formData,
        }).unwrap();
        cogoToast.success("Profile updated successfully!");
      } catch (error) {
        cogoToast.error("Update failed. Please try again.");
        console.error("Update failed:", error);
      }
    }
    setIsEditing(!isEditing);
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="My Account"
        description="My Account page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "My Account", path: process.env.PUBLIC_URL + pathname },
          ]}
        />

        <div className="myaccount-area pb-80 pt-100">
          <div className="container">
            <div className="row">
              <div className="ms-auto me-auto col-lg-9">
                <div className="myaccount-wrapper">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item
                      eventKey="0"
                      className="single-my-account mb-20"
                    >
                      <Accordion.Header className="panel-heading">
                        <span>1 .</span> Account Information{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <p
                              className="edit-profile-text"
                              onClick={handleEditClick}
                              style={{
                                cursor: "pointer",
                                color: "#007bff",
                                textDecoration: "underline",
                                display: "inline-flex",
                                alignItems: "center",
                              }}
                            >
                              {isEditing ? "Save Changes" : "Edit Your Profile"}
                              <span style={{ marginLeft: "5px" }}>✏️</span>
                            </p>
                          </div>
                          <div className="row">
                            <div className="col-lg-12 col-md-6">
                              <div className="billing-info">
                                <label>Full Name</label>
                                <input
                                  type="text"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  readOnly={!isEditing}
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="billing-info">
                                <label>Email Address</label>
                                <input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  readOnly
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>Phone Number</label>
                                <input
                                  type="text"
                                  name="phoneNumber"
                                  value={formData.phoneNumber}
                                  onChange={handleChange}
                                  readOnly={!isEditing}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>State</label>
                                <input
                                  type="text"
                                  name="state"
                                  value={formData.state}
                                  onChange={handleChange}
                                  readOnly={!isEditing}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>City</label>
                                <input
                                  type="text"
                                  name="city"
                                  value={formData.city}
                                  onChange={handleChange}
                                  readOnly={!isEditing}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>Country</label>
                                <input
                                  type="text"
                                  name="country"
                                  value={formData.country}
                                  onChange={handleChange}
                                  readOnly={!isEditing}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default MyAccount;
