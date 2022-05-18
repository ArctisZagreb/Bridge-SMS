export interface newsInterface {
  id: number;
  title: string;
  date: string;
  author: string;
  shortDescription: string;
  content: [];
}

export const NEWS: newsInterface[] = [
  {
    id: 0,
    title: "BRIDGE SMS Project – CORDIS arcticle “Results in Brief",
    date: "2019-05-28",
    author: "Tin Kulic",
    shortDescription:
      'Article "Results in Brief" published in collaboration with CORDIS on CODIS official website.',
    content: [],
  },
  {
    id: 1,
    title:
      "Delft Software Days 2018, November 5th-16th, 2018, Delft, Netherlands",
    date: "2018-11-30",
    author: "Tin Kulic",
    shortDescription:
      'BRIDGE SMS Team members attended "Delft Software Days 2018" (DSD 2018) from November 7th-9th, 2018.',
    content: [],
  },
  {
    id: 2,
    title: "BRIDGE SMS Training Day in Cork, Ireland, October 31st, 2018",
    date: "2018-11-02",
    author: "Tin Kulic",
    shortDescription:
      "BRIDGE SMS Training Day with the presentation of the Platform and Mobile Application on new Tablets held in Cork, Ireland, October 31st, 2018.",
    content: [],
  },
  {
    id: 3,
    title:
      "BRIDGE SMS on European Road Conference in Dubrovnik, Croatia, October 22nd-24th, 2018",
    date: "2018-10-26",
    author: "Tin Kulic",
    shortDescription:
      "BRIDGE SMS Project was presented on European Road Conference in Dubrovnik, Croatia on October 23rd, 2018.",
    content: [],
  },
  {
    id: 4,
    title:
      "COST TU1406 – Summer School at UCD, July 24th-25th 2018, Dublin, Ireland",
    date: "2018-08-20",
    author: "Tin Kulic",
    shortDescription:
      "BRIDGE SMS Team member attended Summer School in UCD as a part of TU1406 COST ACTION.",
    content: [],
  },
];
