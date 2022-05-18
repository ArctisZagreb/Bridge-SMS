import React, { Children } from "react";
import { uiInterface } from "./types";
import styles from "./ui.module.scss";
export const SideBarTitle: React.FC<uiInterface> = ({ children }) => {
  return (
    <div className={styles["sidebar-title"]}>
      <h3>{children}</h3>
    </div>
  );
};
