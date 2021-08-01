import React from "react";
import { Row, Col, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <Row gutter={[16, 16]} className="header-root">
      <Col xs={0} sm={0} md={2} lg={2} xl={2} xxl={2}></Col>
      <Col xs={12} sm={12} md={3} lg={2} xl={1} xxl={3}>
        <EditOutlined className="header-icon" />
      </Col>
      <Col
        xs={12}
        sm={12}
        md={9}
        lg={10}
        xl={10}
        xxl={9}
        className="header-title"
      >
        Keeper
      </Col>
      <Col xs={12} sm={12} md={10} lg={10} xl={10} xxl={10}>
        <Input />
      </Col>
    </Row>
  );
};

export default Header;
