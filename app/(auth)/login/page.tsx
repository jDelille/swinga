import LoginForm from "@/components/auth/LoginForm";
import SinglePageLayout from "@/components/layout/SinglePageLayout";
import React from "react";

type LoginPageProps = {};
const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <div className="page">
      <img src={"/auth.jpg"} alt="" className="auth-img" />

      <SinglePageLayout isAuth>
        <div className="form">
          <LoginForm />
        </div>
      </SinglePageLayout>
    </div>
  );
};

export default LoginPage;
