import React from "react";
import styles from "./Input.module.css";

type InputProps = {
  label: string;
  placeholder: string;
  onChange: () => void;
  reference: string;
};
const Input = ({ label, placeholder, onChange, reference }: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel}>{label}</label>
      <input
        className={styles.inputField}
        placeholder={placeholder}
        onChange={onChange}
        ref={reference}
      />
    </div>
  );
};

export default Input;
