import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Navigation.module.scss";
import { navigationItems } from "./NavigationItems";
export const Navigation = () => {
  const [navigationData, setNavigationData] = useState(navigationItems);
  const router = useRouter();
  console.log(router);
  const handleActiveNavigation = (id: number) => {
    const updatedNavigation = navigationData.map((n) => {
      if (n.id === id) {
        n.active = true;
      } else {
        n.active = false;
      }
      return n;
    });
    console.log(updatedNavigation);
    setNavigationData((): any => {
      return [...updatedNavigation];
    });
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
            {item.subDomain && (
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
