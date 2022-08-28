import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dashboard } from "../../components/dashboard/Dashboard";
import { Header } from "../../layout/Header";
import { fetchAllFavorite, fetchAllSuperHero } from "../superHeroRedux/Action";

export const DashboardPage = () => {
  const dispatch = useDispatch();
  const { oneSuperHero } = useSelector((state) => state.superHero);

  useEffect(() => {
    dispatch(fetchAllSuperHero());
    dispatch(fetchAllFavorite());
  }, []);

  return (
    <div className="dashboardPage">
      <Header />
      <div className="form d-flex justify-content-center">
        <Dashboard />
      </div>
    </div>
  );
};
