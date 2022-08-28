import React from "react";
import { Button, Card } from "react-bootstrap";

import ListGroup from "react-bootstrap/ListGroup";
import { CharacterFeatures } from "../model/characterFeatures";

export const CustomCard = ({
  modelData,
  handelOnClick,
  SaveToFavorite,
  children,
}) => {
  return (
    <Card style={{ height: "500px" }} className="customCard">
      <CharacterFeatures modelData={modelData}></CharacterFeatures>
      <Card.Img
        variant="top"
        src={children?.images?.sm}
        className="CardImage"
      />
      <Card.Body>
        <Card.Title>{children?.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item
          className="link"
          value="editPower"
          onClick={handelOnClick}
        >
          powerstats
        </ListGroup.Item>
        <ListGroup.Item className="link" onClick={handelOnClick}>
          appearance
        </ListGroup.Item>
        <ListGroup.Item className="link" onClick={handelOnClick}>
          biography
        </ListGroup.Item>
        <ListGroup.Item className="link" onClick={handelOnClick}>
          work
        </ListGroup.Item>
      </ListGroup>
      <Button onClick={handelOnClick}>Add to Favorite</Button>
    </Card>
  );
};
