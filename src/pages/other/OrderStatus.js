import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Tab from "react-bootstrap/Tab";

function OrderStatus() {
  return (
    <Fragment>
      <SEO
        titleTemplate="order-confirm"
        description="Login page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        <Tab.Container defaultActiveKey="login">
          <div className="order-status-section d-flex align-items-center flex-column">
            <div>
              <h3 className="text-center text-success">Order Status</h3>
            </div>

            <div className="col-lg-6">
              <form>
                <label>Order ID</label>
                <input type="text" name="orderid" required />
                <div className="place-order mt-25">
                  <button type="submit" className="order-status">
                    Order Status
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Tab.Container>
      </LayoutOne>
    </Fragment>
  );
}

export default OrderStatus;
