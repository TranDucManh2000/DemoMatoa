import React from "react";
import "../checkoutscss/onconfirm.scss";
import { ClockCircleOutlined, CarOutlined } from "@ant-design/icons";

const OnConfirmation = () => {
  return (
    <div className="onconfirm">
      <div className="oder">
        <div className="boxoder">
          <div className="boximg"></div>
          <h1>Order Confirmed</h1>
          <p>
            Your order have been confirmed, please wait and track your order
          </p>
          <button className="btnred">Go to track page</button>
        </div>
      </div>

      <div className="confirmbild">
        <div className="bilditem">
          <div className="boxicon">
            <span>
              <ClockCircleOutlined /> 10 days delivery
            </span>
            <span>
              <CarOutlined /> DHL Express
            </span>
          </div>
        </div>
        <div className="bilditem">
          <div className="textitem">
            <h2>Way Kambas Mini Ebony </h2>
            <p>2 x IDR 1.024.000 </p>
            <h2>Sikka (Ebony & Mapple)</h2>
            <p> 1 x IDR 1.264.000</p>
          </div>
        </div>
        <div className="bilditem">
          <div className="itemtotal">
            <h2>Subtotal</h2>
            <h2>Rp 2.152.000</h2>
            <h2>Shipping Cost</h2>
            <h2> Rp 500.000</h2>
            <h2>Packaging</h2>
            <h2> Rp 500.000</h2>
          </div>
        </div>
        <hr />
        <div className="bilditem">
          <div className="itemtotal">
            <h2>Grand Total</h2>
            <h1>Rp 2.702.000</h1>
          </div>
        </div>
        <hr />
        <div className="bilditem">
          <div className="itemtotal">
            <h3>Shipping Address</h3>
            <p>18 Richardson Drive Fountain Valley, CA 92708</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnConfirmation;
