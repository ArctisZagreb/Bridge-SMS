import React from "react";
import { LeftSideContainer } from "../../components/Container/LeftSideContainer";
import BasicLink from "../../components/UI/BasicLink";
import { ContentText } from "../../components/UI/ContentText";
import { List } from "../../components/UI/List";
import { ListItem } from "../../components/UI/ListItem";
import Margin from "../../components/UI/Margin";
import { TitleH1 } from "../../components/UI/TitleH1";
import styles from "./../../styles/publications/Publications.module.scss";

const OutreachMaterials = () => {
  return (
    <div>
      <LeftSideContainer>
        <TitleH1>Outreach Materials</TitleH1>
        <Margin marginBottom={30} />

        <div className={styles["review-container"]}>
          <h3 className={styles["title"]}>TU1406 WG Meeting and Workshop</h3>
          <address className={styles["address-time"]}>
            Belgrade, Serbia <time>(March 30 – April 1, 2016) </time>
          </address>
          <ContentText>
            Bridge SMS at Cost Action TU1406 Quality specifications for roadway
            bridges, standardization at a European level (BridgeSpec)
          </ContentText>
          <List listType="dot">
            <ListItem>
              <>
                Pakrashi, V, McKeogh, E., Kerin, I., McAuliffe, S., Bekić, D.,
                Development of the bridge management system under the project
                Bridge SMS{" "}
              </>
              <BasicLink linkPath="/PDF/TU1406_Belgrade_BridgeSMS.pdf">
                TU1406_Belgrade_BridgeSMS
              </BasicLink>
            </ListItem>
          </List>
        </div>
        <div className={styles["review-container"]}>
          <h3 className={styles["title"]}>TU1406 WG Meeting and Workshop</h3>
          <address className={styles["address-time"]}>
            Reykjavik, Iceland <time>(March, 8 – 11 2016)</time>{" "}
            <BasicLink linkPath="http://gnss4swec.knmi.nl/">
              http://gnss4swec.knmi.nl/
            </BasicLink>
          </address>
          <ContentText>
            Bridge SMS at Cost Action ES1206 – GNSS4SWEC – Advanced Global
            Navigation Satellite Systems tropospheric products for monitoring
            severe weather events and climate
          </ContentText>
          <List listType="dot">
            <ListItem>
              <>Mckeogh, E., Kerin, I., Bridge SMS </>
              <BasicLink linkPath="/PDF/ES1206_BridgeSMS.pdf">
                ES1206_BridgeSMS
              </BasicLink>
            </ListItem>
            <ListItem>
              <>
                Mckeogh, E., Kerin, I., GNSS Meteorology – Ireland National
                Report{" "}
              </>
              <BasicLink linkPath="/PDF/NationalReport_Ireland.pdf">
                NationalReport_Ireland
              </BasicLink>
            </ListItem>
          </List>
          <ContentText>
            <>
              For the overview of the BRIDGE SMS – project objectives, key
              goals, research methodology and approach, etc., download PDF:{" "}
            </>
            <BasicLink linkPath="/PDF/BRIDGE SMS Research Poster_v3.pdf">
              BRIDGE SMS Research Poster_v3
            </BasicLink>
          </ContentText>
          <ContentText>
            <>
              Based on the MetÉireann 36-hour meteorological forecast for Cork
              Co. on 31st August 2017, HEC-HMS model for the flood forecast on
              Bandon catchment in Ireland was developed. To view the weather
              report of the hydrological event that occured on September 2nd
              2017, download PDF:{" "}
            </>
            <BasicLink linkPath="/PDF/BRIDGESMS_Weather_Report_Sep2017.pdf">
              BRIDGESMS_Weather_Report_Sep2017
            </BasicLink>
          </ContentText>
        </div>
      </LeftSideContainer>
    </div>
  );
};

export default OutreachMaterials;
