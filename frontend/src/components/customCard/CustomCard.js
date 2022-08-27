import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowModal,
  setKnowTheClick,
} from "../../pages/superHeroRedux/Slice";

import Card from "react-bootstrap/Card";
import { CustomModel } from "../model/Model";

export const CustomCard = () => {
  const dispatch = useDispatch();

  const { oneSuperHero, showModal } = useSelector((state) => state.superHero);
  const [modelData, setModelData] = useState({});

  const showInfo = (info) => {
    // setModelData(oneSuperHero?.info);
    console.log(info);
    // dispatch(setShowModal(true));
  };

  const handelOnClick = (e) => {
    const result = e.target.innerText;
    setModelData(result);
    dispatch(setKnowTheClick(result));
    dispatch(setShowModal(true));
  };

  return oneSuperHero.id ? (
    <Card style={{ height: "500px" }} className="customCard">
      <CustomModel show={showModal} modelData={modelData}></CustomModel>
      <Card.Img
        variant="top"
        src={oneSuperHero?.images.sm}
        className="CardImage"
      />
      <Card.Body>
        <Card.Title>{oneSuperHero?.name}</Card.Title>
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
    </Card>
  ) : (
    <h1>Search To get the Information About your favorite Super Hero</h1>
  );
};
