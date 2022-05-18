import React from "react";
import styles from "./LatestNews.module.scss";
import { newsInterface } from "../../../DB/News";
import Link from "next/link";
import { convertDate } from "../../../utils/helperFunctions";
interface newsItemInterface {
  itemData: newsInterface;
}
export const NewsItem: React.FC<newsItemInterface> = ({ itemData }) => {
  const convertedDate = convertDate(itemData.date);
  return (
    <div className={styles["news-item"]}>
      <Link href="/">{itemData.title}</Link>
      <p className={styles["date"]}>{convertedDate}</p>
    </div>
  );
};
