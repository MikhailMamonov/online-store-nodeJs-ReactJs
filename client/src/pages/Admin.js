import { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "./../components/modals/CreateType";
const Admin = (props) => {
  const [brandModal, showBrand] = useState(false);
  const [typeModal, showType] = useState(false);
  const [deviceModal, showDevice] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <Button
        onClick={() => showType(true)}
        variant="outline-dark"
        className="mt-4 p-2"
      >
        Add type
      </Button>
      <Button
        onClick={() => showBrand(true)}
        variant="outline-dark"
        className="mt-4 p-2"
      >
        Add brand
      </Button>
      <Button
        onClick={() => showDevice(true)}
        variant="outline-dark"
        className="mt-4 p-2"
      >
        Add device
      </Button>
      <CreateBrand
        handleClose={() => showBrand(false)}
        show={brandModal}
      ></CreateBrand>
      <CreateType
        handleClose={() => showType(false)}
        show={typeModal}
      ></CreateType>
      <CreateDevice
        handleClose={() => showDevice(false)}
        show={deviceModal}
      ></CreateDevice>
    </Container>
  );
};

export default Admin;
