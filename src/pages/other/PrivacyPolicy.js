import React from "react";
import LayoutOne from "../../layouts/LayoutOne";

const PrivacyPolicy = () => {
  return (
    <LayoutOne>
      <div className="container mt-5">
        <h1 className="text-center" style={{ color: "#4caf50",fontWeight:"bold"}}>
          Privacy Policy
        </h1>
        <p className="text-center">
          At Cey4hub, we are dedicated to protecting the privacy and security of
          your personal information. This Privacy Policy outlines how we
          collect, use, and safeguard your information when you visit or make a
          purchase on our website. By using our website, you agree to the
          practices described in this policy.
        </p>

        <h3 style={{ color: "#4caf50",fontWeight:"bold"}}>Information We Collect</h3>
        <p>
          When you visit our website, we may collect the following information:
        </p>
        <ul>
          <li>
            <strong>Personal identification information:</strong> Name, email
            address (e.g., cey4hub@gmail.com), telephone number (e.g., TP: 0112
            847 846), and any other details you provide during registration or
            checkout.
          </li>
          <li>
            <strong>Payment and billing information:</strong> Necessary to
            process your orders, including secure handling of credit card
            details by trusted third-party payment processors.
          </li>
          <li>
            <strong>Browsing information:</strong> IP address, browser type,
            device information, and cookies.
          </li>
        </ul>

        <h3 style={{ color: "#4caf50",fontWeight:"bold" }}>Use of Information</h3>
        <p>We may use the information collected for the following purposes:</p>
        <ul>
          <li>Processing and fulfilling orders, including delivery.</li>
          <li>
            Communicating with you about your orders, customer support, or
            inquiries.
          </li>
          <li>
            Personalizing your shopping experience and showing relevant product
            recommendations and promotions.
          </li>
          <li>
            Improving our website and services based on customer feedback.
          </li>
          <li>
            Preventing fraud, unauthorized activities, or abuse of our website.
          </li>
        </ul>

        <h3 style={{ color: "#4caf50",fontWeight:"bold" }}>Information Sharing</h3>
        <p>
          We respect your privacy and do not sell or transfer your personal
          information to third parties without your consent, except in the
          following cases:
        </p>
        <ul>
          <li>
            <strong>Trusted service providers:</strong> We may share your data
            with third-party services that help operate our website, process
            payments, or deliver products. These partners are required to handle
            your data securely.
          </li>
          <li>
            <strong>Legal obligations:</strong> We may disclose your data if
            required by law or in response to legal requests.
          </li>
        </ul>

        <h3 style={{ color: "#4caf50",fontWeight:"bold" }}>Data Security</h3>
        <p>
          We implement industry-standard measures to protect your personal
          information from unauthorized access or disclosure. While we work to
          secure your data, no method of online transmission or storage is
          completely secure.
        </p>

        <h3 style={{ color: "#4caf50",fontWeight:"bold" }}>Cookies and Tracking Technologies</h3>
        <p>
          We use cookies to enhance your browsing experience, track website
          traffic, and gather information about your preferences. You may
          disable cookies through your browser settings, but this may affect
          certain website features.
        </p>

        <h3 style={{ color: "#4caf50",fontWeight:"bold" }}>Changes to the Privacy Policy</h3>
        <p>
          Cey4Hub reserves the right to update this Privacy Policy at any time.
          Changes will be posted on this page with the updated date. Please
          review the policy periodically to stay informed.
        </p>

        <h3 style={{ color: "#4caf50",fontWeight:"bold" }}>Contact Us</h3>
        <p>
          If you have questions or concerns regarding this Privacy Policy,
          please contact us at{" "}
          <a href="mailto:support@cey4hub.com">support@cey4hub.com</a>.
        </p>
      </div>
    </LayoutOne>
  );
};

export default PrivacyPolicy;
