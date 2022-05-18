import React from "react";
import { uiInterface } from "./types";
import styles from "./ui.module.scss";
export const TitleH3: React.FC<uiInterface> = ({ children }) => {
  return <h3 className={styles["title-h3"]}>{children}</h3>;
};
