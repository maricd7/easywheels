import React from "react";
import styles from "./LoginMain.module.css";
import { LoginForm } from "../LoginForm";
import { Heading, Paragraph } from "../common";

const LoginMain = () => {
  return (
    <section className={styles.loginSection}>
      <Heading text="Login" />
      <Paragraph text="Login to your EasyWheels account and get extra features when renting your favourite cars" />
      <LoginForm />
    </section>
  );
};

export default LoginMain;
