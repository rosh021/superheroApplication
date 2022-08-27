import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowModal,
  setKnowTheClick,
  setFavorite,
} from "../../pages/superHeroRedux/Slice";
import { toast } from "react-toastify";
import Card from "react-bootstrap/Card";

import {
  fetchAllSuperHero,
  saveMySuperHero,
} from "../../pages/superHeroRedux/Action";
import { CharacterFeatures } from "../model/characterFeatures";

export const CustomCard = (fun) => {
  const dispatch = useDispatch();

  const { oneSuperHero, showModal, favorite } = useSelector(
    (state) => state.superHero
  );

  const [modelData, setModelData] = useState({});

  const handelOnClick = (e) => {
    const result = e.target.innerText;

    setModelData(result);
    dispatch(setKnowTheClick(result));
    dispatch(setShowModal(true));
  };

  const SaveToFavorite = (data) => {
    const objExist = favorite.filter((item) => item.id === data.id);
    if (objExist.length) {
      return toast.error("OOPS !! Already Added to Favorite");
    }
    dispatch(setFavorite(data));

    toast.success("Added to your Favorite");
    dispatch(saveMySuperHero(data));
  };

  return (
    <div>
      {fun === true
        ? favorite?.map((item, id) => {
            return (
              <>
                <Card
                  key={id}
                  style={{ height: "500px" }}
                  className="customCard"
                >
                  <CharacterFeatures
                    show={showModal}
                    modelData={modelData}
                  ></CharacterFeatures>
                  <Card.Img
                    variant="top"
                    src={item?.images?.sm}
                    className="CardImage"
                  />
                  <Card.Body>
                    <Card.Title>{item?.name}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item className="link" onClick={handelOnClick}>
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
                  <Button onClick={() => SaveToFavorite(oneSuperHero)}>
                    Remove from Favorite
                  </Button>
                </Card>
              </>
            );
          })
        : oneSuperHero?.id && (
            <Card style={{ height: "500px" }} className="customCard">
              <CharacterFeatures modelData={modelData}></CharacterFeatures>
              <Card.Img
                variant="top"
                src={oneSuperHero?.images?.sm}
                className="CardImage"
              />
              <Card.Body>
                <Card.Title>{oneSuperHero?.name}</Card.Title>
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
              <Button onClick={() => SaveToFavorite(oneSuperHero)}>
                Add to Favorite
              </Button>
            </Card>
          )}
    </div>
  );
};
