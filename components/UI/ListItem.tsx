import React from "react";
import { uiInterface, listInterface } from "./types";
import styles from "./ui.module.scss";
export const ListItem: React.FC<uiInterface | listInterface> = ({
  children,
}) => {
  return <li className={styles["list-item"]}>{children}</li>;
};
