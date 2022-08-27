import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dashboard } from "../../components/dashboard/Dashboard";
import { Header } from "../../layout/Header";
import { fetchAllSuperHero } from "../superHeroRedux/Action";

export const DashboardPage = () => {
  const dispatch = useDispatch();
  const { oneSuperHero } = useSelector((state) => state.superHero);

  useEffect(() => {
    dispatch(fetchAllSuperHero());
  }, []);

  return (
    <div
      className="dashboardPage"
      // style={{
      //   backgroundImage:
      //     "url(" +
      //     "https://openweathermap.org/img/wn/{oneSuperHero?.images?.sm}.png" +
      //     ")",
      // }}
    >
      <Header />
      <div className="form d-flex justify-content-center">
        <Dashboard />
      </div>
    </div>
  );
};
