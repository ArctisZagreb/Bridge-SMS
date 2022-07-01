export interface IArticleElement {
  elementType: string;
  content?: string;
  linkText?: string;
  path?: string;
  elementContent?: string;
  images?: any[];
  url?: string;
  description?: string;
}
export interface INewsArticles {
  id: number;
  title: string;
  published: string;
  author: string;
  shortDescription: string;
  articleElements: IArticleElement[];
}
export const NEWSARTICLES: INewsArticles[] = [
  {
    id: 0,
    title: 'BRIDGE SMS Project – CORDIS arcticle "Results in Brief"',
    published: "2019-05-28",
    author: "Tin Kulic",
    shortDescription:
      'Article "Results in Brief" published in collaboration with CORDIS on CODIS official website',
    articleElements: [
      {
        elementType: "text",
        content:
          "By the end of 2018 BRIDGE SMS Project has officially ended after four years of hardworking and providing interesting and innovative developments. In collaboration with European Commission’s Community Research and Development Information Service (CORDIS) the article “Results in Brief” has been published on the official website of CORDIS. This article gives a brief overview of the activities conducted through the developments as well as results accomplished in a 4-year period.",
      },

      {
        elementType: "linkText",
        content: "",
        linkText: "CORDIS_Results_in_Brief",
        path: "https://cordis.europa.eu/article/id/300709-improved-management-maintenance-and-safety-for-bridges",
      },
    ],
  },
  {
    id: 1,
    title:
      "Delft Software Days 2018, November 5th-16th, 2018, Delft, Netherlands",
    published: "2018-11-30",
    author: "Tin Kulic",
    shortDescription:
      'BRIDGE SMS Team members attended "Delft Software Days 2018" (DSD 2018) from November 7th-9th, 2018.',
    articleElements: [
      {
        elementType: "imageGallery",
        images: ["1", "2"],
      },
      {
        elementType: "text",
        content:
          "BRIDGE SMS Team members attended “Delft Software Days 2018” (DSD 2018) from November 7th-9th where they participated in two events: “Delft-FEWS International User Days” and “wflow-Hydrological Modelling”. The latest updates and developments on Delft-FEWS platform were presented during the “Delft-FEWS International User Days” event. During the “wflow-Hydrological Modelling” event the wflow software latest release, ongoing developments, and case studies were presented. Also, this event ended with workshop on how to build your own model in wflow.",
      },
      {
        elementType: "text",
        content:
          "For more details about the event click on the link below to visit official DSD 2018 website.",
      },
      {
        elementType: "linkText",
        content: "",
        linkText: "Delft Software Days 2018",
        path: "https://softwaredays.deltares.nl/2018/index.php/agenda/eventhome",
      },
    ],
  },
  {
    id: 2,
    title: "BRIDGE SMS Training Day in Cork, Ireland, October 31st, 2018",
    published: "2018-11-2",
    author: "Tin Kulic",
    shortDescription:
      "BRIDGE SMS Training Day with the presentation of the Platform and Mobile Application on new Tablets held in Cork, Ireland, October 31st, 2018",
    articleElements: [
      {
        elementType: "imageGallery",
        images: ["1", "2", "3"],
      },
      {
        elementType: "text",
        content:
          "Last Wednesday (October 31st, 2018) BRIDGE SMS Training was held in Cork, Ireland. The first part of the Training was held in Training Centre in Ballincollig where the new BRIDGE SMS Platform along with the Mobile Application for Level 1 Bridge Inspections was presented by BRIDGE SMS partners from ARCTIS and UCC to the Project partners from CCC. The second part of the Training included on-site testing of the Mobile Application on the new tablets. The engineers from CCC used the application for inspecting one single span arch bridge.",
      },
    ],
  },
  {
    id: 3,
    title:
      "BRIDGE SMS on European Road Conference in Dubrovnik, Croatia, October 22nd-24th, 2018",
    published: "2018-09-26",
    author: "Tin Kulic",
    shortDescription:
      "BRIDGE SMS Project was presented on European Road Conference in Dubrovnik, Croatia on October 23rd, 2018.",
    articleElements: [
      {
        elementType: "text",
        content:
          "BRIDGE SMS Project was presented last Tuesday (October 23rd, 2018) on European Road Conference which was held in Dubrovnik, Croatia from October 22nd to October 24th, 2018. The Project ideas, latest developments, and updates were detailed during the “Sectoral Roundtable: Inspecting and Managing Bridge Assets”.",
      },
      {
        elementType: "imageGallery",
        images: ["1"],
      },
      {
        elementType: "linkText",
        content:
          "For more information about the conference, visit its official website",
        linkText: "https://www.irf.global/event/erc18-croatia/",
        path: "https://www.irf.global/event/erc18-croatia/",
      },
    ],
  },
  {
    id: 4,
    title:
      "COST TU1406 – Summer School at UCD, July 24th-25th 2018, Dublin, Ireland",
    published: "2019-08-20",
    author: "Tin Kulic",
    shortDescription:
      "BRIDGE SMS Team member attended Summer School in UCD as a part of TU1406 COST ACTION.",
    articleElements: [
      {
        elementType: "imageGallery",
        images: ["1"],
      },
      {
        elementType: "text",
        content:
          "BRIDGE SMS Team member attended Summer School in University College Dublin as a part of TU1406 COST ACTION Project. The School was held on July 24th-25th with topic “Performance-based assessment of Existing Road Bridges”. The main objective of this Summer School was to spread the latest knowledge and developments acquired by the action in the topic of performance-based assessment of existing road bridges.",
      },

      {
        elementType: "linkText",
        content: "To find out more about the whole Project please visit",
        linkText: "TU1406 COST ACTION Website",
        path: "https://www.tu1406.eu/",
      },
    ],
  },
  {
    id: 5,
    title:
      "BRIDGE SMS Project presented on 13th Days of Croatian Chamber of Civil Engineers conference in Opatija, Croatia, June 14th-16th",
    published: "2018-06-28",
    author: "Tin Kulic",
    shortDescription:
      "BRIDGE SMS Project idea, collaboration and innovations presented on the conference 13th days of Croatian Chamber of civil engineers in Opatija, Croatia.",
    articleElements: [
      {
        elementType: "imageGallery",
        images: ["1", "2"],
      },
      {
        elementType: "text",
        content:
          "BRIDGE SMS Team from CCC, UNIZAG and Arctis presented the BRIDGE SMS Project idea, collaboration and innovations on 13th days of Croatian Chamber of Civil Engineers conference in Opatija, Croatia. First presentation was held by representatives of CCC and UNIZAG on Friday 15th in the morning session – “Collaboration of science and industry on EU projects”. The topic of presentation was “BRIDGE SMS – system for bridge scour management” where the Project idea and collaboration along with the experience of CCC were presented. Second presentation was held by representatives of UNIZAG and Arctis in the afternoon session – “BIM approach in civil engineering”. The topic of presentation was “The implementation of BIM approach in BRIDGE SMS system for bridge management” where the use mobile application for bridge inspections and platform along with the process of generating schematic model of inspected bridge were explained.",
      },
      { elementType: "linkText", content: "", linkText: "", path: "" },
    ],
  },
  {
    id: 6,
    title:
      "BRIDGE SMS platform and tablet application presented to CCC and MaREI, May 30th 2018, Cork, Ireland",
    published: "2018-06-01",
    author: "Tin Kulic",
    shortDescription:
      "ARCTIS presented BRIDGE SMS platform and tablet app to CCC and MaREI engineers",
    articleElements: [
      {
        elementType: "imageGallery",
        images: ["1", "2"],
      },
      {
        elementType: "text",
        content:
          "On 30th May 2018 ARCTIS gave presentation on BRIDGE SMS platform and tablet application for Bridge Inspections to Cork County Council and MaREI engineers and staff. UCC presented results on verification of a new inspection and assessment procedure for Bridge Scour on 101 bridges in Ireland.",
      },
      { elementType: "linkText", content: "", linkText: "", path: "" },
    ],
  },
  {
    id: 7,
    title: "CETRA 2018, Zadar, Croatia, May 17th-19th 2018",
    published: "2018-05-28",
    author: "Tin Kulic",
    shortDescription:
      "BRIDGE SMS Project presented on CETRA 2018 in Zadar, Croatia from May 17th to 19th, 2018",
    articleElements: [
      {
        elementType: "imageGallery",
        images: ["1", "2"],
      },
      {
        elementType: "text",
        content:
          "BRIDGE SMS Project was presented on 5th International Conference on Road and Rail Infrastructure (CETRA 2018) in Zadar, Croatia from May 17th to 19th, 2018. The presentation topic was “BRIDGE SMS – Innovative Solution for Management of Bridges Over Water” in which the idea, progress so far and the following steps of the Project were presented.",
      },
      {
        elementType: "linkText",
        content: "For more information about the Conference, visit",
        linkText: "http://master.grad.hr/cetra/ocs/index.php/cetra5/cetra2018",
        path: "http://master.grad.hr/cetra/ocs/index.php/cetra5/cetra2018",
      },
    ],
  },
  {
    id: 8,
    title: "BRIDGE SMS seminar in Zagreb, Croatia – March 20th, 2018",
    published: "2018-03-24",
    author: "Tin Kulic",
    shortDescription: "",
    articleElements: [
      {
        elementType: "imageGallery",
        images: ["1", "2", "3", "4"],
      },
      {
        elementType: "text",
        content:
          "On March 20th, 2018 BRIDGE SMS seminar was organised in facilities of Croatian authority for water management-Hrvatske vode in Zagreb, Croatia. The seminar was organised by UNIZAG in cooperation with Deltares Institute, Hrvatske vode,  Hrvatsko hidrološko društvo (Croatian society for hydrology) and Hrvatsko društvo za odvodnju i navodnjavanje (Croatian society for drainage and irrigation). More than 90 people from Croatian governmental bodies and agencies, engineering companies and environmental research groups attended the seminar where they were introduced to the topic “Recent developments in flood forecasting systems and the Bandon Flood Forecasting System”. The attendants were introduced to four themes: “Trends and research in flood forecasting systems”, “DelftFEWS: platform, modules, operability, etc.”, The Sava Flood Forecasting and Warning System”, “BRIDGE SMS: The Bandon Flood Forecasting System (Ireland)”.",
      },
    ],
  },
  {
    id: 9,
    title:
      "Presentation of the BRIDGE SMS Project to the Croatian state roads authority-Hrvatske ceste",
    published: "2018-03-10",
    author: "Tin Kulic",
    shortDescription: "",
    articleElements: [
      {
        elementType: "text",
        content:
          "On March 9th, 2018 BRIDGE SMS Project was presented to Hrvatske ceste by BRIDGE SMS project partners UNIZAG and ARCTIS in Zagreb, Croatia. Hrvatske ceste is a limited liability company for management, construction and maintenance of state roads. UNIZAG and ARCTIS presented the idea, goals and progress of the Project. Lastly, the presentation and meeting ended with the discussion for the potential future collaboration with Hrvatske ceste.",
      },
    ],
  },
  {
    id: 10,
    title:
      "Workshop on Flood Forecasting System for bridges in the Bandon catchment",
    published: "2018-03-4",
    author: "Tin Kulic",
    shortDescription:
      "February 27th, Cork, Ireland-Workshop on FFS for bridges in the Bandon River catchment",
    articleElements: [
      {
        elementType: "imageGallery",
        images: ["1", "2"],
      },
      {
        elementType: "text",
        content:
          "On February 27th a workshop on Flood Forecasting System (FFS) for bridges in the Bandon River catchment was organised by the BRIDGE SMS Consortium in Cork, Ireland. A total of 73 people from Irish governmental bodies and agencies, engineering companies and environmental research groups attended the workshop where they were introduced to the Flood Early Warning System for bridges and informed about the BRIDGE SMS Project progress-installation of new rain and water level gauges and the operational FFS.",
      },
    ],
  },
  {
    id: 11,
    title: "BRIDGE SMS Researcher invited to ARCHIBUS Workshop",
    published: "2018-01-26",
    author: "Tin Kulic",
    shortDescription:
      'UNIZAG was invited to give a talk at the "ARCHIBUS" workshop',
    articleElements: [
      {
        elementType: "imageGallery",
        images: ["1"],
      },
      {
        elementType: "text",
        content:
          "UNIZAG was invited to give a talk at the ‘ARCHIBUS‘ workshop organised by ARCTIS on the 26th January 2018 in Zagreb, Croatia. The presentation focused on the role of ICT (Information and Communication Technology) platforms for intelligent transport infrastructure systems.",
      },
    ],
  },
  {
    id: 12,
    title:
      "Bandon Flood Forecasting System says “Hello World” on 6th December 2017",
    published: "2017-12-07",
    author: "Tin Kulic",
    shortDescription:
      "BRIDGE SMS team, lead by Dr. Jan Verkade from Deltares, developed a fully automated Flood Forecasting System for Bandon River catchment",
    articleElements: [
      {
        elementType: "imageGallery",
        images: ["1", "2"],
      },
      {
        elementType: "text",
        content:
          "BRIDGE SMS team, led by Dr. Jan Verkade from Deltares, developed a fully automated Flood Forecasting System for Bandon River catchment in Co. Cork, Ireland. The forecast is issued every 1 hour with a lead time up to 10 days. The system is powered by Delft-FEWS software. Also, it is the latest Flood Forecasting system in Republic of Ireland. Detailed information will follow.",
      },
    ],
  },
  {
    id: 13,
    title: "Visit to Infraestruturas de Portugal",
    published: "2017-11-28",
    author: "Tin Kulic",
    shortDescription:
      "BRIDGE SMS Researchers visited project partner Infraestruturas de Portugal (IP) in Lisbon, Portugal during November 2017.",
    articleElements: [
      {
        elementType: "imageGallery",
        images: ["1"],
      },
      {
        elementType: "text",
        content:
          "BRIDGE SMS Researchers from UNIZAG and UCC visited project partner Infraestruturas de Portugal (IP) in Lisbon, Portugal during November 2017. They presented to IP engineers and management staff recent developments of the project and participated in activities such as tours of IP facilities, including the Underwater Inspections Centre, roundtable discussions on current states of bridge management. The visit was concluded with participation in bridge inspections in Lisbon area with fellow IP engineers.",
      },
      {
        elementType: "imageGallery",
        images: ["1"],
      },
    ],
  },
  {
    id: 14,
    title: "Bridge Scour Inspections – Dobra River, Croatia",
    published: "2017-11-07",
    author: "Tin Kulic",
    shortDescription:
      "BRIDGE SMS team conducted Level 2 bridge scour inspections of 5 bridges on Dobra River.",
    articleElements: [
      {
        elementType: "imageGallery",
        images: ["1", "2", "3"],
      },
      {
        elementType: "text",
        content:
          "BRIDGE SMS Consortium from Faculty of Civil Engineering, University of Zagreb, conducted Level 2 bridge scour inspections of  5 bridges near the city of Ogulin on Dobra River and its tributary Vitunjčica in Croatia on October 30th and 31st, 2017.",
      },
      {
        elementType: "text",
        content:
          "Click on the link below to see some videos made during the inspections.",
      },
      {
        elementType: "linkText",
        content: "",
        linkText:
          "https://www.youtube.com/playlist?list=PL-th6Oq7AlgfI1ShBKQWNnpO2DWrnDhDa",
        path: "https://www.youtube.com/playlist?list=PL-th6Oq7AlgfI1ShBKQWNnpO2DWrnDhDa",
      },
    ],
  },
  {
    id: 15,
    title: "Collaboration with Deltares on FEWS for Bandon River Catchment",
    published: "2017-11-04",
    author: "Tin Kulic",
    shortDescription:
      "Bridge SMS staff has worked with Deltares on development of Flood Early Warning System for Bandon River Catchment.",
    articleElements: [
      {
        elementType: "text",
        content:
          "On October 19th and 20th, BRIDGE SMS staff attended training course in Cork, Ireland with Deltares staff in order to develop a Flood Early Warning System (FEWS) for Bandon River Catchment by using Delft-FEWS software for flood nowcasting and forecasting. During the training a historic simulation and forecast for Bandon River Catchment was conducted based on the data recorded on BIRD and WILD devices, OPW (Office for Public Works) gauges and GFS (Global Forecast System) weather forecast data.",
      },
      {
        elementType: "linkText",
        content: "",
        linkText: "OPW gauging stations",
        path: "http://waterlevel.ie/",
      },
      {
        elementType: "linkText",
        content: "",
        linkText: "Global Forecast System",
        path: "https://www.ncdc.noaa.gov/data-access/model-data/model-datasets/global-forcast-system-gfs",
      },
      {
        elementType: "linkText",
        content: "",
        linkText: "Delft-FEWS",
        path: "https://www.deltares.nl/en/software/flood-forecasting-system-delft-fews-2/",
      },
    ],
  },
  {
    id: 16,
    title: "Meeting with BAMP group in Naas, Ireland",
    published: "2017-10-09",
    author: "Tin Kulic",
    shortDescription:
      "RIDGE SMS consortium attended the 4th meeting with Bridge Asset Management Project group",
    articleElements: [
      {
        elementType: "text",
        content:
          "On September 26th, 2017 BRIDGE SMS consortium attended the 4th meeting with Bridge Asset Management Project group and held a presentation about the latest development in BRIDGE SMS project. Discussion on potential collaboration between BAMP and BRIDGE SMS projects was opened. Furthermore, DTTAS (Department of Transport, Tourism And Sports) officially supported BRIDGE SMS project as a supporting institution.",
      },
    ],
  },
  {
    id: 17,
    title: "WMHE 2017 symposium in Primosten, Croatia",
    published: "2017-10-09",
    author: "Tin Kulic",
    shortDescription:
      "The Bridge SMS project was presented at the 15th International Symposium on Water Management and Hydraulics Engineering – WMHE 2017 which was held in Primošten, Croatia (6-8 September)",
    articleElements: [
      {
        elementType: "text",
        content:
          "BRIDGE SMS project was presented at the 15th International Symposium on Water Management and Hydraulics Engineering – WMHE 2017 which was held in Primošten, Croatia (6th-8th September).",
      },
      {
        elementType: "text",
        content:
          "John Lapthorne introduced the participants about the Cork County Council’s experience and role in the BRIDGE SMS Project. Furthermore, Igor Kerin had a presentation about “Analysis of uncertainties in bridge scour estimation”. On symposium’s final day BRIDGE SMS poster was on display during the poster session.",
      },
      {
        elementType: "imageGallery",
        images: [
          {
            url: "1",
            description:
              "John Lapthorne introduced the participants about the Cork County Council's experience and role in the BRIDGE SMS Project.",
          },
          {
            url: "2",
            description:
              "Igor Kerin had a presentation about “Analysis of uncertainties in bridge scour estimation”.",
          },
          {
            url: "3",
            description:
              "BRIDGE SMS poster was on display during the poster session of the WMHE 2017 symposium.",
          },
        ],
      },
    ],
  },
  {
    id: 18,
    title: "ARCTIS’s presentation to MaREI and Cork County Council",
    published: "2017-10-02",
    author: "Tin Kulic",
    shortDescription: "ARCTIS present project Achievements up to date",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [
          {
            url: "1",
            description:
              "Aug 2017 – ARCTIS present project Achievements up to date",
          },
        ],
      },
      {
        elementType: "text",
        content:
          "On 23rd August 2017 Hrvoje Solman, director of ARCTIS Ltd, gave a presentation on up to date Project achievements (WILD, BIRD, Bridge Inspection App, Bridge management interface) to MaREI and Cork Co.Co, staff.",
      },
    ],
  },
  {
    id: 19,
    title: "BRIDGE SMS Team at replacement of bridge in Co.Cork",
    published: "2017-09-25",
    author: "Tin Kulic",
    shortDescription:
      "Bridge SMS Team at the replacement of Bridge in Co.Cork in August 2017.",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [
          {
            url: "1",
            description:
              "Aug 2017 – BRIDGE SMS Team at replacement of Bridge in Co.Cork",
          },
        ],
      },
      {
        elementType: "video",
        url: "https://www.youtube.com/watch?v=ejjD22gcSvk",
        description: "",
      },
    ],
  },
  {
    id: 20,
    title: "Bridge Information Recording Device (BIRD)",
    published: "2017-09-12",
    author: "Igor Kerin",
    shortDescription:
      "Bridge Information Recording Devices (BIRD) installed on the 28th August 2017.",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [
          {
            url: "1",
            description: "Locations of BIRD devices on Bandon River Catchment",
          },
        ],
      },
      {
        elementType: "imageGallery",
        images: [
          {
            url: "2",
            description: "BIRD device",
          },
        ],
      },
      {
        elementType: "text",
        content:
          "Installation of the BIRD devices at two bridges (Manch and Meelon) on Bandon Catchment was conducted on the 28th August 2017 with the support of Cork County Council (CCC) and BRIDGE SMS Partners. The BIRD devices are recording water levels (contactless) using sonar devices. The BIRD device is developed to provide real-time information on flood levels at the bridge and to issue a warning on possible flooding and scour development around the bridge. The water level monitoring network now comprises of total 7 stations (including EPA and OPW water level stations). The data will be used for providing warning and continuous calibration of the Flood Early Warning System (FEWS).",
      },
    ],
  },
  {
    id: 21,
    title: "Weather monitoring for Bridge safety (WILD)",
    published: "2017-09-12",
    author: "Igor Kerin",
    shortDescription:
      "Weather Information Logging Devices (WILD) installed in May 2017.",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [
          {
            url: "1",
            description: "Locations of WILD devices on Bandon River Catchment",
          },
          { url: "2", description: "WILD device" },
        ],
      },
      {
        elementType: "text",
        content:
          "Two Weather Information Logging Devices for monitoring of precipitation, soil moisture, air temperature and humidity installed successfully. The information from WILD devices will be used for prediction of the flood levels at the BRIDGE SMS pilot bridges at Bandon Catchment, County Cork. The devices are fully operational since 3rd May 2017.",
      },
    ],
  },
  {
    id: 22,
    title: "Bridge Scour and Structural Inspections on Krapina River, Croatia",
    published: "2017-06-25",
    author: "Igor Kerin",
    shortDescription:
      "BRIDGE SMS Consortium conducted LVL 2 Bridge Scour and Structural Inspections on Krapina River in Croatia.",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [
          { url: "1", description: "" },
          { url: "2", description: "" },
        ],
      },
      {
        elementType: "text",
        content:
          "BRIDGE SMS Consortium gathered on June 17th, 2017 and conducted LVL 2 Bridge Scour and Structural Inspections of 5 bridges on Krapina River in Croatia.",
      },
    ],
  },
  {
    id: 23,
    title: "Bridge Scour and Structural Inspections – Bregana, Croatia",
    published: "2017-06-01",
    author: "Igor Kerin",
    shortDescription:
      "BRIDGE SMS practical Workshop on bridge scour and structural inspections in May 2017",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [
          {
            url: "1",
            description:
              "May 2017 – BRIDGE SMS practical Workshop on bridge scour inspections",
          },
        ],
      },
      {
        elementType: "text",
        content:
          "BRIDGE SMS Consortium gathered in Zagreb and conducted Level 1 and Level 2 bridge scour and structural inspections on 5 bridges in Croatia on 18th May 2017.",
      },
    ],
  },
  {
    id: 24,
    title: "EGU 2017, Vienna, Austria, 23rd–28th April 2017",
    published: "2017-06-01",
    author: "Igor Kerin",
    shortDescription:
      "Bridge SMS was represented on 26th April 2017 by Dr. Gordon Gilja and Igor Kerin at the EGU 2017 Conference in Vienna, Austria.",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [
          {
            url: "1",
            description: "Apr 2017 – EGU 2017 Conference, Vienna, Austria",
          },
        ],
      },
      {
        elementType: "text",
        content:
          "The General Assembly 2017 of the European Geosciences Union (EGU) is held at the Austria Center Vienna (ACV) in Vienna, Austria, from 23–28 April 2017. Total 4,849 oral, 11,312 poster, and 1,238 PICO presentations. 649 unique scientific sessions together with 88 short courses and 322 side events created an interesting programme. At the conference, 14,496 scientists from 107 countries participated, of which 53% were under the age of 35 years,",
      },
      {
        elementType: "text",
        content:
          "BRIDGE SMS was represented on 26th April 2017 by Dr. Gordon Gilja and Igor Kerin.",
      },
      {
        elementType: "text",
        content:
          "Dr. Gordon Gilja was presenting a poster titled: “Assessment of bridge abutment scour and sediment transport under various flow conditions”.",
      },
      {
        elementType: "text",
        content:
          "Igor Kerin had a PICO presentation “Flood Early Warning in Bridge Management System: from idea to implementation”. With his presentation, Igor Kerin is a candidate for the Outstanding Student Poster and PICO (OSPP) Awards.",
      },
      { elementType: "linkText", content: "", linkText: "", path: "" },
    ],
  },
  {
    id: 25,
    title: "Bridge Inspections – Bandon River, Ireland",
    published: "2017-05-28",
    author: "Igor Kerin",
    shortDescription:
      "LVL2 Bridge Scour Inspections of 5 bridges on Bandon River",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [
          { url: "1", description: "BRIDGE SMS team on Murragh Bridge" },
          { url: "2", description: "BRIDGE SMS team on Enniskean Bridge" },
        ],
      },
      {
        elementType: "text",
        content:
          "BRIDGE SMS Consortium from University College Cork (UCC), Ireland gathered on 23rd March 2017 and conducted LVL 2 Bridge Scour Inspections of 5 bridges on Bandon River.",
      },
    ],
  },
  {
    id: 26,
    title:
      "IAHR HydroSenSoft conference in Madrid, Spain (28th February – 3rd March 2017)",
    published: "2017-03-02",
    author: "Sean",
    shortDescription:
      'HydroSenSoft - the International Symposium and Exhibition is organized under the auspices of the International Association for Hydro-Environment Engineering and Research (IAHR), through its Experimental Methods and Instrumentation Technical Committee, and in collaboration with IFEMA, the largest trade fair organizer in Spain. As part of the symposium, Igor Kerin presented Bridge SMS paper: "WILD BIRD for Real-Time Assessment of Hydro-Hazards at Bridge Structures" on 2nd March 2017',
    articleElements: [
      {
        elementType: "text",
        content:
          "HydroSenSoft – the International Symposium and Exhibition is organized under the auspices of the International Association for Hydro-Environment Engineering and Research (IAHR), through its Experimental Methods and Instrumentation Technical Committee, and in collaboration with IFEMA, the largest trade fair organizer in Spain. This is the first of the conferences IAHR organises in Madrid in this concept. The conference might expand over the years (it will be every two or three years in future). Around 70 attendees participated the HydroSenSoft 2017 conference.",
      },
      {
        elementType: "text",
        content:
          "HydroSenSoft had two main components: the symposium and the exhibition.",
      },
      {
        elementType: "imageGallery",
        images: [
          {
            url: "1",
            description:
              "Mar 2017 – Igor Kerin presented BRIDGE SMS paper at IAHR HydroSenSoft conference in Madrid, Spain",
          },
        ],
      },

      {
        elementType: "text",
        content:
          "A total of 42 papers and 6 posters were accepted after the peer-reviewing process for the international symposium. The authors came from some 20 countries showing the international interest that this first edition reached. The authors came majority from academia but different representatives of both private and public sectors were also present. Different manufacturers submitted papers to show the applications of their instruments.",
      },
      {
        elementType: "text",
        content:
          "As part of the symposium, Igor Kerin presented BRIDGE SMS paper: “WILD BIRD for Real-Time Assessment of Hydro-Hazards at Bridge Structures” on 2nd March 2017.",
      },
      {
        elementType: "text",
        content:
          "For the exhibition part, seven companies were HydroSenSoft exhibitors. Since HydroSenSoft was held at the same time as the SIGA exhibition (one of the largest exhibitions in the urban water cycle domain) more than 50 manufacturers and/or representatives on water-related technologies were also present in the exhibition hall. The SIGA and HydroSenSoft Exhibitions were visited by over 3,5 thousand visitors during the 3 days.",
      },
    ],
  },
  {
    id: 27,
    title: "BRIDGE SMS Researcher gives talk at University of Glasgow",
    published: "2017-02-20",
    author: "Sean",
    shortDescription:
      'Bridge SMS Marie Curie Fellow Dr Panagiotis Michalis gives talk entitled "Monitoring and Assessment of Hydraulic Vulnerability at Bridge Infrastructure"',
    articleElements: [
      {
        elementType: "imageGallery",
        images: [{ url: "1", description: "" }],
      },
      {
        elementType: "text",
        content:
          "Monitoring and Assessment of Hydraulic Vulnerability at Bridge Infrastructure Speaker: Dr Panagiotis Michalis",
      },
      {
        elementType: "text",
        content:
          "When – where: Thursday 23rd February 2017 – Rankine 630, Infrastructure and Environment Research Division, School of Engineering, University of Glasgow",
      },
      {
        elementType: "text",
        content:
          "Abstract:/n Flood-related hazards are considered one of the main impacts on civil infrastructure due to climate change effects. Of such hazards, flood-induced scour is the leading cause of bridge collapses worldwide and one of the most complex and challenging water flow and erosion phenomena, resulting to structural instability and ultimately catastrophic failures. Scour action is also considered as a major risk for offshore structures as it leads to excessive excavation of the surrounding seabed. Evaluation of scour risk under severe weather events is a particularly challenging issue considering that bed level variations around foundations is very difficult to evaluate in water environment.",
      },
      {
        elementType: "text",
        content:
          "This talk will introduce the “Intelligent Bridge Assessment Maintenance and Management System” EU/FP7 project, which aims to provide a platform to efficiently manage and prevent flood-related structural failures. Bridge failures due to scour process will be discussed alongside with the state-of-art methods that are currently employed to monitor and assess the condition of foundations. The presentation will then focus on the experimental investigation of new sensing techniques, for real-time monitoring of hydro-hazards at structural elements.",
      },
      {
        elementType: "text",
        content:
          "Short-Bio:/nDr Panagiotis Michalis has more than 10 years research and consultancy experience in the assessment of large infrastructure. He is currently a Marie-Curie Research Fellow at the University of Zagreb working at the BRIDGE SMS EU/FP7 project. Prior to this role, he held the position of Research and Knowledge Exchange Associate at the University of Strathclyde, working on the application of non-invasive geophysical methods to assess critical civil infrastructure. He holds a PhD in Structural Health Monitoring (University of Strathclyde) focused on the development of sensing techniques for real-time monitoring of hydro-hazards, an MSc in Geotechnics (Universities of Glasgow & Strathclyde) and a BEng (Hons) in Civil Engineering (ATEITH). Panagiotis research interests lie in the assessment of transportation/energy/hydro-infrastructure using novel monitoring techniques, with particular focus on the impact of shifting environmental conditions on ageing infrastructure systems. During this period, he has been actively involved as a consultant in various infrastructure projects at international level.",
      },
    ],
  },
  {
    id: 28,
    title: "BRIDGE SMS / MaREI Seminar Series",
    published: "2016-11-29",
    author: "Igor Kerin",
    shortDescription:
      "Igor Kerin (UCC) will be presenting “BRIDGE SMS – Bridges in the palm of your hand",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [
          {
            url: "1",
            description:
              "Igor Kerin, MEng C.E. Marie Curie Research Fellow at UCC",
          },
        ],
      },
      {
        elementType: "text",
        content:
          "Today, 29th Nov 2016, from 14:10 to 14:55 Irish time, Igor Kerin (UCC) will be presenting “BRIDGE SMS – Bridges in the palm of your hand”.",
      },
      {
        elementType: "linkText",
        content: "The seminar will be live streamed via link",
        linkText: "https://nuim.adobeconnect.com/marei",
        path: "https://nuim.adobeconnect.com/marei",
      },
    ],
  },
  {
    id: 29,
    title: "BRIDGE SMS Midterm Meeting at UCC, 17th-18th November 2016",
    published: "2016-11-20",
    author: "sean",
    shortDescription: "BRIDGE SMS Midterm Meeting held in Cork, Ireland.",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [{ url: "1", description: "" }],
      },
      {
        elementType: "text",
        content:
          "The Midterm Meeting for the BRIDGE SMS project was held in University College Cork on November 17th- 18th 2016. The meeting was attended by the Project Officer Maria Vili and included presentations from the Principal Investigator Dr. Eamon McKeogh, all seconded and recruited BRIDGE SMS researchers as well as the Scientists in Charge from each partner. Hosted by MaREI in its Beaufort Building headquarters, the meeting included a tour of the LIR National Ocean Test Facility.",
      },
    ],
  },
  {
    id: 30,
    title:
      "BRIDGE SMS Researcher becomes Technical reviewer for the 37th IAHR World Congress 2017",
    published: "2016-10-26",
    author: "Igor Kerin",
    shortDescription: "",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [{ url: "1", description: "" }],
      },
      {
        elementType: "text",
        content:
          "Dr. Panagiotis Michalis – Marie-Curie Research Fellow of BRIDGE SMS project – was invited to become a technical reviewer for the 37th IAHR World Congress 2017 which takes place in Kuala Lumpur, Malaysia (13th-18th August 2017).",
      },
      {
        elementType: "linkText",
        content: "More information about the conference in the following link:",
        linkText: "http://www.iahrworldcongress.org/",
        path: "http://www.iahrworldcongress.org/",
      },
    ],
  },
  {
    id: 31,
    title:
      "BRIDGE SMS participation to ARCTIS workshop (25th October 2016, Zagreb, Croatia)",
    published: "2016-05-28",
    author: "Igor Kerin",
    shortDescription:
      "Dr. Panagiotis Michalis was invited to become a technical reviewer for the 37th IAHR World Congress 2017 in Kuala Lumpur, Malaysia.",
    articleElements: [
      {
        elementType: "text",
        content:
          "Dr. Panagiotis Michalis invited to present BRIDGE SMS project and also participated at the ‘ARCHIBUS‘ workshop organised by ARCTIS on the 25th October 2016 in Zagreb, Croatia. The presentation focused on the importance of data management in structural health monitoring systems applied to civil infrastructure assets.",
      },
      {
        elementType: "imageGallery",
        images: [
          { url: "1", description: "" },
          { url: "2", description: "" },
        ],
      },
    ],
  },
  {
    id: 32,
    title: "Silver Medal award on Arca 2016",
    published: "2016-10-22",
    author: "Igor Kerin",
    shortDescription:
      "BRIDGE SMS Consortium received the Silver Medal award at the 14th International Exhibition of Inventions ARCA 2016.",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [
          { url: "1", description: "" },
          { url: "2", description: "" },
          { url: "3", description: "" },
        ],
      },
      {
        elementType: "text",
        content:
          "BRIDGE SMS Consortium received the Silver Medal award at the 14th International Exhibition of Inventions ARCA 2016 for the following project presentations:",
      },
      {
        elementType: "text",
        content:
          "– ‘Intelligent Solution for Inspection and Management of Bridge Scour Risk’.",
      },
      {
        elementType: "text",
        content:
          "– ‘WILD device (Weather Information Logging Device) – Innovative solution for weather monitoring’",
      },
    ],
  },
  {
    id: 33,
    title: "ARCA 2016 (20th-22nd October 2016, Zagreb, Croatia)",
    published: "2016-10-20",
    author: "Igor Kerin",
    shortDescription:
      "BRIDGE SMS Consortium presented the project and exhibited obtained results and further developments on the 14th International Exhibition of Inventions ARCA 2016",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [
          { url: "1", description: "" },
          { url: "2", description: "" },
          { url: "3", description: "" },
        ],
      },
      {
        elementType: "text",
        content:
          "BRIDGE SMS Consortium – represented by University of Zagreb and MaREI – presented the project and exhibited obtained results and further developments on the 14th International Exhibition of Inventions ARCA 2016 which also included the forum “Innovations – driving force of development”.",
      },
    ],
  },
  {
    id: 34,
    title: "BRIDGE SMS 2nd Workshop (17th-19th Oct 2016, Zagreb, Croatia)",
    published: "2016-10-19",
    author: "Igor Kerin",
    shortDescription:
      "The 2nd Workshop of BRIDGE SMS Consortium was organised by project partner University of Zagreb and carried out in Zagreb, Croatia",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [
          { url: "1", description: "" },
          { url: "2", description: "" },
          { url: "3", description: "" },
        ],
      },
      {
        elementType: "text",
        content:
          "The 2nd Workshop of BRIDGE SMS Consortium was organised by project partner University of Zagreb and carried out in Zagreb, Croatia from 17th to 19th October 2016. Twelve participants from consortium partners (University of Zagreb, MaREI, UCC, Infraestruturas de Portugal and ARCTIS) attended the workshop to discuss current project outcomes and set the ground for further developments in the fore coming months.",
      },
    ],
  },
  {
    id: 35,
    title:
      "BRIDGE SMS Seminar Series – Dr. Sergio Maldonado-Villanueva lecture now available on the BRIDGE SMS youtube channel",
    published: "2016-10-05",
    author: "Igor Kerin",
    shortDescription: "BRIDGE SMS Seminar Series now available on Youtube",
    articleElements: [
      {
        elementType: "text",
        content:
          "Dr. Sergio Maldonado-Villanueva (Stanford University) presentation “Nature-Based Solutions for Coastal Protection: Some Current Challenges and Potential Solutions” from first BRIDGE SMS Seminar Series is now available on the BRIDGE SMS youtube channel:",
      },
      {
        elementType: "video",
        url: "https://www.youtube.com/watch?v=AU4DGx3uKYo",
        description: "",
      },
      { elementType: "linkText", content: "", linkText: "", path: "" },
    ],
  },
  {
    id: 36,
    title:
      "BRIDGE SMS Seminar Series Dr. Sergio Maldonado-Villanueva (Stanford University)",
    published: "2016-09-30",
    author: "Igor Kerin",
    shortDescription: "BRIDGE SMS Seminar Series kick-off.",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [{ url: "1", description: "" }],
      },
      {
        elementType: "text",
        content:
          "As part of the BRIDGE SMS Seminar Series, Dr. Sergio Maldonado-Villanueva (Stanford University) will be presenting “Nature-Based Solutions for Coastal Protection: Some Current Challenges and Potential Solutions”.",
      },
    ],
  },
  {
    id: 37,
    title:
      "Macro-Region Innovation week (26th-30th September 2016, Trieste, Italy)",
    published: "2016-05-28",
    author: "Igor Kerin",
    shortDescription:
      "Dr. Panagiotis Michalis attended the Macro-Region Innovation week in Trieste, Italy",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [
          { url: "1", description: "" },
          { url: "2", description: "" },
          { url: "3", description: "" },
        ],
      },
      {
        elementType: "text",
        content:
          "Dr. Panagiotis Michalis – Marie-Curie Research Fellow of BRIDGE SMS project – was invited to attend the Macro-Region Innovation week organised by European Commission from 26th to 30th September 2016 in Trieste, Italy. The Joint Research Workshop (JRC) focused on Innovation, IP rights & Technology Transfer",
      },
      {
        elementType: "linkText",
        content: "More information in the following link:",
        linkText:
          "https://ec.europa.eu/jrc/en/event/training-course/macro-regional-innovation-week",
        path: "https://ec.europa.eu/jrc/en/event/training-course/macro-regional-innovation-week",
      },
    ],
  },
  {
    id: 38,
    title: "Training at Cork County Council, Cork, Ireland",
    published: "2016-09-15",
    author: "Igor Kerin",
    shortDescription:
      "BRIDGE SMS EU/FP7 consortium provided Training to Cork County Council (CCC) engineers and",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [
          { url: "1", description: "" },
          { url: "2", description: "" },
          { url: "3", description: "" },
          { url: "4", description: "" },
          { url: "5", description: "" },
          { url: "6", description: "" },
        ],
      },
      {
        elementType: "text",
        content:
          "BRIDGE SMS EU/FP7 consortium provided Training to Cork County Council (CCC) engineers and delivered the new ‘Guidelines for Level 1 Bridge Scour Inspections’ document which is expected to substantially improve the scour inspection regimes. Office training was carried out on September 15th, 2016 at Regional Training Centre (Cork, Ireland) followed by visits and practical training at 2 bridge sites with the participation of more than 10 engineers from CCC. Great feedback and outcomes for the project!",
      },
      { elementType: "linkText", content: "", linkText: "", path: "" },
    ],
  },
  {
    id: 39,
    title: "1st BRIDGE SMS Workshop, Cork, Ireland",
    published: "2016-08-24",
    author: "Igor Kerin",
    shortDescription:
      "BRIDGE SMS EU/FP7 consortium workshop was held from August 24-30 2016 at UCC/MaREI, Ringaskiddy, Cork, Ireland.",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [
          { url: "1", description: "" },
          { url: "2", description: "" },
          { url: "3", description: "" },
          { url: "4", description: "" },
          { url: "5", description: "" },
          { url: "6", description: "" },
        ],
      },
      {
        elementType: "text",
        content:
          "BRIDGE SMS EU/FP7 consortium workshop was held from August 24-30 2016 at UCC/MaREI, Ringaskiddy, Cork, Ireland. The event was a great success and focused on developing intelligent decision support tools and smart monitoring systems for climate resilient civil infrastructure systems. BRIDGE SMS team also visited and assessed water-related hazards at bridges over waterways in Ireland. Next meeting is planned to take place in Zagreb (Croatia) during Oct 2016.",
      },
    ],
  },
  {
    id: 40,
    title: "BRIDGE SMS becomes EFAS Partner (August 2016)",
    published: "2016-08-19",
    author: "Igor Kerin",
    shortDescription: "BRIDGE SMS becomes EFAS Partner",
    articleElements: [
      {
        elementType: "text",
        content:
          "BRIDGE SMS are now partners of the European Flood Awareness System (EFAS). EFAS is a European Commission initiative to increase preparedness for riverine floods across Europe which counts over 42 partner organisations across Europe.",
      },
      {
        elementType: "linkText",
        content: "",
        linkText: "https://www.efas.eu/home.html",
        path: "https://www.efas.eu/home.html",
      },
      {
        elementType: "linkText",
        content: "Source",
        linkText:
          "https://ec.europa.eu/jrc/en/scientific-tool/flood-forecasts-european-flood-alerting-system",
        path: "https://joint-research-centre.ec.europa.eu/scientific-tool/flood-forecasts-european-flood-alerting-system_en",
      },
    ],
  },
  {
    id: 41,
    title:
      "Marie Skłodowska-Curie Actions Satellite Event at ESOF in Manchester",
    published: "2016-07-29",
    author: "Igor Kerin",
    shortDescription:
      "Gordon Gilja, Igor Kerin and Sean McAullife presented a BRIDGE SMS research poster on the EuroScience Open Forum Marie Skłodowska-Curie actions satellite event in Manchester, UK.",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [{ url: "1", description: "" }],
      },
      {
        elementType: "text",
        content:
          "BRIDGE SMS team lead by Gordon Gilja, Igor Kerin and Sean McAullife presented a BRIDGE SMS research poster on the EuroScience Open Forum Marie Skłodowska-Curie actions satellite event. Join us in Manchester, United Kingdom, 28 and 29 July 2016.",
      },
      {
        elementType: "linkText",
        content: "The program is displayed on the link below:",
        linkText:
          "http://ec.europa.eu/…/events/year/2016/0728-esof-manchester…",
        path: "https://marie-sklodowska-curie-actions.ec.europa.eu/news-events/events/year/2016/0728-esof-manchester_en.htm",
      },
    ],
  },
  {
    id: 42,
    title:
      "5th International Summer School on Smart Materials & Structures, Trento, Italy",
    published: "2018-07-14",
    author: "Igor Kerin",
    shortDescription:
      "Dr. Panagiotis Michalis presented BRIDGE SMS project at the University of Trento 5th International Summer School on Smart Materials & Structures",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [
          { url: "1", description: "" },
          { url: "2", description: "" },
        ],
      },
      {
        elementType: "text",
        content:
          "Dr. Panagiotis Michalis presented BRIDGE SMS project at the University of Trento 5th International Summer School on Smart Materials & Structures held in Trento, Italy on July 14th-16th 2016.",
      },
      {
        elementType: "linkText",
        content: "More on the event on the link:",
        linkText: "http://events.unitn.it/en/smartstructures2016",
        path: "http://events.unitn.it/en/smartstructures2016",
      },
    ],
  },
  {
    id: 43,
    title: "EWSHM 2016 (European Workshop on Structural Health Monitoring)",
    published: "2018-07-05",
    author: "Igor Kerin",
    shortDescription:
      "BRIDGE SMS paper at EWSHM 2016 (European Workshop on Structural Health Monitoring).",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [{ url: "1", description: "" }],
      },
      {
        elementType: "text",
        content:
          "Dr. Paul Cahill presented his paper “Energy Harvesting for Monitoring Bridges over their Operational Life” in Bilbao, Spain on July 5th-8th 2016.",
      },
    ],
  },
  {
    id: 44,
    title: "BRIDGE SMS at Tech-Connect Live, Dublin, Ireland",
    published: "2018-05-25",
    author: "Igor Kerin",
    shortDescription:
      "Dr. Vikram Pakrashi presented the Development of BRIDGE SMS at TechConnect Live in Dublin",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [
          {
            url: "1",
            description:
              "May 2016 – Bridge SMS at Tech-Connect Live, Dublin, Ireland",
          },
        ],
      },
      {
        elementType: "text",
        content:
          "Dr. Vikram Pakrashi presented the Development of BRIDGE SMS at TechConnect Live in Dublin, Ireland on May 25th 2016.",
      },
      {
        elementType: "text",
        content:
          "TechConnect is the largest conference of its kind in Ireland and it focused on “Investment leading to innovation with the help of technology – which ultimately leads to better business”.",
      },

      {
        elementType: "video",
        description: "",
        url: "https://www.youtube.com/watch?v=B0X6YhCM0QI",
      },
    ],
  },
  {
    id: 45,
    title:
      "BRIDGE SMS at Symposium on Irish Research and Innovation in Marine and Renewable Energy in Galway, Ireland",
    published: "2018-05-05",
    author: "Igor Kerin",
    shortDescription:
      "BRIDGE SMS present at Symposium on Irish Research and Innovation in Galway, Ireland",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [{ url: "1", description: "" }],
      },
      {
        elementType: "text",
        content:
          "Dr. Paul Cahill participated at MaREI Symposium – Research, Development and Innovation in Marine and Renewable Energy in Ireland at NUI Galway, in Galway, Ireland on May 5th-6th.",
      },
      {
        elementType: "linkText",
        content: "",
        linkText: "Website",
        path: "http://www.nuigalway.ie/about-us/news-and-events/news-archive/2016/may2016/symposium-on-irish-research-and-innovation-in-marine-and-renewable-energy-.html",
      },
    ],
  },
  {
    id: 46,
    title: "COST TU1406 – BridgeSpec, Belgrade, Serbia",
    published: "2018-04-01",
    author: "Igor Kerin",
    shortDescription:
      "Igor Kerin, Marie Curie Research Fellow presented a Development of the bridge management system under the project BridgeSMS on the COST TU1406 - Quality specifications for roadway bridges, standardization at a European level (BridgeSpec) workshop and meeting in Belgrade on March 30 - April 1 2016",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [
          { url: "1", description: "" },
          { url: "2", description: "" },
        ],
      },
      {
        elementType: "text",
        content:
          "Igor Kerin, Marie Curie Research Fellow presented a Development of the bridge management system under the project BridgeSMS on the COST TU1406 – Quality specifications for roadway bridges, standardization at a European level (BridgeSpec) workshop and meeting in Belgrade on March 30 – April 1st, 2016.",
      },
      {
        elementType: "text",
        content:
          "Title of the workshop was “An overview of Key Performance Indicators across Europe and Overseas – The main findings from WG1 and other contributions from WG2 and WG3”",
      },
      {
        elementType: "text",
        content:
          "BRIDGE SMS team would like to acknowledge Cost Action TU1406 and the University of Belgrade, Faculty of Civil Engineering for hosting this event, warm welcome and professional organization.Further information can be found on the COST Action TU1406",
      },

      {
        elementType: "linkText",
        content: "Presentation PDF",
        linkText: "pdf-link",
        path: "47-1",
      },
      {
        elementType: "linkText",
        content: "Website",
        linkText: "http://www.tu1406.eu/",
        path: "http://www.tu1406.eu/",
      },
    ],
  },
  {
    id: 47,
    title: "COST TD1207 Meeting in Frankfurt, Germany",
    published: "2018-03-13",
    author: "Igor Kerin",
    shortDescription:
      "Igor Kerin participated on the COST TD1207 Mathematical Optimization in the Decision Support Systems for Efficient and Robust Energy Networks meeting in Frankfurt, Germany on March 13-14 2016",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [
          {
            url: "1",
            description: "Mar 2016 – COST TD1207 Meeting in Frankfurt, Germany",
          },
        ],
      },
      {
        elementType: "text",
        content:
          "BRIDGE SMS lead by Marie Curie Research Fellow Igor Kerin participated on the COST TD1207 Mathematical Optimization in the Decision Support Systems for Efficient and Robust Energy Networks meeting in Frankfurt, Germany on March 13-14 2016.",
      },
      {
        elementType: "linkText",
        content: "More details on",
        linkText: "http://cost-td1207.zib.de",
        path: "http://cost-td1207.zib.de",
      },
    ],
  },
  {
    id: 48,
    title:
      "BRIDGE SMS team with Iceland’s President Ólafur Ragnar Grímsson in Reykjavik, March 2016",
    published: "2018-03-09",
    author: "Igor Kerin",
    shortDescription:
      "MaREI team visited the residence of Iceland's President Ólafur Ragnar Grímsson in Reykjavik, March 2016 as part of COST Action ES1206 3rd workshop",
    articleElements: [
      {
        elementType: "text",
        content:
          "MaREI team visited the residence of Iceland’s President Ólafur Ragnar Grímsson in Reykjavik, March 2016 as part of COST Action ES1206 3rd workshop.",
      },
      {
        elementType: "text",
        content:
          "MaREI Deputy director, PI of the BRIDGE SMS  Dr Eamon McKeogh and BRIDGE SMS Marie Curie Research Fellow Igor Kerin visited the residence of Iceland’s President Ólafur Ragnar Grímsson during the Cost Action ES1206 Advanced Global Navigation Satellite Systems tropospheric products for monitoring severe weather events and climate (GNSS4SWEC) 3rd Workshop from 8th to 10th of March 2016. President Ólafur acknowledged the contribution of Climate change Earth System Science and Environmental Science community in addressing the ongoing global warming process and highlighted an importance of the Renewable Energy as a main source of energy in the lowering of the Carbon emissions into the atmosphere.",
      },
      {
        elementType: "imageGallery",
        images: [{ url: "1", description: "" }],
      },
      {
        elementType: "text",
        content:
          "The Cost Action (ES1206) has a high band with Marine and Renewable Energy energy-based research as a lot of its data is used in wind and wave forecasts, life Cycle and Carbon footprint analysis. Dr. Eamon McKeogh and Igor Kerin are delegates for Ireland onto the Actions (ES1206) Management Committee since 2015/2016. The Action (ES1206) will address new and improved capabilities from concurrent developments in both the GNSS and meteorological communities. GNSS is now an established atmospheric observing system which can accurately sense water vapor, the most abundant greenhouse gas, accounting for 60-70% of the atmospheric warming. For the first time, the synergy of the three GNSS systems (GPS, GLONASS and Galileo) will be used to develop new, advanced tropospheric products, exploiting the full potential of multi-GNSS water vapour estimates on a wide range of temporal and spatial scales, from real-time monitoring and forecasting of severe weather, to climate research. In addition, the action will promote the use of meteorological data in GNSS positioning, navigation, and timing services.",
      },
    ],
  },
  {
    id: 49,
    title: "COST ES1206 4th GNSS4SWEC Workshop and WG/MC",
    published: "2018-03-08",
    author: "Igor Kerin",
    shortDescription:
      "Dr. Eamon McKeogh and Marie Curie Research Fellow Igor Kerin attended COST ES1206 4th GNSS4SWEC Workshop and WG/MC.",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [{ url: "1", description: "Bridge SMS Research poster" }],
      },
      {
        elementType: "text",
        content:
          "As part of COST ES1206 3rd GNSS4SWEC Workshop and WG/MC held from March 8-10 2016, Marie Curie Research Fellow Igor Kerin had two presentations on BRIDGE SMS project and 5 minutes brief National Report highlighting the GNSS-meteorology situation in Ireland and how it relates to the COST Action objectives. Dr. Eamon McKeogh and Igor Kerin had also a BRIDGE SMS Research poster where high interest was shown.",
      },
      {
        elementType: "linkText",
        content:
          "Information on Cost Action ES1206 “GNSS4SWEC – Advanced Global Navigation Satellite Systems tropospheric products for monitoring severe weather events and climate” can be found on their website:",
        linkText: "http://gnss4swec.knmi.nl/",
        path: "http://gnss4swec.knmi.nl/",
      },
    ],
  },
  {
    id: 50,
    title: "BRIDGE SMS Research Poster at SFI visit",
    published: "2015-11-12",
    author: "Igor Kerin",
    shortDescription:
      "BRIDGE SMS poster was presented by Marie Curie Research Fellow Igor Kerin at SFI visit.",
    articleElements: [
      {
        elementType: "text",
        content:
          "Science Foundation Ireland visited MaREI Beaufort Building in Ringaskiddy, Cork during November 12-13th 2015. This was an event of a review of the new Beaufort building and presenting the new staff and ongoing projects. BRIDGE SMS poster was presented by Marie Curie Research Fellow Igor Kerin.",
      },
    ],
  },
  {
    id: 51,
    title:
      "ICASP12, 12th International Conference on Applications of Statistics and Probability in Civil Engineering",
    published: "2015-07-12",
    author: "Igor Kerin",
    shortDescription:
      "BRIDGE SMS poster on display at ICASP12, Vancouver, Canada",
    articleElements: [
      {
        elementType: "imageGallery",
        images: [
          {
            url: "1",
            description:
              "July 2015 – Bridge SMS poster on display at ICASP12, Vancouver, Canada",
          },
        ],
      },
      {
        elementType: "text",
        content:
          "Dr. Vikram Pakrashi presented a BRIDGE SMS research poster at ICASP12, 12th International Conference on Applications of Statistics and Probability in Civil Engineering in Vancouver, Canada on July 12-15 2015",
      },
    ],
  },
  {
    id: 52,
    title:
      "BRIDGE SMS Research Poster at Our Ocean to Wealth Conference, Sea Fest, MaREI Opening of Beaufort building",
    published: "2015-07-10",
    author: "Sean",
    shortDescription:
      "BRIDGE SMS Research Poster at Our Ocean to Wealth Conference in Ringaskiddy, Cork, Ireland on July 10th-11th 2015",
    articleElements: [
      {
        elementType: "text",
        content:
          "BRIDGE SMS Research Poster displayed and presented by Igor Kerin at the MaREI Industry Exhibition Our Ocean to Wealth Conference, Sea Fest, MaREI Opening of Beaufort building, Ringaskiddy, Cork, Ireland on July 10th-11th 2015",
      },
      {
        elementType: "imageGallery",
        images: [{ url: "1", description: "" }],
      },
    ],
  },
  {
    id: 53,
    title: "BRIDGE SMS Kick-Off Meeting held in Dublin, May 2015",
    published: "2015-05-13",
    author: "Sean",
    shortDescription: "BRIDGE SMS Kick-Off Meeting",
    articleElements: [
      {
        elementType: "text",
        content: "",
      },
      {
        elementType: "imageGallery",
        images: [
          { url: "1", description: "" },
          { url: "2", description: "" },
          { url: "3", description: "" },
        ],
      },
    ],
  },
];

const notFoundNews = {
  id: 999,
  title: "Article Not Found",
  published: "",
  author: "",
  shortDescription: "",
  articleElements: [],
};
//Removing quotations from string
const removeQuotes = (stringOfChar: string): string =>
  stringOfChar.replaceAll(/'|"|“/g, "");

export const getNewsByTitle = (title: string): INewsArticles => {
  const foundNews = NEWSARTICLES.find((n) => {
    //Removing quotes from string for comparing purpose
    //-if quote is last char it is removed when using article title as path
    return removeQuotes(n.title) === removeQuotes(title);
  });

  if (foundNews === undefined) return notFoundNews;

  return foundNews;
};
