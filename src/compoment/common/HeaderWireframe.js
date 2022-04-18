import React from "react";
import "../scss/headerwirefram.scss";
import { ShoppingCartOutlined } from "@ant-design/icons";
import img8 from "../img/image8.png";

const HeaderWireframe = () => {
  return (
    <>
      <div className="header">
        <div className="imglock"></div>
        <div className="textheader">
          <h1>WAY KAMBAS MINI EBONY</h1>
          <hr className="hrT40" />
          <p>
            MATOA Way Kambas - This wood is chosen to represent the Sumatran
            Rhino's skin which is designed with an overlap effect on its strap
            to represent Rhino's skin.
          </p>
          <h3>Discover</h3>
          <hr className="hrT20" />
          <div className="btn">
            <button className="btnred">
              <ShoppingCartOutlined style={{marginRight:'10px'}}/> Add to cart
            </button>
            <button className="btnwrite"></button>
          </div>
        </div>
        <div className="nexheader">
          <button className="btnwrite"></button>
          <button className="btnred"></button>
        </div>
        <div className="vectorbar">
          <div className="vecto1"></div>
          <div className="vecto2"></div>
          <div className="vecto3"></div>
        </div>
      </div>
      <div className="headeritem">
        <div className="boxitem">
          <p>
            Luxurious <b>Eyewear</b>
          </p>
          <div className="maxwick">
            <span className="nunito">
              See the beauty of exotic world with the luxurious glasses
            </span>
          </div>
          <h3> Discover Now </h3> <hr />
          <div className="img"></div>
        </div>
        <div className="boxitem">
          <p>
            Comfortable <b>Watches</b>
          </p>
          <div className="maxwick">
            <span className="nunito">
              Feels the balancing function and beauty in our wooden watches
            </span>
          </div>
          <h3> Discover Now </h3> <hr />
          <div
            className="img"
            style={{ backgroundImage: `url(${img8})` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default HeaderWireframe;
