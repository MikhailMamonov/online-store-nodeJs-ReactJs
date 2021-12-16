import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceAPI";
import imageIPhone from "./../assets/IPhone.jpg";
import star from "./../assets/whiteStar.png";

const DevicePage = () => {
  const [device, setDevice] = useState({ device_infos: [] });
  const { id: deviceId } = useParams();

  useEffect(() => {
    fetchOneDevice(deviceId).then((data) => {
      setDevice(data.device);
    });
  }, []);
  console.log("device", device);
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            height={250}
            width={250}
            src={process.env.REACT_APP_API_URL + "/" + device.img}
          ></Image>
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center justify-content-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${star}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ height: 300, width: 300, border: "5px solid lightgray" }}
          >
            <h3>{device.price} RUB</h3>
            <Button variant="outline-dark"> Add to Basket</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-3">
        <h3>Description</h3>
        {device.device_infos.map((desc, index) => (
          <Row
            key={desc.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {desc.title} : {desc.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
