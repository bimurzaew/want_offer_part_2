import React from "react";
import styles from "./input.module.css";
import propTypes from "prop-types";

function Input({ type, ...props }) {
  return <input className={styles[type]} {...props} />;
}

Input.propTypes = {
  type: propTypes.string.isRequired,
  props: propTypes.object,
};

export default Input;
