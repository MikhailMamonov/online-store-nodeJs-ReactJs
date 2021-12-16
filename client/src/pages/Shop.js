import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "./../components/TypeBar";
import BrandBar from "./../components/BrandBar";
import DeviceList from "./../components/DeviceList";
import { useEffect } from "react";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import Pages from "../components/Pages";

const Shop = observer((props) => {
  const { device } = useContext(Context);
  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices(
      // device.selectedType.id,
      // device.selectedBrand.id,
      null,
      null,
      device.currentPage,
      device.limit
    ).then((data) => device.setDevices(data.rows));
  }, []);

  useEffect(() => {
    fetchDevices(
      device.selectedType.id,
      device.selectedBrand.id,
      device.currentPage,
      device.limit
    ).then((data) => device.setDevices(data.rows));
  }, [device.page, device.selectedType.id, device.selectedBrand.id]);

  return (
    <Container>
      <Row>
        <Col md={3}>
          <TypeBar></TypeBar>
        </Col>
        <Col md={9}>
          <BrandBar></BrandBar>
          <DeviceList></DeviceList>
          <Pages></Pages>
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
