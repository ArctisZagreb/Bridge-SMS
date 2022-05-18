import React from "react";
import { SideBarTitle } from "../../UI/SideBarTitle";
import styles from "./UsefulLinks.module.scss";
export const UsefulLinks = () => {
  return (
    <div className={styles["useful-links"]}>
      <SideBarTitle>Useful Links</SideBarTitle>

      <div className={styles["useful-links__content"]}>
        <a
          href="https://marie-sklodowska-curie-actions.ec.europa.eu/"
          target="_blank"
        >
          Marie Sklodowska-Curie
        </a>
        <a href="https://www.efas.eu/en" target="_blank">
          EFAS
        </a>
        <a href="https://www.copernicus.eu/en" target="_blank">
          Copernicus
        </a>
        <a href="http://www.bandonfloodwarning.ie/" target="_blank">
          Bandon FEWS
        </a>
        <a
          href="https://www.tidetimes.org.uk/kinsale-tide-times"
          target="_blank"
        >
          Kinsale Tide Times
        </a>
      </div>
    </div>
  );
};
