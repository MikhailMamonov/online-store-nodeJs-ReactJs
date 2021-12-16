import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import { Card, Col, Row } from "react-bootstrap";
const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          className="p-3"
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
          onClick={() => device.setSelectedBrand(brand)}
          key={brand.id}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
