"use client";
import React, { useEffect } from "react";
import { Logo } from "../common/Logo";
import styles from "./Nav.module.css";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

const Nav = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className={styles.navBar}>
      <Logo />
      <ul className={styles.linkList}>
        <li className={styles.listElement}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.listElement}>
          <Link href="home">How it Works</Link>
        </li>
        <li className={styles.listElement}>
          <Link href="home">About Us</Link>
        </li>
        <li className={styles.listElement}>
          <Link href="home">Providers</Link>
        </li>
        <li className={styles.listElement}>
          {isSignedIn ? <UserButton /> : <Link href="/sign-in">Login</Link>}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
