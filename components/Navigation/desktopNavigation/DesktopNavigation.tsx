import Link from "next/link";
import React, { useState } from "react";
import { navigationItems } from "../NavigationItems";
import styles from "./DesktopNavigation.module.scss";
export const DesktopNavigation = () => {
  const [navigationData, setNavigationData] = useState(navigationItems);
  const handleActiveNavigation = (id: number) => {
    const updatedNavigation = navigationData.map((n) => {
      if (n.id === id) {
        n.active = true;
      } else {
        n.active = false;
      }
      return n;
    });
    setNavigationData(updatedNavigation);
  };

  return (
    <ul className={styles["navigation"]}>
      {navigationData.map((item) => {
        return (
          <li
            className={`${styles["navigation-item"]} ${
              item.active && styles["active-item"]
            }`}
            key={item.id}
            onClick={() => {
              if (item.path === "#") return;
              handleActiveNavigation(item.id);
            }}
          >
            <Link href={item.path}>{item.name}</Link>
            {item.subDomain.length > 0 && (
              <ul className={styles["navigation__subdomain-container"]}>
                {item.subDomain.map((subItem) => {
                  return (
                    <li
                      key={subItem.id}
                      onClick={() => {
                        handleActiveNavigation(item.id);
                      }}
                      className={styles["subdomain-item"]}
                    >
                      <Link href={subItem.path}>{subItem.name}</Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};
