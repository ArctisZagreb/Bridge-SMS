import { NextPage } from "next";
import React from "react";
import styles from "./Container.module.scss";
import { ContainerInterface } from "./conteinerTypes";
export const Container: React.FC<ContainerInterface> = ({ children }) => {
  return <div className={styles["container"]}>{children}</div>;
};
