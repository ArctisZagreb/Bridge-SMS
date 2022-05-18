import React from "react";
import styles from "./SocialMedia.module.scss";
interface iconBoxInterface {
  iconSrc: string;
  url: string;
}
export const IconBox: React.FC<iconBoxInterface> = ({ iconSrc, url }) => {
  const iconBoxStyles = {
    background: `url(${iconSrc})`,
    backgroundSize: "100%",
  };
  return (
    <a href={url} target="_blank">
      <div className={styles["icon-box"]} style={iconBoxStyles}></div>
    </a>
  );
};
