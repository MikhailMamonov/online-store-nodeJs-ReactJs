import React from "react";
import { observer } from "mobx-react-lite";
import { ListGroup } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "..";
const TypeBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <ListGroup className="mt-3">
      {device.types.map((type) => (
        <ListGroup.Item
          active={type.id === device.selectedType.id}
          onClick={() => device.setSelectedType(type)}
          key={type.id}
          style={{ cursor: "pointer" }}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
