import React from "react";
import { SideBarTitle } from "../../UI/SideBarTitle";
import { IconBox } from "./IconBox";
import styles from "./SocialMedia.module.scss";
export const SocialMedia = () => {
  return (
    <div className={styles["social-media"]}>
      <SideBarTitle>Social Media</SideBarTitle>
      <div className={styles["social-media__icons"]}>
        <IconBox
          iconSrc="/icons/default_facebook.png"
          url="https://www.facebook.com/BRIDGE.SMS.EU.FP7/?ref=hl"
        />
        <IconBox
          iconSrc="/icons/default_twitter.png"
          url="https://twitter.com/BRIDGE_SMS"
        />
        <IconBox
          iconSrc="/icons/default_youtube.png"
          url="https://www.youtube.com/channel/UCPAMvdlzSwQrpBfPQXcqvTA"
        />
        <IconBox
          iconSrc="/icons/default_linkedin.png"
          url="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fgroups%2FBridge-SMS-8337384%2Fabout&trk=login_reg_redirect"
        />
      </div>
    </div>
  );
};
