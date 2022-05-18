interface navItem {
  id: number;
  path: string;
  name: string;
  active: boolean;
  subDomain?: navItem[];
}

export const navigationItems: navItem[] = [
  {
    id: 0,
    path: "/",
    name: "Home",
    active: true,
  },
  {
    id: 1,
    path: "/news",
    name: "News & Events",
    active: false,
  },
  {
    id: 2,
    path: "#",
    name: "Project",
    active: false,
    subDomain: [
      {
        id: 0,
        path: "/projects/project-schedule",
        name: "Project Schedule",
        active: false,
      },
      {
        id: 1,
        path: "/projects/objectives-goals",
        name: "Objectives & Goals",
        active: false,
      },
      {
        id: 2,
        path: "/projects/deliverables-milestones",
        name: "Deliverables & Milestones",
        active: false,
      },
      {
        id: 3,
        path: "/projects/project-management",
        name: "Project Management",
        active: false,
      },
    ],
  },
  {
    id: 3,
    path: "#",
    name: "FP7-Marie Curie",
    active: false,
    subDomain: [
      {
        id: 0,
        path: "/fp7/program-description",
        name: "Program Description",
        active: false,
      },
    ],
  },
  {
    id: 4,
    path: "#",
    name: "Consortium",
    active: false,
    subDomain: [
      {
        id: 0,
        path: "/consortium/project-partners",
        name: "Project Partners",
        active: false,
      },
      {
        id: 1,
        path: "/consortium/researchers",
        name: "Researchers",
        active: false,
      },
    ],
  },
  {
    id: 5,
    path: "#",
    name: "Collaboration",
    active: false,
    subDomain: [
      {
        id: 0,
        path: "/collaboration/supporting-institutions",
        name: "Supporting Institutions",
        active: false,
      },
      {
        id: 1,
        path: "/collaboration/collaborating-institutions",
        name: "Collaborating Institutions",
        active: false,
      },
    ],
  },
  {
    id: 6,
    path: "#",
    name: "Publications",
    active: false,
    subDomain: [
      {
        id: 0,
        path: "/publications/project-deliverables",
        name: "Project Deliverables",
        active: false,
      },
      {
        id: 1,
        path: "/publications/peer-reviewed-publications",
        name: "Peer-Reviewed Publications",
        active: false,
      },
      {
        id: 2,
        path: "/publications/outreach-materials",
        name: "Outreach Materials",
        active: false,
      },
    ],
  },
  {
    id: 7,
    path: "/contact",
    name: "Contact",
    active: false,
  },
];
