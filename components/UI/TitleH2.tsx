import React from "react";
import { uiInterface } from "./types";
import styles from "./ui.module.scss";
export const TitleH2: React.FC<uiInterface> = ({ children }) => {
  return <h2 className={styles["title-h2"]}>{children}</h2>;
};
