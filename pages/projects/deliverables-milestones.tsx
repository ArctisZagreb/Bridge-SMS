import React from "react";
import { LeftSideContainer } from "../../components/Container/LeftSideContainer";
import Margin from "../../components/UI/Margin";
import { Table } from "../../components/UI/table/Table";
import { TitleH1 } from "../../components/UI/TitleH1";
import { TitleH3 } from "../../components/UI/TitleH3";
import { DELIVERABLES_TABLE, MILESTONE_TABLE } from "../../DB/TablesDB";

const DeliverablesMilestones = () => {
  return (
    <div>
      <LeftSideContainer>
        <TitleH1>Deliverables & Milestones</TitleH1>
        <TitleH3>List of Deliverables</TitleH3>
        <Table tableDB={DELIVERABLES_TABLE} />
        <Margin marginBottom={20} marginTop={30} />
        <TitleH3>List of Milestones</TitleH3>
        <Table tableDB={MILESTONE_TABLE} />
      </LeftSideContainer>
    </div>
  );
};

export default DeliverablesMilestones;
