import React from "react";
import { LoginForm } from "../../components/login/LoginForm";
import { MainLayout } from "../../layout/MainLayout";

export const LoginPage = () => {
  return (
    <MainLayout>
      <div className="form d-flex justify-content-center">
        <LoginForm />
      </div>
    </MainLayout>
  );
};
