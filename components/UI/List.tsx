import React from "react";
import styles from "./ui.module.scss";
import { listInterface } from "./types";
export const List: React.FC<listInterface> = ({ children, listType }) => {
  return (
    <ul className={`${styles["list"]} ${listType === "dot" && styles["dot"]}`}>
      {children}
    </ul>
  );
};
