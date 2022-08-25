import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { LoginForm } from "../../components/login/LoginForm";
import { MainLayout } from "../../layout/MainLayout";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userStore);

  useEffect(() => {
    user._id && navigate("/dashboard");
  }, [navigate, user]);
  return (
    <MainLayout>
      <div className="form d-flex justify-content-center">
        <LoginForm />
      </div>
    </MainLayout>
  );
};
