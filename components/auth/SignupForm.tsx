"use client";

import React, { useState } from "react";
import Button from "../reusable/button/Button";
import Link from "next/link";
import { GoogleIcon } from "@/icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebase/config";
import { useRouter } from "next/navigation";
import styles from "./Form.module.scss";
import { GOLF_CLUBS } from "@/constants/golfClubs";
import { createDefaultGolfBag } from "@/firebase/collections/golfBag";

type SignupFormProps = {};

const SignupForm: React.FC<SignupFormProps> = () => {
  const [formData, setFormData] = useState({
    name: "",
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
      // 1. Sign up the user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      // 2. Save user info in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: formData.name,
        email: formData.email,
        createdAt: new Date(),
        level: "Beginner"
      });

      await createDefaultGolfBag(user.uid);

      console.log("User signed up and document created");
      router.push("/")
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className={styles.signupForm}>
      <div className={styles.formTitle}>
        <h2>Start Your Swinga Journey</h2>
        <p>
          Create your account to track sessions, unlock badges, and improve
          every round with real data.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
            placeholder=""
          />
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
        </div>
        <div className={styles.inputGroup}>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
            placeholder=""
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
            value={formData.password}
            onChange={handleChange}
            required
            className={styles.input}
            placeholder=""
          />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
        </div>

        <Button children="Sign Up" type="submit" />

        <div className={styles.redirect}>
          Already have an account?
          <Link href={"/login"}>Log In</Link>
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
                Sign up with Google
              </span>
            }
            variant="secondary"
          />
        </div>

        <div className={styles.disclaimer}>
          <div>
            By signing up to create an account, you accept Swinga's{" "}
            <Link href={"/settings/terms"}>
              Terms of Use and Privacy Policy.
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
