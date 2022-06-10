import React, { useState } from "react";
import styles from "./MobileNavigation.module.scss";
export const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles["mobile-navigation"]}>
      {open ? (
        <div
          onClick={() => {
            setOpen(!open);
          }}
        >
          Hambi
        </div>
      ) : (
        <ul
          onClick={() => {
            setOpen(!open);
          }}
        >
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      )}
    </div>
  );
};
