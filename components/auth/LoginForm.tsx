"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Form.module.scss";
import Button from "../reusable/button/Button";
import Link from "next/link";
import { GoogleIcon } from "@/icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";

type LoginFormProps = {};
const LoginForm: React.FC<LoginFormProps> = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      router.push("/");
    } catch (err: any) {
      console.error("Login error:", err.message);
    }
  };

  return (
    <div className={styles.loginForm}>
      <div className={styles.formTitle}>
        <h2>Log In</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="email"
            name="email"
            id="email"
            required
            className={styles.input}
            placeholder=""
            onChange={handleChange}
          />
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            name="password"
            id="password"
            required
            className={styles.input}
            placeholder=""
            onChange={handleChange}
          />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
        </div>
        <Button children="Sign In" type="submit" />
        <div className={styles.redirect}>
          Don't have an account yet?
          <Link href={"/signup"}>Sign Up</Link>
        </div>

        <div className={styles.divider}>
          <p>or</p>
        </div>
        <div className={styles.google}>
          <Button
            children={
              <span
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <GoogleIcon size={24} />
                Sign in with Google
              </span>
            }
            variant="secondary"
          />
        </div>
        <div className={styles.disclaimer}>
          <div>
            By continuing, you are agreeing to Swinga's{" "}
            <Link href={"/settings/terms"}>
              Terms of Use and Privacy Policy.
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
