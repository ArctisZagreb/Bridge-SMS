import React from "react";
import { LeftSideContainer } from "../../components/Container/LeftSideContainer";
import { ContentText } from "../../components/UI/ContentText";
import Margin from "../../components/UI/Margin";
import { Table } from "../../components/UI/table/Table";
import { TitleH1 } from "../../components/UI/TitleH1";
import { PROJECT_DELIVERABLES_TABLE } from "../../DB/TablesDB";
const ProjectDeliverables = () => {
  return (
    <div>
      <LeftSideContainer>
        <TitleH1>Project Deliverables</TitleH1>
        <Table tableDB={PROJECT_DELIVERABLES_TABLE} />
        <Margin marginBottom={10} />
        <ContentText>Nature: Other (O), Prototype (P), Report (R)</ContentText>
        <ContentText>
          Dissemination level: Public (PU), Restricted (RE)
        </ContentText>
      </LeftSideContainer>
    </div>
  );
};

export default ProjectDeliverables;
