import React from "react";
import { contentTextInterface } from "./types";
import styles from "./ui.module.scss";
export const ContentText: React.FC<contentTextInterface> = ({
  children,
  textAlign = "left",
}) => {
  return (
    <p style={{ textAlign: textAlign }} className={styles["content-text"]}>
      {children}
    </p>
  );
};
