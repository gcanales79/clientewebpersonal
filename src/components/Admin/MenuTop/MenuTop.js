import React from "react";
import NetzwerkLogo from "../../../assets/img/png/Logo_netzwerk.png";
import { Button } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./MenuTop.scss";

export default function MenuTop(props) {
  //console.log(props)
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Link to={"/admin"}>
          <img
            className="menu-top__left-logo"
            src={NetzwerkLogo}
            alt="Logo Netzwerk"
          />
        </Link>
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={() => console.log("PowerOff")}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
