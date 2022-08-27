import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFavorite } from "../../pages/superHeroRedux/Action";
import { CustomCard } from "../customCard/CustomCard";

export const Favorite = () => {
  const [isClicked, isSetClicked] = useState(true);
  const dispatch = useDispatch();
  const { favorite } = useSelector((state) => state.superHero);
  useEffect(() => {
    dispatch(fetchAllFavorite());
  }, [favorite]);

  return (
    <div>
      {favorite.length > 0 ? (
        <>
          <h1> {favorite?.length} Your Saved Favorite Super Hero Found.</h1>
          <p> You can update the Power Status and Save it.</p>
        </>
      ) : (
        <h1>
          {" "}
          You haven't saved any Favorite, Please add to favorite fist and you
          can edit your super hero power Status
        </h1>
      )}
      <div className="fav">
        <CustomCard fun={isClicked} />
      </div>
    </div>
  );
};
