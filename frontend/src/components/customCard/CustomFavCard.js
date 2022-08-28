import React, { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteSuperHero } from "../../pages/superHeroRedux/Action";
import {
  setKnowClickFromFavorite,
  setKnowTheClick,
  setShowModal,
} from "../../pages/superHeroRedux/Slice";
import { CharacterFeatures } from "../model/characterFeatures";

export const CustomFavCard = ({ item }) => {
  const [modelData, setModelData] = useState({});
  const dispatch = useDispatch();

  const handelOnClick = (e) => {
    const result = e.target.innerText;

    setModelData(result);
    dispatch(setKnowClickFromFavorite(item));
    dispatch(setKnowTheClick(result));
    dispatch(setShowModal(true));
  };

  return (
    <div className="favCard">
      <Card style={{ height: "500px" }} className="customCard">
        <CharacterFeatures modelData={modelData} isEditable={true} />
        <Card.Img variant="top" src={item?.images?.sm} className="CardImage" />
        <Card.Body>
          <Card.Title>{item?.name}</Card.Title>
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
      </Card>
    </div>
  );
};
