import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from "../..";
import { createDevice, fetchBrands, fetchTypes } from "../../http/deviceAPI";

const CreateDevice = observer(({ show, handleClose }) => {
  const { device } = useContext(Context);

  const [nameValue, setNameValue] = useState("");
  const [priceValue, setPriceValue] = useState(0);
  const [fileValue, setFileValue] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const deleteInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };
  const handleChangeName = (e) => {
    setNameValue(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPriceValue(e.target.value);
  };

  const handleChangeFile = (e) => {
    setFileValue(e.target.files[0]);
  };

  const handleChangeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const handleOnAdd = () => {
    const data = new FormData();
    data.append("name", nameValue);
    data.append("price", `${priceValue}`);
    data.append("rating", 0);
    data.append("img", fileValue);
    data.append("typeId", device.selectedType.id);
    data.append("brandId", device.selectedBrand.id);
    data.append("info", JSON.stringify(info));

    createDevice(data).then((data) => {
      setNameValue("");
      setPriceValue(0);
      setFileValue(null);
      handleClose();
    });
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 p-2">
            <Dropdown.Toggle>
              {device.selectedType.name || "Select type"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item
                  onClick={() => device.setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 p-2">
            <Dropdown.Toggle>
              {device.selectedBrand.name || "Select brand"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item
                  onClick={() => device.setSelectedBrand(brand)}
                  key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-2 p-2"
            placeholder="Input device name"
            value={nameValue}
            onChange={handleChangeName}
          ></Form.Control>
          <Form.Control
            className="mt-2 p-2"
            placeholder="Input device price"
            value={priceValue}
            onChange={handleChangePrice}
            type="number"
          ></Form.Control>
          <Form.Control
            className="mt-3 "
            placeholder="Input image"
            onChange={handleChangeFile}
            type="file"
          ></Form.Control>
          <Button className="mt-3" onClick={addInfo}>
            add info
          </Button>
          {info.map((i) => (
            <Row key={i.number}>
              <Col md={4} className="mt-2 p-2">
                <Form.Control
                  value={i.title}
                  placeholder="input title info"
                  onChange={(e) =>
                    handleChangeInfo("title", e.target.value, i.number)
                  }
                ></Form.Control>
              </Col>
              <Col md={4} className="mt-2 p-2">
                <Form.Control
                  value={i.description}
                  placeholder="input description info"
                  onChange={(e) =>
                    handleChangeInfo("description", e.target.value, i.number)
                  }
                ></Form.Control>
              </Col>
              <Col md={4} className="mt-2 p-2">
                <Button onClick={() => deleteInfo(i.number)}>
                  delete info
                </Button>
              </Col>
            </Row>
          ))}

          <hr />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={handleClose}>
          Close
        </Button>
        <Button variant="outline-success" onClick={handleOnAdd}>
          Add device
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
