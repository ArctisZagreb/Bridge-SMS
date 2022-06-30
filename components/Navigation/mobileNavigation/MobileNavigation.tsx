import React, { useState } from "react";
import styles from "./MobileNavigation.module.scss";
import { CSSTransition } from "react-transition-group";
import tranMod from "./tran.module.css";

import Link from "next/link";
import { navigationItems } from "../NavigationItems";
export const MobileNavigation = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className={styles["mobile-navigation"]}>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          setOpen(!open);
        }}
      >
        &#9776;
      </button>

      <CSSTransition in={open} timeout={200} classNames={tranMod} unmountOnExit>
        <ul
          className={styles["nav"]}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {navigationItems.map((item) => {
            return (
              <li
                className={`${styles["link-main"]} ${
                  item.subDomain && styles["link-disabled"]
                }`}
                key={item.id}
              >
                <Link href={item.path}>{item.name}</Link>
                {item.subDomain && (
                  <ul>
                    {item.subDomain.map((subItem) => {
                      return (
                        <li key={subItem.id} className={styles["link-sub"]}>
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
      </CSSTransition>
    </div>
  );
};
