import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createBrand } from "../../http/deviceAPI";
const CreateBrand = ({ show, handleClose }) => {
  const [nameValue, setNameValue] = useState("");

  const handleOnAdd = () => {
    createBrand({ name: nameValue }).then((data) => {
      setNameValue("");
      handleClose();
    });
  };

  const handleChangeName = (e) => {
    setNameValue(e.target.value);
  };
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add Brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder="Input brand name"
            onChange={handleChangeName}
            value={nameValue}
          ></Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={handleClose}>
          Close
        </Button>
        <Button variant="outline-success" onClick={handleOnAdd}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
