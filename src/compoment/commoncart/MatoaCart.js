import React, { useState } from "react";
import { Modal, Button } from "antd";
import { ShoppingOutlined, DeleteOutlined } from "@ant-design/icons";
import "../cartscss/matoacart.scss";
import { Select } from "antd";
import { Input } from 'antd';

const MatoaCart = () => {
  const { Option, OptGroup } = Select;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const datacart = [
    {
      name: "",
    },
    {
      name: "",
    },
  ];

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        <ShoppingOutlined style={{ fontSize: "18px" }} />
      </Button>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width="80%"
      >
        <div className="matoacart">
          {datacart.map((vl, index) => (
            <div className="boxitem" key={index}>
              <div className="itemlef">
                <div className="img"></div>
                <div className="text">
                  <h2>Way Kambas Mini Ebony</h2>
                  <span>Rp 1.500.000</span>
                  <h1>Rp 1.024.000</h1>
                  <p>Custom Engrave</p>
                  <p>“Happy | Birthday | from”</p>
                </div>
              </div>
              <div className="itemright">
                <h2>Select Packaging</h2>
                <div className="select">
                  <Select
                    defaultValue="1"
                    style={{ width: 310 }}
                    onChange={handleChange}
                  >
                    <OptGroup label="Manager">
                      <Option value="1">
                        <span>Wooden Packaging (Rp 50.000)</span>
                      </Option>
                      <Option value="lucy">Lucy</Option>
                    </OptGroup>
                  </Select>
                </div>
                <div className="btnrp">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <button className="btnexcept">-</button>
                    <span>1</span>
                    <button className="btnplus">+</button>
                    <h1>Rp 2.048.000</h1>
                    <button className="btndelet">
                      <DeleteOutlined style={{ fontSize: "16px" }} />
                    </button>
                  </div>
                </div>
              </div>
              <span className="line"></span>
            </div>
          ))}
          <div className="cartfooter">
            <div className="kode">
              <h2>Kode Promo</h2>
              <Input value={'INDONESIA'}></Input>
              <h1>35% OFF</h1>
            </div>
            <div className="total">
             <div><h2>Subtotal</h2></div>
             <div>
             <span>Rp 1.500.000</span>
             <h1>Rp 2.152.000</h1>
             </div>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MatoaCart;
