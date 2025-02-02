import React, { Fragment, useState } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import { Tab, Card, ListGroup, Badge, Row, Col } from "react-bootstrap";
import { useGetOrderByIdQuery } from "../../store/slices/orderSlice";

function OrderStatus() {
  const [orderId, setOrderId] = useState("");
  const [submittedOrderId, setSubmittedOrderId] = useState(null);

  // Fetch order data using the Redux query
  const {
    data: order,
    isLoading,
    isError,
    error,
  } = useGetOrderByIdQuery(submittedOrderId, {
    skip: !submittedOrderId, // Skip the query if no order ID is submitted
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setSubmittedOrderId(orderId); // Set the submitted order ID
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="Order Status"
        description="Order status page of Flone React minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        <Tab.Container defaultActiveKey="login">
          <div className="order-status-section d-flex align-items-center flex-column">
            <div>
              <h3 className="text-center text-success">Order Status</h3>
            </div>

            <div className="col-lg-6">
              {/* Form for submitting order ID */}
              <form onSubmit={handleSubmit}>
                <label>Order ID</label>
                <input
                  type="text"
                  name="orderid"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  required
                />
                <div className="place-order mt-25">
                  <button type="submit" className="order-status mb-4">
                    Get Order Status
                  </button>
                </div>
              </form>
            </div>
          </div>
          {isLoading && <div>Loading...</div>}
          {isError && (
            <div className="text-danger">
              Error: {error?.data?.message || "Unable to fetch order data."}
            </div>
          )}

          {!isLoading && !isError && order && (
            <div className="container py-5">
              <div
                className="card shadow-sm"
                style={{ maxWidth: "680px", margin: "auto" }}
              >
                <div className="card-header bg-success text-white">
                  <h5 className="mb-0 text-center">Order Summary</h5>
                </div>
                <div className="card-body">
                  <div className="progress-tracker">
                    <div className="progress-line"></div>
                    <div className="progress-line-active"></div>

                    <div
                      className={`progress-step ${
                        order.status === "confirmed" ||
                        order.status === "processing" ||
                        order.status === "Dispatch" ||
                        order.status === "Delivered"
                          ? "active"
                          : "pending"
                      }`}
                    >
                      <i
                        className={
                          order.status === "confirmed"
                            ? "pe-7s-check mx-1"
                            : "pe-7s-check mx-1"
                        }
                      ></i>
                      <small>Order confirmed</small>
                    </div>
                    <div
                      className={`progress-step ${
                        order.status === "processing" ||
                        order.status === "Dispatch" ||
                        order.status === "Delivered"
                          ? "active"
                          : "pending"
                      }`}
                    >
                      <i
                        className={
                          order.status === "processing"
                            ? "pe-7s-hourglass mx-1"
                            : order.status === "confirmed"
                            ? "pe-7s-hourglass mx-1"
                            : order.status === "Dispatch"
                            ? "pe-7s-check mx-1"
                            : "pe-7s-check mx-1" // Default icon for "Delivered" or any other status
                        }
                      ></i>
                      <small>Processing</small>
                    </div>
                    <div
                      className={`progress-step ${
                        order.status === "Dispatch" ||
                        order.status === "Delivered"
                          ? "active"
                          : "pending"
                      }`}
                    >
                      <i
                        className={
                          order.status === "Dispatch"
                            ? "pe-7s-car mx-1"
                            : order.status === "confirmed"
                            ? "pe-7s-car mx-1"
                            : order.status === "processing"
                            ? "pe-7s-car mx-1"
                            : "pe-7s-check mx-1" // Default icon for "Delivered" or any other status
                        }
                      />
                      <small>Dispatch</small>
                    </div>
                    <div
                      className={`progress-step ${
                        order.status === "Delivered" ? "active" : "pending"
                      }`}
                    >
                      <i
                        className={
                          order.status === "Delivered"
                            ? "pe-7s-check mx-1"
                            : "pe-7s-gift mx-1"
                        }
                      />
                      <small>Delivered</small>
                    </div>
                  </div>
                  <div className="order-info">
                    <h6 className="text-uppercase mb-3">Billing Information</h6>
                    <div className="row">
                      <div className="col-md-6">
                        <p>
                          <span className="label">Name:</span>{" "}
                          {order.billingInfo?.firstName}{" "}
                          {order.billingInfo?.lastName}
                        </p>
                        <p>
                          <span className="label">Address:</span>{" "}
                          {order.billingInfo?.streetAddress}
                          <br />
                          {order.billingInfo?.city}, {order.billingInfo?.state}{" "}
                          {order.billingInfo?.postalCode}
                        </p>
                        <p>
                          <span className="label">Phone:</span>{" "}
                          {order.billingInfo?.phone}
                        </p>
                        <p>
                          <span className="label">Email:</span>{" "}
                          {order.billingInfo?.email}
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <span className="label">ORDER ID:</span>
                          <br />
                          {order._id}
                        </p>
                        {
                          order.status ==="Dispatch" &&(

                        <p>
                          <span className="label">SHIPPING:</span>
                          <br />
                          {order.shippingMethod}
                        </p>
                          )

                        }
                        {order.status === "Dispatch" && order.trackId && (
                          <p>
                            <span className="label"><b>TRACKING NUMBER:</b></span>
                            <br />
                            <b>{order.trackId}</b>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="order-items">
                    <h6 className="text-uppercase mb-3">Order Items</h6>
                    {order.items?.map((item) => (
                      <div
                        key={item._id}
                        className="d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <p className="mb-0">{item.product?.name}</p>
                          <small className="text-muted">
                            Quantity: {item.quantity}
                          </small>
                        </div>
                        <div>
                          <p className="mb-0 fw-bold">
                            £ {order.overallTotal?.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Tab.Container>
      </LayoutOne>
    </Fragment>
  );
}

export default OrderStatus;
