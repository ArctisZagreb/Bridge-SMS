import React from "react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["box"]}>
        <h3>Project Partners</h3>
        <div className={styles["logo-box"]}>
          <img
            src="/logos/projectPartners/logo-group.png"
            alt="project partner logos"
          />
        </div>
      </div>
      <div className={styles["box"]}>
        <h3>Supporting Institutions</h3>
        <div className={styles["logo-box"]}>
          {" "}
          <img
            className={styles["second-img"]}
            src="/logos/supportingInstitutions/logo-group.png"
            alt="Supporting Institutions logos"
          />
        </div>
      </div>
      <div className={styles["box"]}>
        <h3>Collaborating Institutions</h3>
        <div className={styles["logo-box"]}>
          {" "}
          <img
            className={styles["third-img"]}
            src="/logos/collaboratingInstitutions/logo-group.png"
            alt="Collaborating Institutions logos"
          />
        </div>
      </div>
    </div>
  );
};
