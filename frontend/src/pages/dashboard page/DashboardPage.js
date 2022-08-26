import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dashboard } from "../../components/dashboard/Dashboard";
import { MainLayout } from "../../layout/MainLayout";
import { fetchAllSuperHero } from "../superHeroRedux/Action";

export const DashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllSuperHero());
  }, []);

  return (
    <MainLayout>
      <div className="form d-flex justify-content-center">
        <Dashboard />
      </div>
    </MainLayout>
  );
};
