import React from "react";
import { LeftSideContainer } from "../../components/Container/LeftSideContainer";
import BasicLink from "../../components/UI/BasicLink";
import { ContentText } from "../../components/UI/ContentText";
import { ImageContainer } from "../../components/UI/ImageContainer";
import Margin from "../../components/UI/Margin";
import { Table } from "../../components/UI/table/Table";
import { TitleH1 } from "../../components/UI/TitleH1";
import { TitleH2 } from "../../components/UI/TitleH2";
import { TitleH3 } from "../../components/UI/TitleH3";
import { EXPERTISE_SKILLS_TABLE } from "../../DB/TablesDB";

const ProgramDescription = () => {
  return (
    <div>
      <LeftSideContainer>
        <TitleH1>Program Description</TitleH1>
        <ImageContainer>
          <img
            style={{ width: "100%" }}
            src="/images/MarieCurie.jpg"
            alt="Marie Curie fundation"
          />
        </ImageContainer>
        <TitleH3>FP7: the future of European Union research policy</TitleH3>
        <ContentText>
          As part of a €10.8 billion budget for research and innovation agreed
          for 2013, the European Commission announced an €8.1 billion euro
          package of calls for proposals under the EU’s Seventh Framework
          Programme for Research (FP7). This is the final and largest ever
          package of FP7 calls, and is an important part of the Commission’s
          commitment to work for growth and jobs in Europe.
        </ContentText>
        <ContentText>
          The budget and work programme are agreed in 2012 and funding will be
          awarded in 2013 – closing dates for proposals from September 2012.The
          calls address key concerns faced by Europeans where action at EU level
          is essential. €4.8 billion will be invested in thematic areas, with
          specific priorities to preserve oceans and water, better use of raw
          materials, efficient energy, promote efficiency in the processing of
          biological resources, develop smart cities and tackle issues such as
          public sector reform, brain research and anti-microbial resistance.
        </ContentText>
        <ContentText>
          Making Europe a destination for world-class researchers is another key
          priority. The European Research Council will invest over €1.7 billion
          in the best researchers and additional €963 million will support
          mobility through “Marie Curie Actions”.
        </ContentText>
        <ContentText>
          Small and medium-sized enterprises, recognised as vital for
          innovation, are given special incentives to participate with a total
          package of €1.2 billion.
        </ContentText>
        <ContentText>
          <>For more information on FP7 click </>
          <BasicLink linkPath="https://ec.europa.eu/info/research-and-innovation_en">
            HERE
          </BasicLink>
        </ContentText>
        <TitleH3>
          Marie Skłodowska-Curie actions – Research Fellowship Programme
        </TitleH3>
        <ContentText>
          The Marie Skłodowska-Curie actions, named after the double Nobel Prize
          winning Polish- French scientist famed for her work on radioactivity,
          support researchers at all stages of their careers, irrespective of
          nationality. Researchers working across all disciplines, from
          life-saving healthcare to ‘blue-sky’ science, are eligible for
          funding. The MSCA also support industrial doctorates, combining
          academic research study with work in companies, and other innovative
          training that enhances employability and career development. In
          addition to generous research funding, scientists have the possibility
          to gain experience abroad and in the private sector, and to complete
          their training with competences or disciplines useful for their
          careers.
        </ContentText>
        <ContentText>
          <>For more information on MSC Actions click </>
          <BasicLink linkPath="https://marie-sklodowska-curie-actions.ec.europa.eu/">
            HERE
          </BasicLink>
        </ContentText>
        <TitleH3>
          Industry-Academia Partnerships and Pathways (IAPP) -Marie Curie
          Actions
        </TitleH3>
        <ContentText>
          Research and business have to work hand in hand. For their own good
          and for society as a whole. To compete on world markets, Europe’s
          industry needs the fruits of your research. And you need the extra
          resources that industry can put in. That’s why we at Marie Curie
          Actions have been building up Industry-Academia Partnerships and
          Pathways (IAPP). They help public and private research to work
          together. Partners include universities and companies of all shapes
          and sizes. Focussing on joint research projects, IAPPs aim to boost
          skills exchange between the commercial and non-commercial sectors.
        </ContentText>
        <ContentText>
          <>
            For more information on Industry-Academia Partnerships & Pathways
            click{" "}
          </>
          <BasicLink linkPath="https://marie-sklodowska-curie-actions.ec.europa.eu/about-marie-sklodowska-curie-actions">
            HERE
          </BasicLink>
        </ContentText>
      </LeftSideContainer>
    </div>
  );
};

export default ProgramDescription;
