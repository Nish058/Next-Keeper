import React from "react";
import { Row, Col, Input, Button, Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function InputField() {
  return (
    <Row className="input-root">
      <Card className="input-fields">
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Input className="input-title" label="Your title" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Input className="input-note" label="Your title" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Button className="input-button" type="submit">
            Add
          </Button>
        </Col>
      </Card>
    </Row>
  );
}

export default InputField;
