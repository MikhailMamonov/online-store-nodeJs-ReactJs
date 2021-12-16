import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import { Card, Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device.devices.map((device) => (
        <DeviceItem device={device} key={device.id}></DeviceItem>
      ))}
    </Row>
  );
});

export default DeviceList;
