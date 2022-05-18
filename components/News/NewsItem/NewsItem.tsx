import React from "react";
import styles from "./NewsItem.module.scss";
import { newsInterface } from "../../../DB/News";
import { convertDate } from "../../../utils/helperFunctions";
import { TitleH1 } from "../../UI/TitleH1";
import Link from "next/link";
interface newsItemInterface {
  itemData: newsInterface;
}
export const NewsItem: React.FC<newsItemInterface> = ({ itemData }) => {
  const convertedDate = convertDate(itemData.date);
  return (
    <div className={styles["news-item"]}>
      <TitleH1>{itemData.title}</TitleH1>
      <div className={styles["news-item__published"]}>
        Published <time>{convertedDate}</time>
        <span className={styles["separator"]}>|</span>
        <p className={styles["author"]}>By {itemData.author}</p>
      </div>
      <div className={styles["news-item__short"]}>
        {itemData.shortDescription}{" "}
        <span className={styles["news-item__short__link"]}>
          <Link href={`/news/${itemData.title}`}>Continue reading →</Link>
        </span>
      </div>
    </div>
  );
};
