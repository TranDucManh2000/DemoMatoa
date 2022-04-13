import React from "react";
import "../scss/foooterwire.scss";
import {
  FacebookOutlined,
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
  YoutubeFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";

const FooterWire = () => {
  const datalogo = [
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
  ];
  return (
    <div className="foooterwire">
      <div className="boxlogo">
        <div className="boxitem">
          {datalogo.map((vl, index) => (
            <div className="item" key={index}></div>
          ))}
        </div>
      </div>

      <div className="boxend">
        <div className="boxtext">
          <div className="textitem">
            <div className="logomatoa"></div>
            <h2>Address</h2>
            <p style={{lineHeight:'30px'}}>
              Store & Office Jl. Setrasari Kulon III, No. 10-12, Sukarasa,
              Sukasari, Bandung, Jawa Barat, Indonesia 40152
            </p>
            <h2>Office Hour</h2>
            <p>Monday - Sunday 10.00 - 18.00</p>
          </div>

          <div className="textitem">
            <h1>Get in touch</h1>
            <hr />
            <div className="minitext">
              <span className="title">Phone</span>
              <span className="number">022-20277564</span>
              <span className="title">Service Center</span>
              <span className="number">0811-233-8899</span>
              <span className="title">Customer Service</span>
              <span className="number">0811-235-9988</span>
            </div>
            <div className="iconin4">
              <FacebookFilled className="icon" />
              <InstagramFilled className="icon" />
              <TwitterCircleFilled className="icon" />
              <YoutubeFilled className="icon" />
            </div>
          </div>

          <div className="textitem">
            <h1>Useful Link</h1>
            <hr />
            <p>Warranty & Complaints</p>
            <p>Order & Shipping</p>
            <p>Tracking Order</p>
            <p>About Us</p>
            <p>Repair</p>
            <p>Terms</p>
            <p>FAQ</p>
          </div>

          <div className="textitem">
            <h1>Campaign</h1>
            <hr />
            <p>Mengenal Arti Cukup</p>
            <p>TellYour Difference</p>
            <p>Waykambas</p>
            <p>Rebrand</p>
            <p>Gallery</p>
            <p>Singo</p>
            <p>Rakai</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterWire;
