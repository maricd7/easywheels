import React from "react";
import styles from "./Paragraph.module.css";

type ParagraphProps = {
  text: string;
};

const Paragraph = ({ text }: ParagraphProps) => {
  return <p className={styles.paragraph}>{text}</p>;
};

export default Paragraph;
