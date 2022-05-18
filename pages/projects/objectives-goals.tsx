import React from "react";
import { LeftSideContainer } from "../../components/Container/LeftSideContainer";
import { Table } from "../../components/UI/table/Table";
import { PROJECT_SCHEDULE_TABLE } from "../../DB/TablesDB";

import { TitleH1 } from "../../components/UI/TitleH1";
import { TitleH3 } from "../../components/UI/TitleH3";
import { ContentText } from "../../components/UI/ContentText";
import { List } from "../../components/UI/List";
import { ListItem } from "../../components/UI/ListItem";
import { TitleH2 } from "../../components/UI/TitleH2";
const ObjectivesGoals = () => {
  return (
    <div>
      <LeftSideContainer>
        <TitleH1>ObjectivesGoals</TitleH1>
        <TitleH3>Objectives and Goals</TitleH3>
        <ContentText>
          Currently comprehensive study and decision process is left on the
          berms of single or a few experts and structure management.
          Facilitating, speeding up and lowering cost of management, decision
          process and planning process can be done by documenting the structure
          history (status, problems, maintenance and construction works),
          structure inspection, monitoring, maintenance, studies and PoA. All
          this could be achieved by developing new methodology and approach
          which will use the newest ICT technologies, computer models and
          monitoring equipment. The proposed system should provide
          infrastructure management and staff all needed information for
          management, decision, maintenance and mitigation in one place and at
          any time.
        </ContentText>
        <List listType="dot">
          <ListItem>
            Updated multi-level prioritization list of all structures (bridges)
            with descriptive statistics
          </ListItem>
          <ListItem>
            General information about the single structure (name and ID, railway
            line, location, structure type, year of construction, directions how
            to get to the structure location, etc.)
          </ListItem>
          <ListItem>
            Priority and current status (recommendations and in case of
            installed monitoring systems real time data from monitoring
            equipment)
          </ListItem>
          <ListItem>Proposed short and mid term works and maintenance</ListItem>
          <ListItem>
            Easy access to all documents about the structure history and future
            plans (bridge inspections, comments, reports, pictures, maintenance,
            construction works, etc)
          </ListItem>
        </List>
        <TitleH2>BRIDGE SMS Main objectives:</TitleH2>
        <List listType="dot">
          <ListItem>
            Document the structure history of bridges(status, problems,
            maintenance and construction works).
          </ListItem>
          <ListItem>
            Developing a new methodology and approach which will use innovative
            ICT technologies, computer models and monitoring equipment.
          </ListItem>
          <ListItem>
            Provide appropriate information for management, decision making,
            maintenance and mitigation in one place and at any time and any
            place.
          </ListItem>
        </List>
        <TitleH2>BRIDGE SMS Key goals</TitleH2>
        <List listType="dot">
          <ListItem>
            To develop standardised methods for bridge scour inspection.
          </ListItem>
          <ListItem>
            To develop standards for bridge assessment and management.
          </ListItem>
          <ListItem>
            To calculate the risk of and manages the potential effects of flood
            events.
          </ListItem>
          <ListItem>
            To develop a database framework which is designed for intuitive use,
            encouraging participation by personnel at all levels within
            management authorities
          </ListItem>
          <ListItem>
            <>
              To develop a system that
              <List>
                <ListItem>
                  collects integrates and processes real-time data at regular
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
            </>
          </ListItem>
          <ListItem>
            Maximum use of new Information and Communications Technology (ICT)
            hardware such as tablets and cloud-based systems for on-site rapid
            communications, data collection and analysis.
          </ListItem>
        </List>
      </LeftSideContainer>
    </div>
  );
};

export default ObjectivesGoals;
