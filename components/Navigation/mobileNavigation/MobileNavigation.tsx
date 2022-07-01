import React, { useState } from "react";
import styles from "./MobileNavigation.module.scss";
import { CSSTransition } from "react-transition-group";
import tranMod from "./transition.module.css";

import Link from "next/link";
import { navigationItems } from "../NavigationItems";
import { NavigationItem } from "./NavigationItem/NavigationItem";
export const MobileNavigation = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNavHandler = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className={styles["mobile-navigation"]}>
      <button
        type="button"
        className={styles.button}
        onClick={toggleNavHandler}
      >
        &#9776;
      </button>

      <CSSTransition
        in={openNav}
        timeout={200}
        classNames={tranMod}
        unmountOnExit
      >
        <ul className={styles["nav"]} onClick={toggleNavHandler}>
          {navigationItems.map((item) => {
            return (
              <NavigationItem
                type="main"
                key={item.id}
                link={item.subDomain.length > 0 ? false : true}
              >
                <Link href={item.path}>{item.name}</Link>
                {item.subDomain && (
                  <ul>
                    {item.subDomain.map((subItem) => {
                      return (
                        <NavigationItem
                          key={subItem.id}
                          type="secondary"
                          link={subItem.subDomain.length > 0 ? false : true}
                        >
                          <Link href={subItem.path}>{subItem.name}</Link>
                        </NavigationItem>
                      );
                    })}
                  </ul>
                )}
              </NavigationItem>
            );
          })}
        </ul>
      </CSSTransition>
    </div>
  );
};
