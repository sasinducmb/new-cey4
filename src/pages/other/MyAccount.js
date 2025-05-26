import { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useLogoutMutation,
} from "../../store/slices/user-slice";
import cogoToast from "cogo-toast";
const MyAccount = () => {
  let { pathname } = useLocation();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetUserProfileQuery();
  const [updateUserProfile] = useUpdateUserProfileMutation();
  const [logout] = useLogoutMutation();
  // State to track editing mode
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

 useEffect(() => {
    if (error) {
      cogoToast.error("Failed to fetch user profile", {
        position: "top-right",
      });
      // Redirect to the home route if there is an error
      navigate('/');
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
   const handleLogout = async () => {
    try {
      await logout().unwrap();
      cogoToast.success("Logged out successfully!");
      // Optionally, redirect to login page or home page
      window.location.href = '/'; // Adjust the redirect path as necessary
    } catch (error) {
      cogoToast.error("Logout failed. Please try again.");
      console.error("Logout failed:", error);
    }
  };

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
        <div className="container mt-5 mb-4">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-sidebar card">
                <div className="card-body text-center">
                  <img
                    src="assets/img/banner/profile.png"
                    alt="Profile"
                    className="rounded-circle"
                  />
                  <h5>{formData.name}</h5>
                  <p>{formData.email}</p>
                   <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
                <ul className="list-group list-group-flush">
                  {/* Add your sidebar links here */}
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card edit-profile">
                <div className="card-body">
                  <h5>Your Profile</h5>
                  <form>
                    <div className="mb-3">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        readOnly={!isEditing}
                      />
                    </div>
                    <div className="mb-3">
                      <label>Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@gmail.com"
                        readOnly
                      />
                    </div>
                    <div className="mb-3">
                      <label>Mobile Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Add number"
                        readOnly={!isEditing}
                      />
                    </div>
                    <div className="mb-3">
                      <label>State</label>
                      <input
                        type="text"
                        className="form-control"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="State"
                        readOnly={!isEditing}
                      />
                    </div>
                    <div className="mb-3">
                      <label>City</label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                        readOnly={!isEditing}
                      />
                    </div>
                    <div className="mb-3">
                      <label>Country</label>
                      <input
                        type="text"
                        className="form-control"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Country"
                        readOnly={!isEditing}
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={handleEditClick}
                    >
                      {isEditing ? "Save Changes" : "Edit Profile"}
                    </button>
                  </form>
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
