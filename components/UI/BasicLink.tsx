import React from "react";
import { linkInterface } from "./types";
import styles from "./ui.module.scss";
const BasicLink: React.FC<linkInterface> = ({ children, linkPath }) => {
  return (
    <a className={styles["basic-link"]} href={linkPath} target="_blank">
      {children}
    </a>
  );
};

export default BasicLink;
