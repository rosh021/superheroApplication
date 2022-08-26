import React from "react";
import { RegisterForm } from "../../components/register/RegisterForm";

import { MainLayout } from "../../layout/MainLayout";

export const RegisterPage = () => {
  return (
    <MainLayout>
      <div className="form d-flex justify-content-center">
        <RegisterForm />
      </div>
    </MainLayout>
  );
};
