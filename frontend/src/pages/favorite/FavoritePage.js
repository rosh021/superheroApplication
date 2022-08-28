import React from "react";
import { useSelector } from "react-redux";
import { CustomDisCard } from "../../components/customCard/CustomDisCard";
import { MainLayout } from "../../layout/MainLayout";

export const FavoritePage = () => {
  const { favorite } = useSelector((state) => state.superHero);
  return (
    <MainLayout>
      <div className="mt-5 favPage">
        <div className="fav d-flex justify-content-center flex-wrap ">
          {favorite.length > 0 ? (
            favorite.map((item) => (
              <CustomDisCard oneSuperHero={item} isEditable={true} />
            ))
          ) : (
            <h1>Favorite Not found!</h1>
          )}
        </div>
      </div>
    </MainLayout>
  );
};
