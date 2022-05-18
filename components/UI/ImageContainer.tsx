import React from "react";
import { imageContainerInterface } from "./types";
import styles from "./ui.module.scss";
export const ImageContainer: React.FC<imageContainerInterface> = ({
  children,
  marginBottom = 0,
  marginTop = 0,
}) => {
  return (
    <div
      style={{ marginBottom: marginBottom, marginTop: marginTop }}
      className={styles["image-container"]}
    >
      {children}
    </div>
  );
};
