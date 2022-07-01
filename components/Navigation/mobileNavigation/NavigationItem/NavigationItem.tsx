import React from "react";
import styles from "./NavigationItem.module.scss";

interface INavigationItem {
  type: "main" | "secondary";
  link: boolean;
  key: number;
  children: JSX.Element[] | JSX.Element;
}

export const NavigationItem: React.FC<INavigationItem> = ({
  type = "main",
  link,
  children,
}) => {
  return (
    <li
      className={`${styles[`link-${type}`]} ${
        !link && styles["link-disabled"]
      }`}
    >
      {children}
    </li>
  );
};
