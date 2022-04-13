import React from "react";
import "../scss/newwire.scss";

const Newswire = () => {
  const dataseri = [
    {
      name: "aa",
    },
    {
      name: "aa",
    },
    {
      name: "aa",
    },
  ];
  return (
    <div className="newswire">
      <h2>Recent News</h2>
      <hr />
      <div className="headernew">
        <div className="texbox">
          <p>Where To Travel</p>
          <h2>Matoa Where To Travel? Yogyakarta</h2>
          <button className="btnwrite">Discover</button>
        </div>
        <div className="imgbox"></div>
        <div className="shadowbox"></div>
      </div>
      <div className="series">
        {dataseri.map((vl, index) => (
          <div className="boxseries" key={index}>
            <h2>Maple Series</h2>
            <hr />
            <div className="item">
              <div className="img"></div>
              <div className="textitem">
                <p>Way Kambas Maple</p>
                <h2>Rp 1.280.000</h2>
              </div>
            </div>
            <div className="item">
              <div className="img"></div>
              <div className="textitem">
                <p>Way Kambas Maple</p>
                <h2>Rp 1.280.000</h2>
              </div>
            </div>
            <div className="item">
              <div className="img"></div>
              <div className="textitem">
                <p>Way Kambas Maple</p>
                <h2>Rp 1.280.000</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="seemore">
          <span></span><button className="btnwrite">See More</button> <span></span>
      </div>
    </div>
  );
};

export default Newswire;
