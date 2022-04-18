import React from "react";
import "../checkoutscss/onpayment.scss";
import img1 from "../img/image 37.png";
import img2 from "../img/image 38.png";
import img3 from "../img/image 43.png";
import img4 from "../img/image 44.png";
import img5 from "../img/image 45.png";
import img6 from "../img/image 46.png";
import img7 from "../img/image 399.png";
import img8 from "../img/image 401.png";
import img9 from "../img/image 411.png";
import img10 from "../img/image 422.png";

const OnPayment = () => {
  const dataoder = [
    {
      name: "Subtotal",
      item: "Rp 2.152.000",
    },
    {
      name: "Shipping Cost",
      item: "Rp 500.000",
    },
    {
      name: "Promo Code",
      item: "INDONESIA",
    },
    {
      name: "Packaging",
      item: "Rp 2.152.000",
    },
  ];
  const dataDetail = [
    {
      name: "Order Number",
      tile1: "MTAWEB-3A86D4DB",
      copy: "COPY",
      text1: "Always remember Order Number for easy tracking",
    },
    {
      name: "Purchase Date",
      tile1: "2019-11-07 14:01:48",
    },
    {
      name: "Items",
      tile1: "Way Kambas Mini Ebony",
      tile2: "Sikka (Ebony & Mapple)",
      text1: " 2 x IDR 1.024.000",
      text2: " 1 x IDR 1.264.000",
    },
    {
      name: "Name",
      tile1: "Rasyidin Arsyad Nasution",
    },
    {
      name: "Phone",
      tile1: "+18911188899",
    },
    {
      name: "Email",
      tile1: "rasyid.arsyad@gmail.com",
    },
    {
      name: "Shipping Address",
      tile1: "18 Richardson Drive Fountain Valley, CA 92708",
    },
  ];
  const dataMethod = [
    {
      name: "BNI Cicilan 0%",
      img1: img1,
    },
    {
      name: "Mandiri Cicilan 0%",
      img1: img2,
    },
    {
      name: "Bank Transfer",
      img1: img3,
    },
    {
      name: "Credit Card",
      img1: img4,
      img2: img5,
    },
    // {
    //   name: "Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)",
    //   img1: img6,
    //   img2: img7,
    //   img3: img8,
    // },
    // {
    //   name: "GO-PAY",
    //   img1: img9,
    // },
    // {
    //   name: "Krdivo",
    //   img1: img10,
    // },
  ];
  return (
    <>
      <div className="onpayment">
        <div className="order">
          <div className="oderitem">
            <h1 style={{ marginTop: "10px" }}>Detail Order</h1>
          </div>
          {dataoder.map((vl, index) => (
            <div className="oderitem" key={index}>
              <div className="lef">
                <span>{vl.name}</span>
              </div>
              <div className="lef">
                <span>{vl.item}</span>
              </div>
            </div>
          ))}
          <hr />
          <div className="oderitem">
            <div className="lef">
              <span style={{ marginTop: "-10px" }}>Grand Total</span>
            </div>
            <div className="lef">
              <h1>Rp 2.702.000</h1>
            </div>
          </div>
        </div>
        <div className="paymentdetail">
          <div>
            <h1>Payment Detail</h1>
            <h2>11:55:55</h2>
            <p>
              Please make a payment according with the limit time specified,
              starting from now
            </p>
          </div>
        </div>

        <div className="oderdetail">
          <div className="boxdetail">
            <h1>Order Detail</h1>
            {dataDetail.map((vl, index) => (
              <div className="boxitem" key={index}>
                <div className="boxlef">
                  <h2>{vl.name}</h2>
                </div>
                <div className="boxright">
                  <h2>
                    {vl.tile1} <span> {vl.copy}</span>
                  </h2>
                  <p> {vl.text1}</p>
                  <h2> {vl.tile2}</h2>
                  <p>{vl.text2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="paymentmethod">
        <div className="boxmethod">
          <h1>Payment Method</h1>
          {dataMethod.map((vl, index) => (
            <div className="item" key={index}>
              <input type={"radio"} name="radio"></input>
              <h2>{vl.name}</h2>
              <div className="logomethod">
                <div
                  style={{ backgroundImage: `url("${vl.img1}")` }}
                  className="imgmethod"
                ></div>
                <div
                  style={{ backgroundImage: `url("${vl.img2}")` }}
                  className="imgmethod2"
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="boxmethod">
          <div className="item" style={{ width: "60%" }}>
            <input type={"radio"} name="radio"></input>
            <h2>Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)</h2>
            <div className="logomethod">
              <div
                style={{ backgroundImage: `url("${img6}")`, marginLeft: "5%" }}
                className="imgmethod2"
              ></div>
              <div
                style={{ backgroundImage: `url("${img7}")`, marginLeft: "5%" }}
                className="imgmethod2"
              ></div>
              <div
                style={{ backgroundImage: `url("${img8}")`, marginLeft: "5%" }}
                className="imgmethod2"
              ></div>
            </div>
          </div>
          <div className="item" style={{ width: "20%" }}>
            <input type={"radio"} name="radio"></input>
            <h2>GO-PAY</h2>
            <div className="logomethod">
              <div
                style={{ backgroundImage: `url("${img7}")` }}
                className="imgmethod"
              ></div>
            </div>
          </div>
          <div className="item" style={{ width: "20%" }}>
            <input type={"radio"} name="radio"></input>
            <h2>Krdivo</h2>
            <div className="logomethod">
              <div
                style={{ backgroundImage: `url("${img8}")` }}
                className="imgmethod"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="paymentbtn">
        <button className="btnred">Proceed Payment</button>
      </div>
    </>
  );
};

export default OnPayment;
