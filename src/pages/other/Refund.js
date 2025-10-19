import React, { Fragment, useState } from "react";
import axios from "axios";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";

function Refund() {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [reason, setReason] = useState("");
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const baseURL = process.env.REACT_APP_BACKEND_URL;

  // 🔹 Fetch order by ID
  const fetchOrder = async () => {
    if (!orderId.trim()) {
      setMessage("⚠️ Please enter an order ID.");
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      const response = await axios.get(`${baseURL}/refund/getrefundorders/${orderId}`);
      setOrder(response.data);
      setMessage("✅ Order found successfully.");
    } catch (error) {
      console.error("Error fetching order:", error);
      setOrder(null);
      setMessage("❌ Order not found or pending.");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Handle file upload
  const handleFileChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  // 🔹 Submit refund request
  const handleRefundSubmit = async (e) => {
    e.preventDefault();
    if (!selectedProduct || !reason) {
      setMessage("⚠️ Please select a product and provide a reason.");
      return;
    }

    const formData = new FormData();
    formData.append("orderId", order._id);
    formData.append("ProductId", selectedProduct);
    formData.append("reason", reason);
    images.forEach((file) => formData.append("additionalImages", file));

    try {
      const response = await axios.post(`${baseURL}/refund/requestrefund`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("✅ Refund request submitted successfully!");
      console.log("Refund created:", response.data);
      setReason("");
      setImages([]);
      setSelectedProduct("");
    } catch (error) {
      console.error("Error submitting refund:", error);
      setMessage("❌ Failed to submit refund request.");
    }
  };

  return (
    <Fragment>
      <SEO titleTemplate="Refund Policy" description="Refund policy and request page." />
      <LayoutOne headerTop="visible">
        <div className="container" style={{ marginTop: "2rem", maxWidth: "850px" }}>
          <h2 className="text-center mb-4 text-success fw-bold">
            🧾 Refund Request Portal
          </h2>

          {/* -------------------- POLICY SECTION -------------------- */}
          <div
            className="card p-4 shadow-sm mb-5"
            style={{
              backgroundColor: "#e8f5e9", // soft green background
              borderLeft: "6px solid #4caf50", // green accent border
              color: "#000", // black text
            }}
          >
            <h4 className="mb-3 text-success fw-semibold">
              Key Factors to Consider Before Submitting a Refund Request
            </h4>

            <ul style={{ lineHeight: "1.7", color: "#000" }}>
              <li>
                <strong>Damaged or Broken Items:</strong> Claims must be submitted within{" "}
                <b>7 days</b> of receiving the item. Clear photo or video evidence is required.
              </li>
              <li>
                <strong>Non-Delivery or Misplaced Goods:</strong> Refund requests must be submitted
                within <b>10 days</b> from the date of dispatch.
              </li>
              <li>
                <strong>Change of Mind Returns:</strong> Returns must be in the{" "}
                <b>original condition</b> within <b>14 days</b> of receiving the item.
              </li>
              <li>
                <strong>Proof of Condition:</strong> Clear <b>photos</b> of the affected item are
                required for claims.
              </li>
              <li>
                <strong>Changes to Delivery Address:</strong> Once a product has been dispatched, the
                company is not responsible for delivery issues resulting from address changes.
              </li>
            </ul>

            <hr className="my-4" style={{ borderTop: "2px dashed #a5d6a7" }} />

            <h5 className="text-success fw-semibold">How We Process Refunds</h5>
            <p style={{ color: "#000" }}>
              The company determines the refund category based on the information and evidence
              provided. Possible outcomes include:
            </p>
            <ul style={{ color: "#000", lineHeight: "1.6" }}>
              <li><strong>Full Refund</strong> — If the product is defective or completely unusable.</li>
              <li><strong>Partial Refund</strong> — If the product has minor issues or partial damage.</li>
              <li><strong>Like-for-Like Replacement</strong> — If a similar replacement item is available.</li>
            </ul>
            <p style={{ color: "#000" }}>
              Refunds are processed only after the returned products have been received and inspected
              at our warehouse. All refunds will be issued using the{" "}
              <b>original payment method</b>.
            </p>
          </div>

          {/* -------------------- SEARCH ORDER -------------------- */}
          <div className="card p-3 shadow-sm mb-4">
            <label htmlFor="orderId" className="fw-semibold">
              Enter your Order ID:
            </label>
            <div className="d-flex mt-2">
              <input
                type="text"
                id="orderId"
                className="form-control me-2"
                placeholder="e.g., 68f3d5280a29335729d30521"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
              />
              <button
                className="btn btn-success"
                onClick={fetchOrder}
                disabled={loading}
              >
                {loading ? "Searching..." : "Search Order"}
              </button>
            </div>
          </div>

          {/* -------------------- MESSAGE -------------------- */}
          {message && (
            <div
              className={`alert ${
                message.startsWith("✅")
                  ? "alert-success"
                  : message.startsWith("❌")
                  ? "alert-danger"
                  : "alert-warning"
              }`}
            >
              {message}
            </div>
          )}

          {/* -------------------- ORDER DETAILS + REFUND FORM -------------------- */}
          {order && (
            <div className="card p-4 shadow-sm mb-5 border-success">
              <h5 className="mb-3 text-success">Order Details</h5>
              <p>
                <strong>Customer:</strong> {order.billingInfo?.firstName}{" "}
                {order.billingInfo?.lastName}
              </p>
              <p>
                <strong>Status:</strong> {order.status}
              </p>
              <p>
                <strong>Total:</strong> ${order.overallTotal}
              </p>

              <hr />
              <h6 className="text-success">Select a Product for Refund</h6>
              <form onSubmit={handleRefundSubmit}>
                <select
                  className="form-select mb-3"
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                >
                  <option value="">-- Select a Product --</option>
                  {order.items?.map((item) => (
                    <option key={item._id} value={item.product?._id}>
                      {item.product?.name}
                    </option>
                  ))}
                </select>

                <label className="fw-semibold text-success">Reason for Refund:</label>
                <textarea
                  className="form-control mb-3"
                  rows="4"
                  placeholder="Describe your reason..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                ></textarea>

                <label className="fw-semibold text-success">
                  Upload Additional Images (optional):
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="form-control mb-3"
                  onChange={handleFileChange}
                />

                <button type="submit" className="btn btn-success w-100 fw-semibold">
                  Submit Refund Request
                </button>
              </form>
            </div>
          )}
        </div>
      </LayoutOne>
    </Fragment>
  );
}

export default Refund;
