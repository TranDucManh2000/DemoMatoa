import React from "react";
import "../scss/navmatoa.scss";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import MatoaCart from "../commoncart/MatoaCart";
import { Link } from "react-router-dom";

const NavMatoa = () => {
  return (
    <div className="navmatoas">
      <Link to={"/"}><div className="logo"></div></Link>
      <div className="textnav">
        <Link to={"/product"}><p>Watches</p></Link>
        <Link to={"/checkout"}><p>Eyewear</p></Link>
        <Link to={"/product"}><p>Accessories</p></Link>
        <Link to={"/checkout"}><p>News</p></Link>
      </div>
      <div className="itemnav">
        <p>
          <SearchOutlined />
        </p>
        <p>
          <UserOutlined /> Log In
        </p>
        <MatoaCart />
      </div>
    </div>
  );
};

export default NavMatoa;
