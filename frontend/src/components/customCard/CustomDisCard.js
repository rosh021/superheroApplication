import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowModal,
  setKnowTheClick,
  setOneSuperHero,
} from "../../pages/superHeroRedux/Slice";
import { toast } from "react-toastify";
import Card from "react-bootstrap/Card";

import {
  deleteSuperHero,
  saveMySuperHero,
} from "../../pages/superHeroRedux/Action";
import { CharacterFeatures } from "../model/characterFeatures";

export const CustomDisCard = ({ oneSuperHero, isEditable }) => {
  const dispatch = useDispatch();

  const { favorite } = useSelector((state) => state.superHero);

  const handelOnClick = (e) => {
    const result = e.target.innerText;

    dispatch(setKnowTheClick(result));
    dispatch(setOneSuperHero(oneSuperHero));
    dispatch(setShowModal(true));
  };

  const SaveToFavorite = (data) => {
    const objExist = favorite.filter((item) => item.id === data.id);
    if (objExist.length) {
      return toast.error("OOPS !! Already Added to Favorite");
    }

    toast.success("Added to your Favorite");
    dispatch(saveMySuperHero(data));
  };

  const handelOnDelete = (id) => {
    dispatch(deleteSuperHero(id));
  };

  return (
    <div>
      <Card style={{ margin: "5px", width: "18rem" }} className="customCard">
        <CharacterFeatures
          isEditable={isEditable}
          oneSuperHero={oneSuperHero}
        ></CharacterFeatures>
        <Card.Img
          variant="top"
          src={oneSuperHero?.images?.sm}
          className="CardImage"
        />
        <Card.Body>
          <Card.Title>{oneSuperHero?.name}</Card.Title>

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
          {!isEditable ? (
            <Button onClick={() => SaveToFavorite(oneSuperHero)}>
              Add to Favorite
            </Button>
          ) : (
            <Button onClick={() => handelOnDelete(oneSuperHero.id)}>
              Remove from Favorite
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
