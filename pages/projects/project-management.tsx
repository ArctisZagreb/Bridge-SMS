import React from "react";
import { LeftSideContainer } from "../../components/Container/LeftSideContainer";
import { ContentText } from "../../components/UI/ContentText";
import Margin from "../../components/UI/Margin";
import { Table } from "../../components/UI/table/Table";
import { TitleH1 } from "../../components/UI/TitleH1";
import { TitleH2 } from "../../components/UI/TitleH2";
import { TitleH3 } from "../../components/UI/TitleH3";
import { EXPERTISE_SKILLS_TABLE } from "../../DB/TablesDB";
import styles from "./../../styles/projects/Projects.module.scss";

const ProjectManagement = () => {
  return (
    <div>
      <LeftSideContainer>
        <TitleH1>Project Management</TitleH1>
        <TitleH3>Project Background</TitleH3>
        <ContentText>
          The purpose of the IAPP call is to enhance industry-academia
          collaboration through an objective-driven transfer of knowledge (ToK)
          programme between industry and academia. BRIDGE-SMS will couple
          state-of-the art scientific knowledge in hydrology and river
          engineering with industrial knowledge in infrastructure asset
          management and web-based bridge management systems to develop an open
          source cloud-based intelligent decision support system for the
          assessment and management of the hydraulic vulnerability of bridges
          over water. This will be achieved through the secondment of staff and
          promotion of knowledge and skills transfer between experts (Table 2.1)
          in the fields of hydrology and river engineering from internationally
          renowned experts in University College Cork and the University of
          Zagreb; ARCTIS, a Croatian software company who are recognised experts
          in IT Systems. ARCTIS will develop a bridge-monitoring software
          application to enable transportation professionals to proactively
          monitor, in real-time, their valuable infrastructure to prevent and
          protect against hazardous conditions for private, public, and
          commercial transportation.
        </ContentText>
        <ContentText>
          As the synthesis of the combined knowledge from the involved partners
          can only be achieved through the direct transfers of knowledge, the
          intersectoral secondments lie at the heart of this project. Efficient
          knowledge transfer is a continuous aspect of employment, so one of the
          aims of staff exchange was to maximise the number of long-term
          secondments. The other aim was to maximise the number of trainers at
          the host organisation, as it is optimal to cross-train in order to
          ensure that the knowledge of a particular area is spread among
          multiple people.
        </ContentText>
        <ContentText>
          One of the expected results of cooperation is establishment of a new
          joint-venture SME that would commercialise the new product on the
          European market and eventually create new jobs. The main commercial
          opportunity for the partners relates to the installation, customizing,
          commissioning and maintenance of the BRIDGE-SMS. In order to develop
          an intelligent system which will facilitate inspections, data
          collection, data processing and analysis, and DSS, the knowledge and
          experience on bridge scour residing in the individual organisations
          must be shared with the other partners and transferred specifically to
          the architects of the intelligent system. To be able to design and
          implement software solutions, the software designers depend heavily on
          academia knowledge and other parties in the project. In order to
          develop a novel system the transfer of a range of information and
          experiences between several project partners can only be achieved
          through direct contact and face-to-face interaction between
          individuals. The transfer of bridge scour knowledge between industry,
          academia and software developer is essential for a successful system
          development, and a key mechanism to achieve this is the secondment
          programme of staff between companies and research centres.
        </ContentText>
        <Margin marginBottom={30} />
        <TitleH2>BRIDGE SMS Management and Organisation Structure</TitleH2>
        <div className={styles["image-container"]}>
          <img
            className={styles["full-width"]}
            src="/images/charts/Management-and-Organisation-Structure.webp"
            alt="Management and Organisation Structure"
          />
        </div>
        <TitleH2>BRIDGE SMS Consortium Core Skills and Expertise</TitleH2>
        <div className={styles["image-container"]}>
          <img
            className={styles["full-width"]}
            src="/images/charts/consortium-core-skills.webp"
            alt="consortium core skills"
          />
        </div>

        <Table tableDB={EXPERTISE_SKILLS_TABLE} />
      </LeftSideContainer>
    </div>
  );
};

export default ProjectManagement;
