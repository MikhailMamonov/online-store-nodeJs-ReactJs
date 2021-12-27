import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import star from "../assets/star.png";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const history = useHistory();
  console.log(process.env.REACT_APP_API_URL + device.img);
  return (
    <Col md={3} onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}>
      <Card
        className="mt-4"
        style={{ width: 150, cursor: "pointer" }}
        border={"light"}
      >
        <Image
          width={150}
          height={150}
          src={process.env.REACT_APP_API_URL + device.img}
        ></Image>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <div>{device.name}</div>
          <div className="d-flex">
            <div>{device.rating}</div>
            <Image width={20} height={20} src={star}></Image>
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
