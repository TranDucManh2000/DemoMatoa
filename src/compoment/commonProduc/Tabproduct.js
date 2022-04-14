import React from "react";
import "../producscss/tabproduct.scss";
import { Tabs } from "antd";

const Tabproduct = () => {
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }
  return (
    <div className="tabproduct">
      <Tabs
        size="large"
        tabBarStyle={{ color: "#999999" }}
        defaultActiveKey="1"
        onChange={callback}
      >
        <TabPane tab="Detail" key="1">
          <div className="boxtext">
            <h2>Material</h2>
            <p>
              MATOA Way Kambas - Sumatran Rhino comes with a material form of
              Makassar Ebony (Diospyros celebica). This wood is chosen to
              represent the Sumatran Rhino's skin which is designed with an
              overlap effect on its strap to represent Rhino's skin. Sumatran
              Rhino has unique skin fold, the skin is fairly thin about 10-16mm,
              and is soft and pliable.
            </p>
            <h2>Case</h2>
            <p>
              The case on this timepiece is made with Height 12.5mm, Width 36mm,
              Length 33mm and Dial Opening 25mm. The glass is equipped with K1
              flat glass to increase the enhanced durability on timepieces as
              scratch resistant and anti fingerprint. This timepiece is also
              equipped with Hand Polish Brass Spacer for a longer usage periods.
            </p>
            <h2>Movement</h2>
            <p>
              For the first time, MATOA comes with Seiko Quartz VD78 movement
              with small second function. A small second hand is above 6 o'clock
              position. This second hand dial is dedicated to Sumatran Rhino
              whom every second of its life is so precious because whenever
              Sumatran Rhino goes, it can be threatened by illegal poaching
            </p>
            <h2>Dial</h2>
            <p>
              In the dial, there are double layer of Makassar Ebony Veneer with
              3, 9 & 12 o'clock laser cut brass plate index.
            </p>
            <h2>Hand</h2>
            <p>
              The hour, minute & small second hands on MATOA Way Kambas -
              Sumatran Rhino is outfitted with skeleton hand and brush finished
              with Gold Matte color. This new design aims at adding a value for
              this special edition.
            </p>
            <h2>Important to Note</h2>
            <p>
              Wood color on watches is produced from a combination of mature and
              fresh wood but should not be viewed as a defect. It is a very
              natural process of wood aging.
            </p>
          </div>
        </TabPane>
        <TabPane tab="Warranty" key="2"></TabPane>
        <TabPane tab="Custom Engrave" key="3"></TabPane>
        <TabPane tab="How to Adjust" key="4"></TabPane>
        <TabPane tab="How to Care" key="5"></TabPane>
        <TabPane tab="Gallery" key="6"></TabPane>
      </Tabs>
      <div className="boximg"></div>
    </div>
  );
};

export default Tabproduct;
