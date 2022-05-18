import React from "react";

import { LeftSideContainer } from "../../components/Container/LeftSideContainer";
import BasicLink from "../../components/UI/BasicLink";
import { ContentText } from "../../components/UI/ContentText";
import { ImageContainer } from "../../components/UI/ImageContainer";
import Margin from "../../components/UI/Margin";
import { TitleH1 } from "../../components/UI/TitleH1";
const ProjectPartners = () => {
  const imageDescMargin = 10;
  const imageMargin = 20;
  const articleMargin = 30;
  return (
    <div>
      <LeftSideContainer>
        <TitleH1>Project Partners</TitleH1>
        <ImageContainer marginBottom={imageMargin}>
          <TitleH1>University College Cork, MaREI</TitleH1>
          <img
            src="/logos/individualLogos/cork.jpg"
            alt="university college cork logo"
          />
        </ImageContainer>

        <ContentText>
          University College Cork is a leading educational center located in the
          south-west of Ireland with an extremely strong focus on research and
          innovation. The university was founded in 1845 and continuously ranks
          highly on the QS World University Rankings. BRIDGE SMS is being
          managed through MaREI. The SFI MaREI Centre is a cluster of key
          university and industrial partners dedicated to solving the main
          scientific, technical and socio-economic challenges related to marine
          renewable energy. The Centre delivers tailored technological solutions
          to companies through the delivery of its industry-led research
          programme, providing innovative solutions that reduce the time to
          market and reduce costs to a competitive level.
        </ContentText>
        <ContentText>
          The project coordinator, Dr. McKeogh is a Senior Lecturer in the
          Department of Civil and Environmental Engineering and has been
          involved in river engineering for over twenty years. Dr. McKeogh has
          managed over 15 EU funded RTD projects and a Marie Curie Host
          Fellowship in 2002. He was an evaluator for the entire Altener 1
          programme 1993-1997 and provided input and recommendations to European
          Commission for the subsequent Altener 2 (1998-2002) which then became
          Intelligent Energy for Europe. Dr. McKeogh also provided input to the
          EU Green Paper ‘Towards a European Strategy for the Security of Energy
          Supply’ Nov 2000.
        </ContentText>
        <ImageContainer marginBottom={imageDescMargin}>
          <img
            style={{ width: "60%" }}
            src="/logos/individualLogos/ucc-quad.jpg"
            alt="ucc quad building"
          />
        </ImageContainer>
        <ContentText>
          <>Further information can be found at </>
          <BasicLink linkPath="https://www.marei.ie/">www.marei.ie</BasicLink>
          <> & </>
          <BasicLink linkPath="https://www.ucc.ie/en/">www.ucc.ie</BasicLink>
        </ContentText>
        <Margin marginBottom={articleMargin} />
        <ImageContainer marginBottom={imageMargin}>
          <TitleH1>University of Zagreb, Faculty of Civil Engineering</TitleH1>
          <img
            src="/logos/individualLogos/unizag.png"
            alt="university of Zagreb logo"
          />
        </ImageContainer>
        <ContentText>
          The University of Zagreb (1669) is the oldest and biggest university
          in South-Eastern Europe. Ever since its foundation, the University has
          been continually growing and developing and now consists 29 faculties,
          three art academies and the Centre for Croatian Studies. With its
          comprehensive programmes and over 50,000 full-time undergraduate and
          postgraduate students, the University is the strongest teaching
          institution in Croatia. It offers a wide range of academic degree
          courses leading to Bachelor’s, Master’s and Doctoral degrees in the
          following fields: Arts, Biomedicine, Biotechnology, Engineering,
          Humanities, Natural and Social Sciences. it is also a strongly
          research-oriented institution, contributing with over 50 percent to
          the total research output of the country.
        </ContentText>
        <ContentText>
          The Faculty of Civil Engineering (UNIZAG) in Zagreb University is the
          largest civil engineering R&D institution in Croatia in terms of the
          number of employed researchers, publications, past and on-going
          research projects. Dr. Damir Bekic is an associate professor at the
          UNIZAG. He is a Senior River Engineer with in-depth experience in
          bridge scour inspections, scour risk assessments and flood management
          projects in Croatia and the region, and in UK and Ireland.
        </ContentText>
        <ImageContainer marginBottom={imageDescMargin}>
          <img
            style={{ width: "60%" }}
            src="/logos/individualLogos/unizag-building.png"
            alt="university of zagreb building"
          />
        </ImageContainer>
        <ContentText>
          <>Further information can be found at </>

          <BasicLink linkPath="https://www.grad.unizg.hr/en ">
            https://www.grad.unizg.hr/en
          </BasicLink>
          <> or </>
          <BasicLink linkPath="http://www.unizg.hr/homepage/">
            http://www.unizg.hr/homepage/
          </BasicLink>
        </ContentText>
        <Margin marginBottom={articleMargin} />
        <ImageContainer marginBottom={imageMargin}>
          <TitleH1>Cork County Council</TitleH1>
          <img
            src="/logos/individualLogos/ccc.jpg"
            alt="cork county council logo"
          />
        </ImageContainer>
        <ContentText>
          Cork County Council (CCC) has a total of 12,438 km of roads under its
          charge, serving a population of approximately 400,000. As part of
          their portfolio, Cork County Council manage many regional roads and
          local roads which are often prone to flood or hydrology related
          damage. However, their budgets for maintenance and repair are often
          quite limited despite the fact that they host important infrastructure
          with significant consequences of damage. Bridge SMS would provide CCC
          support required to establish appropriate bridge management system
          which would serve their needs, lower the cost of the management and
          increase the efficiency of the management. This would be achieved
          through the transfer of knowledge and by providing CCC with a
          management tool (software) for their assets. CCC would use a developed
          tool and contribute Bridge SMS by providing valuable feedback on their
          experience of using the tool (software). This feedback would be part
          of an iterative process for the improvement of the developed software.
        </ContentText>
        <ContentText>
          Given CCC’s vast and varied road network and need to maximize budgets,
          this makes it an ideal location for a pilot model. CCC are also
          experts in flood management and consequence assessments as well as
          being champions of early warning systems and analytics based risk of
          infrastructure assets.
        </ContentText>
        <ContentText>
          <>Further information can be found at </>
          <BasicLink linkPath="https://www.corkcoco.ie">
            https://www.corkcoco.ie
          </BasicLink>
        </ContentText>
        <Margin marginBottom={articleMargin} />
        <ImageContainer marginBottom={imageMargin}>
          <TitleH1>ARCTIS d.o.o.</TitleH1>
          <img src="/logos/individualLogos/arctis.jpg" alt="arctis logo" />
        </ImageContainer>
        <ContentText>
          ARCTIS was founded in late 2010, by its owner and director Hrvoje
          Solman. The company focuses on services and consulting in the field of
          Information Technology, specifically Business Applications and
          Internet of Things (IoT), Project Management, as well as a
          multidisciplinary field of Facility Management. With the tendency of
          progress, growth and development of the quality of the services
          offered solutions, and employee specialization, ARCTIS currently
          employs 5 people and a number of associates, with an annual turnover
          of approx. 100.000 €.
        </ContentText>
        <ContentText>
          Since 2012, ARCTIS is also an authorized ARCHIBUS business partner,
          one of the leading global solutions for the Enterprise Asset
          Management. ARCTIS offers the following services to the end user:
          implementation of ARCHIBUS solution, per-user customization,
          maintenance and technical support, integration with the related
          systems as well as the development of the new applications and
          expansions of the ARCHIBUS system. In its activities, our team of
          highly qualified and experienced professionals covers all the needs
          for the development and implementation process, as well as the
          development of the electronic devices for monitoring and controlling
          assets (IoT).
        </ContentText>
        <ContentText>
          ARCTIS has exemplary references and success stories in the largest
          companies within the telecommunication (T-HT), pharmaceutical (Merck
          Sharpe & Dohme / MSD), financial (Hypo Alpe Adria Bank, Heta Asset
          Resolution) and currently is also expanding in the infrastructure
          (BRIDGE SMS) sector. By investing in the continuous education and
          further development, ARCTIS strives to be and remain high-quality, and
          highly specialized in the areas of focus and interest of the company.
        </ContentText>
        <ContentText>
          <>Further information can be found at </>
          <BasicLink linkPath="https://www.arctis.hr/">
            https://www.arctis.hr/
          </BasicLink>
        </ContentText>
        <Margin marginBottom={articleMargin} />
        <ImageContainer marginBottom={imageMargin}>
          <TitleH1>Infraestructuras de Portugal</TitleH1>
          <img
            src="/logos/individualLogos/infraestruturas-de-portugal.jpg"
            alt="Infraestructuras de Portugal logo"
          />
        </ImageContainer>
        <ContentText>
          The Infraestructuras de Portugal (INFPO) is the project full partner.
          The Infraestructuras de Portugal are the new body that is charged with
          the management of all roads and rail in Portugal. They come from the
          large infrastructure point of view and will provide information and
          expertise on the rail sector. They will also be important as they can
          provide the experience and data for that region.
        </ContentText>
        <ContentText>
          Portugal and Ireland are in the INTERREG Atlantic Zone along with
          Ireland and therefore they can be a strategic funding partner to
          Ireland for Atlantic Zone calls going forward (INTERREG Atlantic Area
          Programme).
        </ContentText>
        <ContentText>
          <>Further information can be found at </>
          <BasicLink linkPath="http://www.infraestruturasdeportugal.pt/">
            http://www.infraestruturasdeportugal.pt/
          </BasicLink>
        </ContentText>
        <Margin marginBottom={imageMargin} />
      </LeftSideContainer>
    </div>
  );
};

export default ProjectPartners;
