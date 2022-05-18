import React from "react";
import { LeftSideContainer } from "../../components/Container/LeftSideContainer";
import { Table } from "../../components/UI/table/Table";
import { TitleH1 } from "../../components/UI/TitleH1";
import { TitleH3 } from "../../components/UI/TitleH3";
import { PROJECT_SCHEDULE_TABLE } from "../../DB/TablesDB";
import styles from "./../../styles/projects/Projects.module.scss";
const ProjectSchedule = () => {
  return (
    <div className={styles["project-schedule"]}>
      <LeftSideContainer>
        <TitleH1>Project Schedule</TitleH1>
        <TitleH3>Project Schedule</TitleH3>
        <div className={styles["image-container"]}>
          <img
            src="/images/charts/project-schedule.png"
            alt="graph about project schedule"
          />
        </div>
        <Table tableDB={PROJECT_SCHEDULE_TABLE} />
      </LeftSideContainer>
    </div>
  );
};

export default ProjectSchedule;
