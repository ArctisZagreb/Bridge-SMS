import React from "react";
import { LeftSideContainer } from "../../components/Container/LeftSideContainer";
import BasicLink from "../../components/UI/BasicLink";
import { ContentText } from "../../components/UI/ContentText";
import Margin from "../../components/UI/Margin";
import { TitleH1 } from "../../components/UI/TitleH1";
import styles from "./../../styles/contact/Contact.module.scss";
const Contact = () => {
  return (
    <div>
      <LeftSideContainer>
        <TitleH1>Contact Bridge SMS</TitleH1>
        <ContentText>Sveučilište u Zagrebu,</ContentText>
        <ContentText>Građevinski fakultet,</ContentText>
        <ContentText>Zavod za hidrotehniku,</ContentText>
        <ContentText>Fra Andrije Kačića-Miošića 26, 10 000 Zagreb</ContentText>
        <ContentText>Phone: +385 1 4864446</ContentText>
        <ContentText>
          <>E-mail: </>
          <BasicLink linkPath="mailto:damir.bekic@grad.hr">
            damir.bekic@grad.hr
          </BasicLink>
        </ContentText>
        <Margin marginTop={20} />
        <TitleH1>Ask a researcher a question on</TitleH1>
        <div className={styles["social-icons"]}>
          <a
            target="_blank"
            className={styles["icon"]}
            href="https://www.facebook.com/BRIDGE.SMS.EU.FP7/"
          >
            <img src="/icons/default_facebook.png" alt="facebook icon" />
          </a>
          <a
            target="_blank"
            className={styles["icon"]}
            href="https://twitter.com/bridge_sms"
          >
            <img src="/icons/default_twitter.png" alt="twitter icon" />
          </a>
          <a
            className={styles["icon"]}
            target="_blank"
            href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fgroups%2FBridge-SMS-8337384%2Fabout&trk=login_reg_redirect"
          >
            <img src="/icons/default_linkedin.png" alt="linkedin icon" />
          </a>
        </div>
        <Margin marginBottom={100} />
      </LeftSideContainer>
    </div>
  );
};

export default Contact;
