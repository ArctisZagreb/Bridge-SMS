import React from "react";
import { SideBarTitle } from "../../UI/SideBarTitle";
import { NEWS } from "../../../DB/News";
import { NewsItem } from "./NewsItem";
import styles from "./LatestNews.module.scss";
export const LatestNews = () => {
  return (
    <div className={styles["latest-news"]}>
      <SideBarTitle>Latest News</SideBarTitle>
      <div className={styles["latest-news__news-list"]}>
        {NEWS.map((newsItem, i) => {
          return <NewsItem key={i} itemData={newsItem} />;
        })}
      </div>
    </div>
  );
};
