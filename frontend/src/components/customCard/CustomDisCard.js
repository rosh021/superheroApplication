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
import { CustomCard } from "./CustomDisplayCard";

export const CustomDisCard = () => {
  const dispatch = useDispatch();

  const { oneSuperHero, showModal, favorite } = useSelector(
    (state) => state.superHero
  );
  console.log(favorite);

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

    toast.success("Added to your Favorite");
    dispatch(saveMySuperHero(data));
  };

  return <div>{oneSuperHero?.id && <CustomCard />}</div>;
};
