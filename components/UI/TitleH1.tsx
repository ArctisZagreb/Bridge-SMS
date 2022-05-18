import React from "react";
import { uiInterface } from "./types";
import styles from "./ui.module.scss";
export const TitleH1: React.FC<uiInterface> = ({ children }) => {
  return <h1 className={styles["title-h1"]}>{children}</h1>;
};
