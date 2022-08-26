import React from "react";
import { Dashboard } from "../../components/dashboard/Dashboard";
import { MainLayout } from "../../layout/MainLayout";

export const DashboardPage = () => {
  return (
    <MainLayout>
      <div className="form d-flex justify-content-center">
        <Dashboard />
      </div>
    </MainLayout>
  );
};
