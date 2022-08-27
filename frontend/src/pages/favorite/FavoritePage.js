import React from "react";
import { Favorite } from "../../components/favorite/Favorite";
import { MainLayout } from "../../layout/MainLayout";

export const FavoritePage = () => {
  return (
    <MainLayout>
      <Favorite />
    </MainLayout>
  );
};
