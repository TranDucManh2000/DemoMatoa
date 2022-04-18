import React, { useEffect, useState } from "react";
import MatoaFooter from "../common/MatoaFooter";
import NavMatoa from "../common/NavMatoa";
import "../checkoutscss/checkout.scss";
import {
  ToTopOutlined,
  CreditCardOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import OnPayment from "../checkoutcommon/OnPayment";
import OncheckOut from "../checkoutcommon/OncheckOut";
import OnConfirmation from "../checkoutcommon/OnConfirmation";

const CheckOut = () => {
  
  const [styleColor, setstyleColor] = useState("#D84727");
  const [vluaeindex,setvalueindex] = useState(0)
  const indexTab = [<OncheckOut/>,<OnPayment />,<OnConfirmation/>];

  const settab = (vl)=>{
    setvalueindex(vl)
  }

  return (
    <div className="wireframe">
      <NavMatoa />
      <div className="checkout">
        <div className="step">
          <div className="stepchecckout" onClick={()=>settab(0)}>
            <span>
              <ToTopOutlined style={vluaeindex == 0 ?{ color: styleColor }:{}} />
            </span>
            <h1 style={vluaeindex == 0 ?{ color: styleColor }:{}}>1. Checkout</h1>
          </div>
          <div className="line" />
          <div className="stepchecckout" onClick={()=>settab(1)}>
            <span>
              <CreditCardOutlined style={vluaeindex == 1 ?{ color: styleColor }:{}} />
            </span>
            <h1 style={vluaeindex == 1 ?{ color: styleColor }:{}}>2. Payment</h1>
          </div>
          <div className="line" />
          <div className="stepchecckout" onClick={()=>settab(2)}>
            <span>
              <FileDoneOutlined style={vluaeindex == 2 ?{ color: styleColor }:{}} />
            </span>
            <h1 style={vluaeindex == 2 ?{ color: styleColor }:{}}>3. Confirmation</h1>
          </div>
        </div>
        <div className="onetab">{indexTab[vluaeindex]}</div>
      </div>
      <MatoaFooter />
    </div>
  );
};

export default CheckOut;
