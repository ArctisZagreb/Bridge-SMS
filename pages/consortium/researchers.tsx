import React from "react";
import { LeftSideContainer } from "../../components/Container/LeftSideContainer";
import { ContentText } from "../../components/UI/ContentText";
import { ImageContainer } from "../../components/UI/ImageContainer";
import Margin from "../../components/UI/Margin";
import { TitleH1 } from "../../components/UI/TitleH1";
import { RESEARCHERS } from "../../DB/RESEARCHERS";
const Researchers = () => {
  return (
    <div>
      <LeftSideContainer>
        <TitleH1>Researchers</TitleH1>
        <Margin marginTop={40} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
        >
          {RESEARCHERS.map((researcher) => {
            return (
              <div key={researcher.id}>
                <ImageContainer marginBottom={10}>
                  <img src={researcher.imagePath} alt={researcher.title} />
                </ImageContainer>
                <ContentText textAlign="center">{researcher.title}</ContentText>
              </div>
            );
          })}
        </div>
      </LeftSideContainer>
    </div>
  );
};

export default Researchers;
