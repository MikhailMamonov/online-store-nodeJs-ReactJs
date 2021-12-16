import React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createType } from "../../http/deviceAPI";
const CreateType = ({ show, handleClose }) => {
  const [nameValue, setNameValue] = useState("");

  const handleOnAdd = () => {
    createType({ name: nameValue }).then((data) => {
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
        <Modal.Title>Add type</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder="Input type name"
            value={nameValue}
            onChange={handleChangeName}
          ></Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={handleClose}>
          Close
        </Button>
        <Button variant="outline-success" onClick={handleOnAdd}>
          Add type
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
