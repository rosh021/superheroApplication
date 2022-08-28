import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../layout/Header";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { fetchAllFavorite, fetchAllSuperHero } from "../superHeroRedux/Action";
import { setOneSuperHero } from "../superHeroRedux/Slice";
import { CustomDisCard } from "../../components/customCard/CustomDisCard";
import { Button, Form } from "react-bootstrap";

export const DashboardPage = () => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");
  const { oneSuperHero, searchSuperHero, favorite } = useSelector(
    (state) => state.superHero
  );

  useEffect(() => {
    dispatch(fetchAllSuperHero());
    dispatch(fetchAllFavorite());

    //unmount the card on exit the page
    return () => {
      dispatch(setOneSuperHero([]));
    };
  }, []);

  const handelOnChange = (e) => {
    const { value } = e.target;

    setInputData(value);
  };

  const handelOnClick = () => {
    searchSuperHero.map((item, i) => {
      if (inputData.toLowerCase() === item.name.toLowerCase()) {
        dispatch(setOneSuperHero(item));
      }
    });
  };

  return (
    <div className="dashboardPage">
      <Header />
      <div className="form d-flex justify-content-center">
        <div className="nameSearch py-3 d-flex justify-content-center">
          <Form.Control
            type="text"
            className="nameSearchText"
            name="search"
            onChange={handelOnChange}
          />
          <Button>
            {" "}
            <SearchRoundedIcon className="search" onClick={handelOnClick} />
          </Button>
        </div>
      </div>

      {oneSuperHero.id && (
        <div className="cardMain">
          <CustomDisCard
            oneSuperHero={oneSuperHero}
            favorite={favorite}
            isEditable={false}
          />
        </div>
      )}
    </div>
  );
};
