import React from "react";
import { LeftSideContainer } from "../../components/Container/LeftSideContainer";
import BasicLink from "../../components/UI/BasicLink";
import { ContentText } from "../../components/UI/ContentText";
import { List } from "../../components/UI/List";
import { ListItem } from "../../components/UI/ListItem";
import Margin from "../../components/UI/Margin";
import { TitleH1 } from "../../components/UI/TitleH1";
import styles from "./../../styles/publications/Publications.module.scss";
const PeerReviewedPublications = () => {
  return (
    <div>
      <LeftSideContainer>
        <TitleH1>Peer-Reviewed Publications</TitleH1>
        <Margin marginBottom={30} />
        <div className={styles["review-container"]}>
          <h3 className={styles["title"]}>
            2nd International Biennial Conference on Bridge Management (IBMS)
          </h3>
          <address className={styles["address-time"]}>
            Hyberabad, India <time>(October 22-26, 2018)</time>
          </address>
          <ContentText>
            Cahill, P., Michalis, P., Pakrashi, V., Bekic, D., Solman, H.,
            Kerin, I. & McKeogh, E., DEVELOPMENT OF BRIDGE MANAGEMENT SYSTEM AND
            ASSOCIATED INSPECTION AND MAINTENANCE PROCEDURES FOR INTELLIGENT
            ASSET MANAGEMENT
          </ContentText>
        </div>
        <div className={styles["review-container"]}>
          <h3 className={styles["title"]}>
            Canadian Journal of Earth Sciences, 10.1139/cjes-2018-0024
          </h3>
          <address className={styles["address-time"]}>
            Published: <time>July 2018</time>
          </address>
          <List listType="dot">
            <ListItem>
              <>
                Ivezić, V., Bekić, D., Kerin, I., ESTIMATING BASIN WIDE AIR
                TEMPERATURE BY PARTIAL INTEGRATION OF REMOTE SENSING DATA{" "}
              </>
              <BasicLink linkPath="https://cdnsciencepub.com/doi/abs/10.1139/cjes-2018-0024">
                Online_Abstract
              </BasicLink>
            </ListItem>
          </List>
        </div>
        <div className={styles["review-container"]}>
          <h3 className={styles["title"]}>
            5th IAHR Europe Congres — New Challenges in Hydraulic Research and
            Engineering
          </h3>
          <address className={styles["address-time"]}>
            Trento, Italy <time>(June 12-14, 2018) </time>{" "}
            <BasicLink linkPath="https://event.unitn.it/iahr2018">
              https://event.unitn.it/iahr2018
            </BasicLink>
          </address>
          <List listType="dot">
            <ListItem>
              Gilja, G., Valyrakis, M., Michalis, P., Bekić, D., Kuspilić, N.,
              McKeogh, E., 2018, PHYSICAL MODELLING OF FLOW AND GEOMORPHOLOGICAL
              CONDITIONS ALONG AN ARCHED BRIDGE WITH A SCOURED ABUTMENT
            </ListItem>
          </List>
        </div>
        <div className={styles["review-container"]}>
          <h3 className={styles["title"]}>
            Fifth International Conference on Road and Rail Infrastructure CETRA
            2018
          </h3>
          <address className={styles["address-time"]}>
            Zadar, Croatia <time>(May 17-18, 2018)</time>{" "}
            <BasicLink linkPath="http://www.grad.hr/cetra">
              http://www.grad.hr/cetra
            </BasicLink>
          </address>
          <List listType="dot">
            <ListItem>
              Bekić, D., Kerin, I., P., Cahill, P., Michalis, Lapthorne, J.,
              Šolman, H., Gilja, G., Potočki, K., Pakrashi, V., McKeogh, E.,
              2018, BRIDGE SMS: INNOVATIVE SOLUTION FOR MANAGEMENT OF BRIDGES
              OVER WATER
            </ListItem>
          </List>
        </div>
        <div className={styles["review-container"]}>
          <h3 className={styles["title"]}>
            European Geosciences Union General Assembly 2018 (EGU)
          </h3>
          <address className={styles["address-time"]}>
            Vienna, Austria <time>(April 8-13, 2018)</time>{" "}
            <BasicLink linkPath="https://www.egu2018.eu/">
              https://www.egu2018.eu/
            </BasicLink>
          </address>
          <List listType="dot">
            <ListItem>
              Gilja, G., Valyrakis, M., Michalis, P., Bekić, D., Kuspilić, N.,
              McKeogh, E., 2018, MEASUREMENT OF TURBULENT FLOW FIELD ALONG A
              BRIDGE ABUTMENT
            </ListItem>
            <ListItem>
              <>
                Henderson, K., Gilja, G., Michalis, P., Bekić, D., McKeogh, E.,
                Hasibi, A., McKeogh, E., Valyrakis, M., 2018, ASSESSMENT OF
                SEDIMENT TRANSPORT PROCESSES ALONG A PHYSICAL MODEL OF A STREAM
                WITH AN ARCHED BRIDGE, UNDER CLIMATE CHANGE SCENARIOS{" "}
              </>
              <BasicLink linkPath="https://www.researchgate.net/publication/324653181_Assessment_of_sediment_transport_processes_along_a_physical_model_of_a_stream_with_an_arched_bridge_under_climate_change_scenarios">
                ResearchGate_Abstract
              </BasicLink>
            </ListItem>
          </List>
        </div>
        <div className={styles["review-container"]}>
          <h3 className={styles["title"]}>
            WG3, WG4 and WG5 Workshop Cost Action TU1406: Sustainable Bridge
            Management
          </h3>
          <address className={styles["address-time"]}>
            Wroclaw, Poland <time>(March 1-2, 2018)</time>{" "}
            <BasicLink linkPath="https://www.tu1406.eu/meetings/wroclaw">
              https://www.tu1406.eu/meetings/wroclaw
            </BasicLink>
          </address>
          <ContentText>
            Bekic, D., Kerin, I., Verkade, J., Gilja, G., Pakrashi, V., McKeogh,
            E., FLOOD EARLY WARNING SYSTEM FOR SUPPORTING DECISION PROCESSES ON
            ROADS AND BRIDGES
          </ContentText>
        </div>
        <div className={styles["review-container"]}>
          <h3 className={styles["title"]}>
            Atmosphere 9(4):120, 10.3390/atmos9040120
          </h3>
          <address className={styles["address-time"]}>
            Published: <time> March 2018</time>
          </address>
          <List listType="dot">
            <ListItem>
              <>
                Ivezić, V., Bekić, D., Kerin, I., MODELLING OF BASIN WIDE DAILY
                EVAPOTRANSTPIRATION WITH A PARTIAL INTEGRATION OF REMOTE SENSING
                DATA{" "}
              </>
              <BasicLink linkPath="https://www.mdpi.com/2073-4433/9/4/120/htm">
                Online_Full_Paper
              </BasicLink>
            </ListItem>
          </List>
        </div>
        <div className={styles["review-container"]}>
          <h3 className={styles["title"]}>
            Advances in Hydroinformatics, Springer Water, Springer Nature
            Singapore Pte Ltd., 10.1007/978-981-10-7218-5_77
          </h3>
          <address className={styles["address-time"]}>
            Published: <time>January 2018</time>
          </address>
          <List listType="dot">
            <ListItem>
              <>
                Kerin, I., Giri, S., Bekić, D., SIMULATION OF LEVEE BREACH USING
                DELFT MODELS: A CASE STUDY OF THE DRAVA RIVER FLOOD EVENT{" "}
              </>
              <BasicLink linkPath="https://www.springerprofessional.de/en/simulation-of-levee-breach-using-delft-models-a-case-study-of-th/15492396">
                Online_Abstract
              </BasicLink>
            </ListItem>
          </List>
        </div>
        <div className={styles["review-container"]}>
          <h3 className={styles["title"]}>
            15th International Symposium on Water Management and Hydraulics
            Engineering WMHE 2017
          </h3>
          <address className={styles["address-time"]}>
            Primosten, Croatia <time>(September 6-8, 2017) </time>{" "}
            <BasicLink linkPath="http://www.grad.hr/wmhe2017/">
              http://www.grad.hr/wmhe2017/
            </BasicLink>
          </address>
          <List listType="dot">
            <ListItem>
              <>
                Lapthorne, J., O’Riordan, K., O’Sullivan, M., Ryan, D., Larkin,
                C. 2017, BRIDGE SMS PROJECT – THE CORK COUNTY COUNCIL EXPERIENCE{" "}
              </>
              <BasicLink linkPath="/PDF/Lapthorne_et_al_WMHE2017.pdf">
                Lapthorne_et_al_WMHE2017
              </BasicLink>
            </ListItem>
            <ListItem>
              <>
                Gilja, G., Valyrakis, M., Michalis, P., Bekić, D., Kuspilić, N.,
                McKeogh, E., 2017, INVESTIGATION OF FLOW PATTERN AT SCOURED
                ABUTMENT IN NON-UNIFORM GRAVEL BED{" "}
              </>
              <BasicLink linkPath="/PDF/Gilja_et_al_WMHE2017.pdf">
                Gilja_et_al_WMHE2017
              </BasicLink>
            </ListItem>
            <ListItem>
              <>
                Cahill, P., Michalis, P., Gilja, G., Bekić, D., Pakrashi, V.,
                McKeogh, E., 2017, DEVELOPMENT OF AN INTELLIGENT HYDROINFORMATIC
                SYSTEM FOR REAL-TIME MONITORING AND ASSESSMENT OF CIVIL
                INFRASTRUCTURE{" "}
              </>
              <BasicLink linkPath="/PDF/Cahill_et_al_WMHE2017.pdf">
                Cahill_et_al_WMHE2017
              </BasicLink>
            </ListItem>
            <ListItem>
              <>
                Gilja, G., Kerin, I., Michalis, P., Bekić, D., Pakrashi, V.,
                McKeogh, E. 2017, ANALYSIS OF UNCERTAINTIES IN BRIDGE SCOUR
                ESTIMATION{" "}
              </>
              <BasicLink linkPath="/PDF/Gilja_et_al_WMHE2017-2.pdf">
                Gilja_et_al_WMHE2017
              </BasicLink>
            </ListItem>
          </List>
        </div>
        <div className={styles["review-container"]}>
          <h3 className={styles["title"]}>SimHydro 2017</h3>
          <address className={styles["address-time"]}>
            Nice, France <time>(June 14-16, 2017) </time>
          </address>
          <ContentText>
            Kerin, I., Giri, S. & Bekic, D., SIMULATION OF LEVEE BREACHES ON
            RIVER DRAVA DURING NOVEMBER 2012 FLOOD EVENT USING DELFT-FM MODEL
          </ContentText>
        </div>
        <div className={styles["review-container"]}>
          <h3 className={styles["title"]}>
            The General Assembly 2017 of the European Geosciences Union (EGU)
          </h3>
          <address className={styles["address-time"]}>
            Vienna, Austria <time>(March 23 – April 1, 2017)</time>{" "}
            <BasicLink linkPath="https://www.egu2017.eu/">
              https://www.egu2017.eu/
            </BasicLink>
          </address>
          <List listType="dot">
            <ListItem>
              <>
                Kerin, I., Bekić, D., Michalis, P., Šolman, H., Cahill, P.,
                Gilja, G., Pakrashi, V., Lapthorne, J., McKeogh, E., 2017, Flood
                Early Warning in Bridge Management System: from idea to
                implementation.{" "}
              </>
              <BasicLink linkPath="/PDF/EGU2017-2364.pdf">
                EGU2017-2364
              </BasicLink>
            </ListItem>
            <ListItem>
              <>
                Cahill, P., Michalis, P., Šolman, H., Kerin, I., Bekić, D.,
                Pakrashi, V., McKeogh, E., 2017, Development of an intelligent
                hydroinformatic system for real-time monitoring and assessment
                of civil infrastructure.{" "}
              </>
              <BasicLink linkPath="/PDF/EGU2017-2009-1.pdf">
                EGU2017-2009-1
              </BasicLink>
            </ListItem>
            <ListItem>
              <>
                Gilja, G., Valyrakis, M., Michalis, P., Bekić, D., Kuspilić, N.,
                McKeogh, E. 2017, Assessment of bridge abutment scour and
                sediment transport under various flow conditions.{" "}
              </>
              <BasicLink linkPath="/PDF/EGU2017-2008-1.pdf">
                EGU2017-2008-1
              </BasicLink>
            </ListItem>
            <ListItem>
              <>
                Michalis, P., Cahill, P., Bekić, D., Kerin, I., Pakrashi, V.,
                Lapthorne, J., Morais, J., McKeogh, E., 2017, Damage assessment
                of bridge infrastructure subjected to flood-related hazards{" "}
              </>
              <BasicLink linkPath="/PDF/EGU2017-1943-1.pdf">
                EGU2017-1943-1
              </BasicLink>
            </ListItem>
          </List>
        </div>
        <div className={styles["review-container"]}>
          <h3 className={styles["title"]}>
            Joint workshop of COST ACTION TU1402, COST ACTION TU1406 and IABSE
            Working Commission WC1
          </h3>
          <address className={styles["address-time"]}>
            Zagreb, Croatia <time>(March, 2 – 3, 2017)</time>
          </address>
          <List listType="dot">
            <ListItem>
              <>
                Bekić, D., Kerin, I., Michalis, McKeogh, E., P., Cahill, P.,
                Pakrashi, V., 2017, BRIDGE SMS: Intelligent bridge maintenance
                and management system{" "}
              </>
              <BasicLink linkPath="/PDF/TU1406_TU1402_ZAG_Paper_BridgeSMSFINAL1.pdf">
                TU1406_TU1402_ZAG_Paper_BridgeSMS
              </BasicLink>
            </ListItem>
          </List>
        </div>
        <div className={styles["review-container"]}>
          <h3 className={styles["title"]}>
            HydroSenSoft, International Symposium and Exhibition on
            Hydro-Environment Sensors and Software
          </h3>
          <address className={styles["address-time"]}>
            Madrid, Spain<time> (February, 28 – March 3, 2017)</time>{" "}
            <BasicLink linkPath="http://www.ifema.es/hydrosensoft_06/">
              http://www.ifema.es/hydrosensoft_06/
            </BasicLink>
          </address>
          <List listType="dot">
            <ListItem>
              <>
                Michalis, P., Cahill, P., Kerin, I., Šolman, H., Bekić, D.,
                Pakrashi, V., McKeogh, E., 2017, WILD BIRD FOR REAL-TIME
                ASSESSMENT OF HYDRO-HAZARDS ST BRIDGE STRUCTURES.{" "}
              </>
              <BasicLink linkPath="/PDF/Michalis_et_al-HydroSenSoft.pdf">
                Michalis_et_al_HydroSenSoft
              </BasicLink>
            </ListItem>
          </List>
        </div>
        <div className={styles["review-container"]}>
          <h3 className={styles["title"]}>
            Civil Engineering Research in Ireland 2016 (CERI2016)
          </h3>
          <address className={styles["address-time"]}>
            Galway, Ireland <time>(August 29-30 2016) </time>
          </address>
          <List listType="dot">
            <ListItem>
              <>
                Cahill P., Karoumi R., Mathewson A., Pakrashi V., Detection of
                Train Passages during Forced Vibration Testing of Bridge
                Structure using Energy Harvesting Technology{" "}
              </>
              <BasicLink linkPath="/PDF/CERI2016_Cahill_et_al.pdf">
                CERI2016_Cahill_et_al
              </BasicLink>
            </ListItem>
          </List>
        </div>
        <div className={styles["review-container"]}>
          <h3 className={styles["title"]}>
            8th European Workshop On Structural Health Monitoring (EWSHM 2016)
          </h3>
          <address className={styles["address-time"]}>
            Bilbao, Spain <time>(July 5-8 2016) </time>
          </address>
          <List listType="dot">
            <ListItem>
              <>
                Cahill, P., Hanley C., Mathewson, A., Jakšić, V., Pakrashi, V.,
                Effects of Energy Harvesting Potential for Bridge Monitoring
                over its Life-Cycle{" "}
              </>
              <BasicLink linkPath="/PDF/EWSHM2016_Cahill_et_al.pdf">
                EWSHM2016_Cahill_et_al
              </BasicLink>
            </ListItem>
          </List>
        </div>
      </LeftSideContainer>
    </div>
  );
};

export default PeerReviewedPublications;
