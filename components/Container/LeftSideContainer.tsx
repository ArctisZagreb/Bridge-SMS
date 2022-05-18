import React from "react";
import { ContainerInterface } from "./conteinerTypes";
import styles from "./Container.module.scss";
export const LeftSideContainer: React.FC<ContainerInterface> = ({
  children,
}) => {
  return <div className={styles["left-side-container"]}>{children}</div>;
};
