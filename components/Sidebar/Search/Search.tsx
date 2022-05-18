import React from "react";
import { TitleH1 } from "../../UI/TitleH1";
import styles from "./Search.module.scss";
export const Search = () => {
  return (
    <div className={styles["search"]}>
      <TitleH1>Search</TitleH1>
      <div className={styles["search__container"]}>
        <input />
        <button>search</button>
      </div>
    </div>
  );
};
