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

            {/* Order status details */}
            {isLoading && <div>Loading...</div>}
            {isError && (
              <div className="text-danger">
                Error: {error?.data?.message || "Unable to fetch order data."}
              </div>
            )}
            {!isLoading && !isError && order && (
              <Card className="mb-4 shadow rounded-lg">
                <Card.Header className="bg-success text-center">
                  <h5 className="text-white ">Order Summary</h5>
                </Card.Header>
                <Card.Body>
                  {/* Status and Tracking */}
                  <div className="mb-4">
                    <Row className="text-center">
                      <Col>
                        <Badge bg="success" className="p-2 w-100">
                          <strong>Status:</strong> {order.status}
                        </Badge>
                      </Col>
                      <Col>
                        <Badge bg="info" className="p-2 w-100">
                          <strong>Shipping:</strong> {order.shippingMethod}
                        </Badge>
                      </Col>
                      <Col>
                        {order.status !== "Delivered" &&
                          order.status !== "Processing" && (
                            <Badge
                              bg="warning"
                              text="dark"
                              className="p-2 w-100"
                            >
                              <strong>Track ID:</strong> {order.trackId}
                            </Badge>
                          )}
                      </Col>
                    </Row>
                  </div>

                  {/* Order ID */}
                  <div className="mb-4 text-center">
                    <h6 className="text-uppercase text-primary">Order ID:</h6>
                    <h5 className="text-dark">{order._id}</h5>
                  </div>

                  {/* Billing Information */}
                  <div className="mb-4">
                    <h6 className="text-uppercase text-muted">
                      Billing Information
                    </h6>
                    <hr />
                    <p className="mb-1">
                      <strong>Name:</strong> {order.billingInfo?.firstName}{" "}
                      {order.billingInfo?.lastName}
                    </p>
                    <p className="mb-1">
                      <strong>Address:</strong>{" "}
                      {order.billingInfo?.streetAddress}
                    </p>
                    <p className="mb-1">
                      {order.billingInfo?.city}, {order.billingInfo?.state}{" "}
                      {order.billingInfo?.postalCode}
                    </p>
                    <p className="mb-1">
                      <strong>Phone:</strong> {order.billingInfo?.phone}
                    </p>
                    <p>
                      <strong>Email:</strong> {order.billingInfo?.email}
                    </p>
                  </div>

                  {/* Order Items */}
                  <div>
                    <h6 className="text-uppercase text-muted">Order Items</h6>
                    <hr />
                    <ListGroup className="border-0">
                      {order.items?.map((item) => (
                        <ListGroup.Item
                          key={item._id}
                          className="d-flex justify-content-between align-items-center border-0 px-0"
                        >
                          <div>
                            <strong>{item.product?.name}</strong>
                            <br />
                            <small>Quantity: {item.quantity}</small>
                          </div>
                          <Badge pill bg="primary" className="p-2">
                            {item.totalPrice?.toFixed(2)}
                          </Badge>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                </Card.Body>
                <Card.Footer className="bg-light text-center">
                  <strong>Total:</strong>£ {order.overallTotal?.toFixed(2)}
                </Card.Footer>
              </Card>
            )}
          </div>
        </Tab.Container>
      </LayoutOne>
    </Fragment>
  );
}

export default OrderStatus;
