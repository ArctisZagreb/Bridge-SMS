import Link from "next/link";
import React, { useState } from "react";
import { DesktopNavigation } from "./desktopNavigation/DesktopNavigation";
import { MobileNavigation } from "./mobileNavigation/MobileNavigation";
import styles from "./Navigation.module.scss";
import { navigationItems } from "./NavigationItems";
export const Navigation = () => {
  const [navigationData, setNavigationData] = useState(navigationItems);
  const [toggleMobile, setToggleMobile] = useState(false);
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
    <div className={styles["navigation-wrapper"]}>
      <MobileNavigation />
      <DesktopNavigation />
    </div>
  );
};
