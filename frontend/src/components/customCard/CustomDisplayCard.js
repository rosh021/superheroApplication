import React from "react";
import { Card } from "react-bootstrap";

import ListGroup from "react-bootstrap/ListGroup";
import { CharacterFeatures } from "../model/characterFeatures";

export const CustomCard = ({ props, children }) => {
  return (
    <Card style={{ height: "500px" }} className="customCard">
      <CharacterFeatures modelData={props}></CharacterFeatures>
      <Card.Img variant="top" src={children?.images.sm} className="CardImage" />
      <Card.Body>
        <Card.Title>{children?.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="link" value="editPower" onClick={children}>
          powerstats
        </ListGroup.Item>
        <ListGroup.Item className="link" onClick={children}>
          appearance
        </ListGroup.Item>
        <ListGroup.Item className="link" onClick={children}>
          biography
        </ListGroup.Item>
        <ListGroup.Item className="link" onClick={children}>
          work
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};
