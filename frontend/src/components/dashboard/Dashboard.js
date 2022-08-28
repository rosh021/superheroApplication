import React, { useEffect, useState } from "react";

import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { setOneSuperHero } from "../../pages/superHeroRedux/Slice";
import { Alert } from "@mui/material";
import { toast } from "react-toastify";
import { CustomDisCard } from "../customCard/CustomDisCard";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");
  const { searchSuperHero, oneSuperHero } = useSelector(
    (state) => state.superHero
  );

  const handelOnChange = (e) => {
    const { value } = e.target;

    setInputData(value);
  };

  const handelOnClick = () => {
    searchSuperHero.map((item, i) => {
      if (inputData === item.name) {
        dispatch(setOneSuperHero(item));
      }
    });
  };

  return (
    <section className="dashboard">
      <div className="mainBody ">
        <h3 className="mt-5">Search Your SuperHero by Name</h3>
        <div className="nameSearch mt-3">
          <input
            type="text"
            className="nameSearchText"
            name="search"
            onChange={handelOnChange}
          />
          <SearchRoundedIcon className="search" onClick={handelOnClick} />
        </div>
        {oneSuperHero.id && (
          <div className="cardMain">
            <CustomDisCard />
          </div>
        )}
      </div>
    </section>
  );
};
