import React from "react";
import styles from "./button.module.css";
import propTypes from "prop-types";

function Button({ type, children, ...props }) {
  return (
    <button className={`${styles.btn} ${styles[`btn-${type}`]}`} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.string.isRequired,
  children: propTypes.string.isRequired,
  props: propTypes.object,
};

export default Button;
