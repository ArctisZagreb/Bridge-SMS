import React, { useEffect } from "react";
import styles from "./../../styles/News.module.scss";
import { NEWS } from "../../DB/News";
import { NewsItem } from "../../components/News/NewsItem/NewsItem";
import { LeftSideContainer } from "../../components/Container/LeftSideContainer";
import { RightSideContainer } from "../../components/Container/RightSideContainer";
import { SideBarTitle } from "../../components/UI/SideBarTitle";
const News = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);
  return (
    <div className={styles["news"]}>
      <LeftSideContainer>
        {NEWS.map((newsItem, i) => {
          return <NewsItem key={i} itemData={newsItem} />;
        })}
      </LeftSideContainer>
      <RightSideContainer>
        <div className={styles["twitter-feed"]}>
          <SideBarTitle>Follow Us On Twitter</SideBarTitle>
          <a
            className="twitter-timeline"
            href="https://twitter.com/BRIDGE_SMS?ref_src=twsrc%5Etfw"
          >
            Tweets by BRIDGE_SMS
          </a>
        </div>
      </RightSideContainer>
    </div>
  );
};

export default News;
