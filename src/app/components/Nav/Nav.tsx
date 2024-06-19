import React from "react";
import { Logo } from "../common/Logo";
import styles from "./Nav.module.css";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className={styles.navBar}>
      <Logo />
      <ul className={styles.linkList}>
        <li className={styles.listElement}>
          <Link href="home">Home</Link>
        </li>
        <li className={styles.listElement}>
          <Link href="home">Our Cars</Link>
        </li>
        <li className={styles.listElement}>
          <Link href="home">About Us</Link>
        </li>
        <li className={styles.listElement}>
          <Link href="home">Contact</Link>
        </li>
        <li className={styles.listElement}>
          <Link href="home">Providers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
