import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CustomCard } from "../customCard/CustomCard";

export const Favorite = () => {
  const [isClicked, isSetClicked] = useState(false);
  const { favorite } = useSelector((state) => state.superHero);
  console.log(favorite);

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
