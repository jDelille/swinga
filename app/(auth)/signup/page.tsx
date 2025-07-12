import SignupForm from "@/components/auth/SignupForm";
import SinglePageLayout from "@/components/layout/SinglePageLayout";
import React from "react";

type SignupPageProps = {};
const SignupPage: React.FC<SignupPageProps> = () => {
  return (
    <div className="page">
      <img src={"/auth.jpg"} alt="" className="auth-img" />

      <SinglePageLayout>
        <div className="form">
          <SignupForm />
        </div>
      </SinglePageLayout>
    </div>
  );
};

export default SignupPage;
