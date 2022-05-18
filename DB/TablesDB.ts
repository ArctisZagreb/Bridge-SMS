import { tableDataInterface } from "./dataTypes";
export const PROJECT_SCHEDULE_TABLE: tableDataInterface = {
  headers: [
    { title: "WP No.", sort: null },
    { title: "Working Package Title", sort: null },
    { title: "Work Package Description", sort: null },
  ],
  data: [
    [
      "1",
      "WP 1 Project Management",
      [
        "T.1.1 Design and maintenance of BRIDGE-SMS Website",
        "T.1.2. Coordinate and sign BRIDGE-SMS Consortium Agreement",
        "T.1.3. Publish BRIDGE-SMS Quality Assurance Manual",
        "T.1.4. Publish Interim Report",
        "T.1.5. Publish Final Project Report",
      ],
    ],
    [
      "2",
      "WP 2 Techical Research",
      [
        "T.2.1. Identification of input bridge and scour data sets",
        "T.2.2. Development of methodologies and tools for Bridge Scour Management System",
        "T.2.3. Development of requirements for Intelligent Decision Support System.",
      ],
    ],
    [
      "3",
      "WP 3 Development of Bridge Scour Management System",
      [
        "T.3.1. Development of Inventory Module.",
        "T.3.2. Development of Scour Inspections Module.",
        "T.3.3. Development of Maintenance and Repair Module.",
        "T.3.4. Development of Monitoring and Predictions Module.",
        "T.3.5. Development of Decision Support Module",
      ],
    ],
    [
      "4",
      "WP 4 Knowledge Transfer and Training",
      [
        "T.4.1. Appointment of Transfer of Knowledge Director",
        "T.4.2 Training Seminar organised by seconded staff in host organisations",
        "T.4.3 On-going training activities and debriefing interviews organized by TOK Director",
        "T.4.4 Organization of internal workshops at key dates upon completion of significant phases of project",
        "T.4.5 Develop sample pilot as a means to educate and train staff-simulator training. The number, type, location of bridges to use as a demo and the functionality of system needs to be determined.",
        "T.4.6 Testing and Operation of Pilot",
        "T.4.7 Pilot reviews",
      ],
    ],
    [
      "5",
      "WP 5 Dissemination and Commercialisation",
      [
        "T.5.1. Protect all IP developed during the BRIDGES-SMS project",
        "T.5.2. Dissemination of the BRIDGES-SMS objectives and results to various stakeholders and audiences.",
        "T.5.3. Contribution towards the development of new standards for the surveying and management of bridge over waterway structures.",
        "T.5.4. Develop an exploitation plan to ensure a high impact for all project results.",
      ],
    ],
  ],
};
export const DELIVERABLES_TABLE: tableDataInterface = {
  headers: [
    { title: "Deliverable No.", sort: null },
    { title: "Deliverable Title", sort: null },
    { title: "Delivery date", sort: null },
  ],
  data: [
    ["D.1.1.", "Bridge SMS Website design & maintenance", "M7"],
    ["D.1.2.", "Bridge SMS Consortium Agreement", "M13"],
    ["D.1.3.", "Bridge SMS Quality Assurance Manual", "M14"],
    ["D.1.4.", "Interim Report", "M24"],
    ["D.1.5.", "Final Project Report", "M48"],
    ["D.2.1.", "Identification of input bridge and scour data sets", "M18"],
    [
      "D.2.2.",
      "Development of methodologies and tools for Bridge Scour Management System",
      "M18",
    ],
    ["D.2.3.", "Development of specifications for Intelligent DSS", "M20"],
    ["D.3.1.", "DSS component development Report", "M24"],
    ["D.3.2.", "DSS Module development Report", "M24"],
    ["D.3.3.", "Bridge SMS DSS system developed", "M24"],
    ["D.3.4.", "Workshop to inform consortium of DSS", "M24"],
    ["D.4.1.", "Best Practice Documentation & Manuals", "M36"],
    ["D.4.2.", "Knowledge Database", "M36"],
    ["D.4.3.", "Operational Pilot with up to 25 bridges", "M36"],
    ["D.5.1.", "Dissemination Plan", "M15"],
    ["D.5.2.", "Publication of technical papers", "M40"],
    ["D.5.3.", "Exploitation Plan", "M48"],
  ],
};
export const MILESTONE_TABLE: tableDataInterface = {
  headers: [
    { title: "Milestone No.", sort: null },
    { title: "Milestone name", sort: null },
    { title: "Delivery date", sort: null },
  ],
  data: [
    ["M.1.1.", "Project Kick-Off Meeting", "M7"],
    ["M.1.2.", "Consortium Agreement Completed", "M13"],
    ["M.1.3.", "Bridge SMS Quality Assurance Manual", "M14"],
    ["M.1.4.", "Final Report", "M24"],
    [
      "M.2.1.",
      "Agreement with End User IR for Deliverables D.2.1 , D.2.2",
      "M18",
    ],
    [
      "M.2.2.",
      "Agreement of DSS specification with End User IR & software developers Nivas",
      "M18",
    ],
    ["M.2.3.", "Interim Report", "M20"],
    ["M.3.1.", "DSS Demonstration", "M24"],
    ["M.3.2.", "Interim Report", "M24"],
    ["M.4.1.", "Establish DSS Pilot", "M26"],
    ["M.4.2.", "Testing & Demonstration of DSS Pilot", "M26"],
    ["M.4.3.", "Interim Report", "M36"],
    ["M.5.1.", "Dissemination Plan", "M36"],
    ["M.5.2.", "Exploitation Plan Development", "M42"],
  ],
};

export const EXPERTISE_SKILLS_TABLE = {
  headers: [
    { title: "Partner", sort: null },
    { title: "Expertise", sort: null },
    { title: "Core skill", sort: null },
  ],
  data: [
    [
      "UCC",
      "Hydraulics and inspections",
      [
        "Bridge and river inspections and surveys",
        "Catchment analysis",
        "Risk analysis, modelling and quantification",
        "Structural engineering, Failure mechanism identification",
        "Bridge foundations, structural characteristics",
      ],
    ],
    [
      "UniZag",
      "Hydraulics and modelling",
      [
        "Hydraulic modelling",
        "Bridge and river inspection",
        "Bridge and river survey processing and analysis",
      ],
    ],
    [
      ["End User", "Cork County Council", "Infraestruturas de Portugal"],
      "Test-bed",
      [
        "Operation of infrastructure network",
        "Routine and special maintenance",
        "Resource management",
        "Health and Safety",
      ],
    ],
    [
      "ARCTIS",
      "Database and Bridge Management System software",
      [
        "Database development",
        "Content Management",
        "Data security design",
        "Installation of bridge management systems",
        "BMS architecture design",
        "Incorporation of external feeds",
      ],
    ],
  ],
};

export const PROJECT_DELIVERABLES_TABLE = {
  headers: [
    { title: "Del. No.", sort: null },
    { title: "Deliverable Title", sort: null },
    { title: "Nature", sort: null },
    { title: "Dissemination level", sort: null },
  ],
  data: [
    ["D.1.1.", "BRIDGE-SMS Website design & maintenance", "O", "PU"],
    ["D.1.2.", "BRIDGE-SMS Consortium Agreement", "O", "RE"],
    ["D.1.3.", "BRIDGE-SMS Quality Assurance Manual", "O", "RE"],
    ["D.1.4.", "Interim Report", "R", "RE"],
    ["D.1.5.", "Final Project Report", "R", "RE"],
    ["D.2.1.", "Identification of input bridge and scour data sets", "O", "PU"],
    [
      "D.2.2.",
      "Development of methodologies and tools for Bridge Scour Management System",
      "O",
      "PU",
    ],
    ["D.2.3.", "Development of specifications for Intelligent DSS", "O", "PU"],
    ["D.3.1.", "DSS component development Report", "R", "RE"],
    ["D.3.2.", "DSS Module development Report", "R", "PU"],
    ["D.3.3.", "BRIDGE-SMS DSS system developed", "O", "RE"],
    ["D.3.4.", "Workshop to inform consortium of DSS", "R", "RE"],
    ["D.4.1.", "Best Practice Documentation & Manuals", "R", "PU"],
    ["D.4.2.", "Knowledge Database", "O", "RE"],
    ["D.4.3.", "Operational Pilot with up to 25 bridges", "O", "RE"],
    ["D.5.1.", "Dissemination Plan", "R", "PU"],
    ["D.5.2.", "Publication of technical papers", "P", "PU"],
    ["D.5.3.", "Exploitation Plan", "O", "PU"],
  ],
};
