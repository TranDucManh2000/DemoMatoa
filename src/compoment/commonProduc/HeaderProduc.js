import React from "react";
import "../producscss/headerproduct.scss";
import img0 from "../img/image 37.png";
import img1 from "../img/image-removebg-preview 1.png";
import img2 from "../img/image-removebg-preview1 2.png";
import img3 from "../img/image-removebg-preview2 3.png";
import { ShoppingCartOutlined } from "@ant-design/icons";

const HeaderProduc = () => {
  return (
    <div className="headerproduc">
      <div className="linkproduc">
        <p>
          Home / Product / Watches / <span>Way Kambas Mini Ebony</span>
        </p>
      </div>
      <div className="boxproduc">
        <div className="producshadow"></div>
        <div className="itemimg">
          <div className="miniimg">
            <img width={"70px"} height={"101px"} src={img0}></img>
            <img width={"92px"} height={"110px"} src={img1}></img>
            <img width={"92px"} height={"110px"} src={img2}></img>
            <img width={"92px"} height={"70px"} src={img3}></img>
          </div>
          <div className="bigimg"></div>
        </div>
        <div className="itemtext">
          <h1>WAY KAMBAS MINI EBONY</h1>
          <p className="rp">Rp 1.280.000</p>
          <h2>Rp 1.024.000</h2>
          <h3>Choose Model</h3>
          <div className="boxcolor">
            <div className="coloritem"></div>
            <div className="coloritem"></div>
          </div>
          <div className="boxbtn">
            <div style={{display:'flex',alignItems:'center'}}>
              <button className="btnexcept">-</button>
              <span>1</span>
              <button className="btnplus">+</button>
            </div>
            <div className="divbtn">
              <button className="btnredd">
                <ShoppingCartOutlined style={{fontSize:'20px',marginLeft:'-10%'}}/>Add to cart
              </button>
              <button className="btnwritee"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderProduc;
