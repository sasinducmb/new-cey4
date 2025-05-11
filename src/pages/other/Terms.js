import React from "react";
import LayoutOne from "../../layouts/LayoutOne";

function Terms() {
  return (
    <LayoutOne>
      <div className="container mt-5">
        <h1 className="text-center" style={{ color: "#4caf50",fontWeight:"bold" }}>
          Terms and Conditions
        </h1>
        <p className="text-center">
          Welcome to Cey4hub. These Terms and Conditions govern your use of our
          website and the purchase of products from our platform. Cey4Hub is an
          e-commerce platform offering a wide range of handmade products for
          online purchase. These Terms & Conditions outline the rules and
          regulations for the use of our platform and services.
        </p>

        <h3 style={{ color: "#4caf50",fontWeight:"bold" }}>Use of the Website</h3>
        <ul>
          <li>
            You are responsible for maintaining the confidentiality of your
            account information, including username and password.
          </li>
          <li>
            You agree to provide accurate information during registration and
            checkout.
          </li>
          <li>
            Unauthorized use of our website for unlawful purposes is prohibited.
          </li>
        </ul>

        <h3 style={{ color: "#4caf50",fontWeight:"bold" }}>Account Registration</h3>
        <p>
          To access some features, you may need to create an account. You agree
          to:
        </p>
        <ul>
          <li>Provide accurate, current, and complete information.</li>
          <li>Keep your login credentials secure.</li>
          <li>
            Notify us immediately of any unauthorized use of your account. We
            reserve the right to suspend or terminate your account if we suspect
            any misuse or fraudulent activity.
          </li>
        </ul>

        <h3 style={{ color: "#4caf50",fontWeight:"bold" }}>Product Information and Pricing</h3>
        <ul>
          <li>
            We strive to provide accurate product descriptions and pricing.
            However, we do not guarantee complete accuracy.
          </li>
          <li>
            Prices are subject to change without notice. Promotions and
            discounts are valid for limited times and may be subject to
            additional terms.
          </li>
        </ul>

        <h3 style={{ color: "#4caf50",fontWeight:"bold" }}>Orders and Payments</h3>
        <ul>
          <li>
            By placing an order, you make an offer to purchase the selected
            products.
          </li>
          <li>
            We reserve the right to cancel any order for reasons such as product
            availability, pricing errors, or suspected fraud.
          </li>
          <li>Payment must be made through approved payment methods.</li>
          <li>
            Once an order is confirmed, it cannot be canceled or changed unless
            otherwise stated.
          </li>
          <li>
            You agree to provide valid payment information. Payments are
            securely processed by third-party processors. We do not store your
            full payment details.
          </li>
        </ul>

        <h3 style={{ color: "#4caf50",fontWeight:"bold" }}>Shipping and Delivery</h3>
        <ul>
          <li>
            We strive to ship orders promptly. However, delivery times are
            estimates and may vary.
          </li>
          <li>
            Delivery fees and estimated times will be clearly displayed during
            checkout.
          </li>
          <li>
            Delays caused by third-party couriers, customs, or natural events
            are not our responsibility.
          </li>
        </ul>

        <h3 style={{ color: "#4caf50",fontWeight:"bold" }}>Returns & Refunds</h3>
        <ul>
          <li>
            Items must be returned in their original condition within the return
            period.
          </li>
          <li>Refunds will be processed using the original payment method.</li>
          <li>
            To verify any damage or breakage, customers must provide clear
            photos or videos of the affected product as evidence.
          </li>
          <li>
            Refunds will be processed only after the returned products are
            received and inspected at our warehouse.
          </li>
        </ul>

        <h3 style={{ color: "#4caf50",fontWeight:"bold" }}>User Conduct</h3>
        <p>You agree not to:</p>
        <ul>
          <li>Use the website for unlawful purposes.</li>
          <li>Post or transmit offensive, harmful, or deceptive content.</li>
          <li>Disrupt or interfere with website functionality or security.</li>
        </ul>
        <p>
          Violation may result in immediate suspension or termination of your
          access.
        </p>

        <h3 style={{ color: "#4caf50",fontWeight:"bold" }}>Intellectual Property</h3>
        <ul>
          <li>
            All website content, including text, images, and graphics, logos,
            images, and software is protected by intellectual property rights
            and belongs to Cey4hub.
          </li>
          <li>
            You may not reproduce, distribute, or modify website content without
            prior written consent.
          </li>
          <li>Use our trademarks or branding without authorization.</li>
        </ul>

        <h3 style={{ color: "#4caf50",fontWeight:"bold" }}>Limitation of Liability</h3>
        <ul>
          <li>
            Cey4hub is not liable for any indirect or consequential damages
            arising from your use of the website or products.
          </li>
          <li>
            We make no express or implied warranties regarding the accuracy or
            suitability of products.
          </li>
        </ul>

        <h3 style={{ color: "#4caf50",fontWeight:"bold" }}>Disclaimer of Warranties</h3>
        <p>
          Cey4Hub provides the website and services "as is" and "as available"
          without any warranties, express or implied. We do not guarantee:
        </p>
        <ul>
          <li>The website will always be secure or error-free.</li>
          <li>The accuracy or reliability of information or products.</li>
        </ul>

        <h3 style={{ color: "#4caf50" }}>Amendments and Termination</h3>
        <ul>
          <li>
            Cey4hub reserves the right to modify these Terms and Conditions
            without prior notice. It is your responsibility to review these
            terms periodically.
          </li>
        </ul>
      </div>
    </LayoutOne>
  );
}

export default Terms;
