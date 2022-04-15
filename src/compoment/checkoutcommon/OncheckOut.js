import React from "react";
import "../checkoutscss/oncheckout.scss";
import { Input } from "antd";
import { Select } from "antd";

const OncheckOut = () => {
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
  const { Option, OptGroup } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div className="oncheckout">
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

      <div className="address">
        <div className="boxinput">
          <h1>Billing Address</h1>
          <span>Fullname</span>
          <Input placeholder="Ex: Rasyidin Arsyad Nasution"></Input>
          <span>Email Address</span>
          <Input placeholder="Ex: rasyid.arsyad@gmail.com"></Input>
          <span>Phone Number</span>
          <Input placeholder="Ex: 089111888999"></Input>
          <span>Shipping Address</span>
          <Input placeholder="Ex: Patriot Street Number 666, Ngaklik, Sleman"></Input>
        </div>
        <div className="boxselect">
          <span className="tileselect">Country</span>
          <Select
            defaultValue="1"
            style={{ width: "100%" }}
            onChange={handleChange}
          >
            <OptGroup label="Manager">
              <Option value="1">
                <span className="f20">United State of America (USA)</span>
              </Option>
            </OptGroup>
          </Select>
        </div>
        <div className="boxselect">
          <span className="tileselect">State/Province</span>
          <Select
            defaultValue="1"
            style={{ width: "100%" }}
            onChange={handleChange}
          >
            <OptGroup label="Manager">
              <Option value="1">
                <span className="f20">California</span>
              </Option>
            </OptGroup>
          </Select>
        </div>
        <div className="boxselect">
          <div className="selectmini">
            <span className="tileselect">City</span>
            <Select
              defaultValue="1"
              style={{ width: "100%" }}
              onChange={handleChange}
            >
              <OptGroup label="Manager">
                <Option value="1">
                  <span className="f20">San Francisco</span>
                </Option>
              </OptGroup>
            </Select>
          </div>
          <div className="selectmini">
            <span className="tileselect">Zip Code</span>
            <Input placeholder="Ex: 94024"></Input>
          </div>
        </div>
        <div className="boxselect">
          <span className="tileselect">Choose Courier</span>
          <Select
            defaultValue="1"
            style={{ width: "100%" }}
            onChange={handleChange}
          >
            <OptGroup label="Manager">
              <Option value="1">
                <span className="f20">DHL</span>
              </Option>
            </OptGroup>
          </Select>
        </div>
        <span style={{ width: "100%", height: "30px" }}></span>
      </div>
      <div className="btncheckout">
        <button className="btnwrite">Continue Shopping</button>
        <button className="btnred">Place My Order</button>
      </div>
    </div>
  );
};

export default OncheckOut;
