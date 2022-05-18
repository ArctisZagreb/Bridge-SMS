import React from "react";
import { ContentText } from "../../UI/ContentText";
import { SideBarTitle } from "../../UI/SideBarTitle";
import styles from "./MarieAction.module.scss";
export const MarieAction = () => {
  return (
    <div className={styles["marie-action"]}>
      <SideBarTitle>Marie Sklodowska-Curie action</SideBarTitle>
      <div className={styles["marie-action__content"]}>
        <a
          href="https://marie-sklodowska-curie-actions.ec.europa.eu/"
          target="_blank"
        >
          <img src="./images/MarieCurie.jpg" />
        </a>
        <ContentText>
          Marie Curie 7th Framework Programme funded Project (IAPP) call:
          FP7-People-2013-IAPP
        </ContentText>
      </div>
    </div>
  );
};
