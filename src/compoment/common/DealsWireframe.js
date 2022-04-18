import React from "react";
import "../scss/dealsWireframe.scss";
import { HeartOutlined } from "@ant-design/icons";
import img10 from "../img/image10.png";
import img9 from "../img/image 9.png";
import img11 from "../img/image11.png";
import img12 from "../img/image12.png";
import { Link } from "react-router-dom";

const DealsWireframe = () => {
  const mapdeal = [
    {
      name: "Singo Maple",
      img: img9,
    },
    {
      name: "Singo Ebony",
      img: img10,
    },
    {
      name: "Singo Maple",
      img: img11,
    },
    {
      name: "Way Kambas Mini",
      img: img12,
    },
  ];
  return (
    <div className="dealswireframe">
      <h1>Monthly Deals</h1>
      <hr />
      <div className="boxitem">
        {mapdeal.map((vl, index) => (
          <div className="item" key={index}>
            <Link className="img" to={"/product"}>
              <div style={{ backgroundImage: `url(${vl.img})` }}></div>
            </Link>

            <div className="text">
              <h2>{vl.name}</h2>
              <p>20% Off</p>
              <span>Rp 1.500.000</span>
              <h3>Rp 1.264.000</h3>
            </div>
            <div className="boxbtn">
              <button className="btnwrite">
                <HeartOutlined />
              </button>
              <button className="btnred">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsWireframe;
