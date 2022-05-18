import React from "react";
import { ContainerInterface } from "./conteinerTypes";
import styles from "./Container.module.scss";
export const RightSideContainer: React.FC<ContainerInterface> = ({
  children,
}) => {
  return <div className={styles["right-side-container"]}>{children}</div>;
};
