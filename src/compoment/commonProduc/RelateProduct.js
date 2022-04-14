import React from "react";
import "../producscss/relateproduct.scss";
import { HeartOutlined } from "@ant-design/icons";

const RelateProduct = () => {
  const datarelate = [
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
  ];
  return (
    <div className="relateproduct">
      <div className="relate">
        <h1>Relate Products</h1>
        <hr />
      </div>
      {datarelate.map((vl, index) => (
        <div className="boxitem" key={index}>
          <div className="item" >
            <button className="btnsale">20% OFF</button>
            <div className="img"></div>
            <div className="textitem">
              <h2>Sikka (Ebony & Maple)</h2>
              <span>Rp 1.500.000</span>
              <h2>Rp 1.264.000</h2>
              <div className="boxbtnproduc">
                <button className="btnwrite">
                  <HeartOutlined style={{ color: "red" }} />
                </button>
                <button className="btnred">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelateProduct;
