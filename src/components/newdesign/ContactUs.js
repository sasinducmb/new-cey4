import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "generalInquiry",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, id } = e.target;

    // For radio buttons, we use the id as the value
    if (type === "radio") {
      setFormData({
        ...formData,
        [name]: id,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would normally handle the form submission
    alert("Message sent successfully!");
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      subject: "generalInquiry",
      message: "",
    });
  };
  return (
    <div className="container-contact">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Contact Us</h2>
        <p>Any question or remarks? Just write us a message!</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10  contact-full-row">
          <div className="card border-0 shadow-sm overflow-hidden card-board contact-full-row">
            <div className="row g-0">
              {/* Left side with contact info */}
              <div className="col-md-4">
                <div
                  className="p-4 h-100 text-white left-contact"
                  style={{ backgroundColor: "#0a483e" }}
                >
                  <h4 className="mb-4 contact-info">Contact Information</h4>
                  <p className="contact-info-p">
                    Say something to start a live chat!
                  </p>

                  <div className="mt-5">
                    <div className="d-flex mb-3 align-items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-telephone-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                        />
                      </svg>
                      <div>
                        <p className="mb-0 contact-info-p mx-2">
                          +44 (0) 7345 345 345
                        </p>
                        <p className="mb-4 contact-info-p mt-3 mx-2">
                          +44 (0) 20 3231 1762
                        </p>
                      </div>
                    </div>

                    <div className="d-flex  align-items-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-envelope-at-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                        <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                      </svg>
                      <p className="contact-info-p mx-3">
                        support@aceyourexam.com
                      </p>
                    </div>

                    <div className="d-flex mb-3 align-items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-geo-alt-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                      </svg>
                      <div className="mx-3">
                        <p className="mb-0 contact-info-p-address">
                          Unit 24,2nd Floor
                        </p>
                        <p className="mb-0 contact-info-p-address">Cubework</p>
                        <p className="mb-0 contact-info-p-address">
                          37 Butt Oak Broadway
                        </p>
                        <p className="mb-0 contact-info-p-address">
                          Romford RM1 4AB
                        </p>
                        <p className="mb-0 contact-info-p-address">
                          United Kingdom
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 mx-2 d-flex gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-twitter-x"
                      viewBox="0 0 16 16"
                    style={{cursor:"pointer"}}
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                      style={{cursor:"pointer"}}
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-discord"
                      viewBox="0 0 16 16"
                      style={{cursor:"pointer"}}
                    >
                      <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right side with form */}
              <div className="col-md-8 ">
                <div className="p-4 p-md-5">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="firstName" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastName" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="phoneNumber" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="+1 (123) 456 789"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label">Select Subject?</label>
                      <div className="d-flex flex-wrap">
                        <div className="form-check me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="subject"
                            id="generalInquiry"
                            checked={formData.subject === "generalInquiry"}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="generalInquiry"
                          >
                            General Inquiry
                          </label>
                        </div>
                        <div className="form-check me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="subject"
                            id="generalHelp"
                            checked={formData.subject === "generalHelp"}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="generalHelp"
                          >
                            General Help
                          </label>
                        </div>
                        <div className="form-check me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="subject"
                            id="generalQuery"
                            checked={formData.subject === "generalQuery"}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="generalQuery"
                          >
                            General Query
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="subject"
                            id="generalReply"
                            checked={formData.subject === "generalReply"}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="generalReply"
                          >
                            General Reply
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Write your message..."
                        required
                      ></textarea>
                    </div>

                    <div className="text-end">
                      <button
                        type="submit"
                        className="btn btn-primary px-4 py-2"
                        style={{ backgroundColor: "#0a483e", border: "none" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
