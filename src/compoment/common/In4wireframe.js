import React from "react";
import "../scss/in4wire.scss";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import img38 from "../img/Rectangle 38.png";
import img39 from "../img/Rectangle 39.png";
import img40 from "../img/Rectangle 40.png";
import img41 from "../img/Rectangle 41.png";
import img42 from "../img/Rectangle 42.png";

const In4wireframe = () => {
  const datainta = [
    {
      url: img38,
    },
    {
      url: img39,
    },
    {
      url: img40,
    },
    {
      url: img41,
    },
    {
      url: img42,
    },
  ];
  return (
    <div className="in4wire">
      <div className="shadowimg"></div>
      <div className="in4img">
        <div className="img"></div>
        <div className="frombtn">
          <button className="btnlef">
            <ArrowLeftOutlined />
          </button>
          <button className="btnright">
            <MinusOutlined />
            <ArrowRightOutlined style={{ marginLeft: "-8px" }} />
          </button>
        </div>
      </div>
      <div className="in4text">
        <h2>Testimonials</h2>
        <hr />
        <p>
          Loving my new KAILI watch from @matoa_id, the first ever Indonesian
          watch local brand that uses wood as their main material. Like any
          other Matoa products, KAILI is inspired by Indonesian heritage.
        </p>
        <h3>Gita Savitri</h3>
        <p className="textconten">Content Creator/Influencer</p>
      </div>
      <div className="intagram">
        <h1>Instagram</h1>
        <hr />
        <div className="boximg">
          {datainta.map((vl, index) => (
            <div style={{backgroundImage:`url("${vl.url}")`}} className="img" key={index}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default In4wireframe;
