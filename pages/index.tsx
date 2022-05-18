import type { NextPage } from "next";
import { LeftSideContainer } from "../components/Container/LeftSideContainer";
import { RightSideContainer } from "../components/Container/RightSideContainer";
import { LatestNews } from "../components/Sidebar/LatestNews/LatestNews";
import { MarieAction } from "../components/Sidebar/MarieAction/MarieAction";
import { Search } from "../components/Sidebar/Search/Search";
import { SocialMedia } from "../components/Sidebar/SocialMedia/SocialMedia";
import { UsefulLinks } from "../components/Sidebar/UsefulLinks/UsefulLinks";
import { ContentText } from "../components/UI/ContentText";
import { List } from "../components/UI/List";
import { ListItem } from "../components/UI/ListItem";
import { TitleH1 } from "../components/UI/TitleH1";
import { TitleH3 } from "../components/UI/TitleH3";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles["home"]}>
        <LeftSideContainer>
          <TitleH1>BRIDGE SMS Homepage</TitleH1>
          <div className={styles["image-container"]}>
            <img src="./images/ManchBr2.jpg" />
          </div>
          <div className={styles["header-image"]}></div>
          <ContentText>
            “Intelligent Bridge Assessment Maintenance and Management System
            (BRIDGE SMS)” (Grant no: 612517) is a European Commission, Marie
            Curie 7th Framework Programme funded Project, under the
            Industry-Academia Partnerships and Pathways (IAPP) call:
            FP7-People-2013-IAPP.
          </ContentText>

          <ContentText>
            BRIDGE SMS is a software application that empowers engineers and key
            personnel to predict, identify and prepare for potentially
            destructive flood events. BRIDGE SMS is a robust and efficient tool
            designed to lower maintenance/planning costs and to provide more
            secure bridge management/operation. BRIDGE SMS is focused, but not
            limited to scour/flood risk (Qualitative and Quantitative scour
            risk), the extension of structure assessment and inspection (above
            the waterline) is possible. BRIDGE SMS would be a management tool
            (and decision support system) providing bridge historic data,
            current bridge status (measured real-time data from gauges, ongoing
            maintenance, scaffolding, etc.) and future data (Flood early warning
            system, recommendations and mitigation measures). The system will
            also develop mobile phone/tablets application for inspectors
            (standard inspection forms and photographs would be possible to
            upload into the BRIDGE SMS system directly from the surveys).
          </ContentText>
          <TitleH3>BRIDGE SMS Key goals</TitleH3>
          <List>
            <ListItem>
              To develop standardised methods for bridge scour inspection
            </ListItem>
            <ListItem>
              To develop standards for bridge assessment and management.
            </ListItem>
            <ListItem>
              To calculate the risk of and manages the potential effects of
              flood events.
            </ListItem>
            <ListItem>
              To develop a database framework that is designed for intuitive
              use, encouraging participation by personnel at all levels within
              management authorities.
            </ListItem>
            <ListItem>
              <>To develop a system that</>

              <List listType="dot">
                <ListItem>
                  collects, integrates and processes real-time data at regular
                  intervals from weather and hydrologic sources, meters and
                  gauges, and other sensing devices.
                </ListItem>
                <ListItem>
                  will rapidly notify based on in-built intelligence and
                  decision-making processes, relevant personnel of possible
                  maintenance and failure issues.
                </ListItem>
                <ListItem>
                  will advise in relation to current Scour Risk at bridge
                  structures and prompt an appropriate Plan of Action (POA)
                  which may involve various levels of maintenance and repair.
                </ListItem>
                <ListItem>
                  which will prioritize and optimize the operational and
                  maintenance budget spend for infrastructure companies.
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              Maximum use of new Information and Communications Technology (ICT)
              hardware such as tablets and cloud-based systems for on-site rapid
              communications, data collection, and analysis.
            </ListItem>
          </List>
          <TitleH3>Pilot Area</TitleH3>
          <ContentText>
            Pilot area is located in Ireland, County Cork, on the river Bandon
            Catchment. The location of selected bridges with monitoring network
            is shown in the map below.
          </ContentText>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1hK52rdY_yh2DFy04l07ho-14vMQU-oVQ&ehbc=2E312F"
            width="640"
            height="480"
          ></iframe>
        </LeftSideContainer>
        <RightSideContainer>
          <Search />
          <MarieAction />
          <SocialMedia />
          <LatestNews />
          <UsefulLinks />
        </RightSideContainer>
      </div>
    </div>
  );
};

export default Home;
