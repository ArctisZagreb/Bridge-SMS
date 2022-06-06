import React from "react";
import { LeftSideContainer } from "../../components/Container/LeftSideContainer";
import BasicLink from "../../components/UI/BasicLink";
import { ContentText } from "../../components/UI/ContentText";
import { ImageContainer } from "../../components/UI/ImageContainer";
import { TitleH1 } from "../../components/UI/TitleH1";
const SupportingInstitutions = () => {
  const imageBottomMargin = 10;
  return (
    <div>
      <LeftSideContainer>
        <TitleH1>Supporting Institutions</TitleH1>
        <ImageContainer marginBottom={imageBottomMargin}>
          <img
            src="/logos/individualLogos/Dublin_City_Council_Logo.webp"
            alt="Dublin City Council logo"
          />
        </ImageContainer>
        <ContentText>
          <>
            Dublin City Council is the democratically elected body that governs
            Dublin City. This is the largest Local Authority in Ireland. Visit
            its website by clicking on the picture above or on the link{" "}
          </>

          <BasicLink linkPath=" http://www.dublincity.ie/">
            http://www.dublincity.ie/
          </BasicLink>
        </ContentText>
        <ImageContainer marginTop={40} marginBottom={imageBottomMargin}>
          <img
            src="/logos/individualLogos/South_Dublin_County_Council_logo.png"
            alt="South Dublin County Council Logo"
          />
        </ImageContainer>
        <ContentText>
          <>
            For information about South Dublin County Council, visit its website
            by clicking on the image above or on the link{" "}
          </>

          <BasicLink linkPath="http://www.sdcc.ie/services">
            http://www.sdcc.ie/services
          </BasicLink>
        </ContentText>
        <ImageContainer marginTop={40} marginBottom={imageBottomMargin}>
          <img
            src="/logos/individualLogos/DTTAS_logo.webp"
            alt="Department of Transport Ireland Logo"
          />
        </ImageContainer>
        <ContentText>
          <>
            The Department of Transport, Tourism and Sport was established in
            2011. It has a key role in delivering highly critical aspects of
            Ireland’s economic activity including further development of their
            transport infrastructure and services and the support and
            enhancement of our significant tourism and sports sectors. Visit its
            website by clicking on the image above or on the link{" "}
          </>

          <BasicLink linkPath="http://www.dttas.ie/">
            http://www.dttas.ie/
          </BasicLink>
        </ContentText>
        <ImageContainer marginTop={30} marginBottom={imageBottomMargin}>
          <img
            src="/logos/individualLogos/Minho_logo.jpeg"
            alt="University of Minho Logo"
          />
        </ImageContainer>
        <ContentText>
          <>
            University of Minho is a Public Foundation governed by private law,
            under the legal Regime of Higher Education Institutes.​​​​​ The
            University’s mission is to create, spread and put knowledge into
            application, with free thinking and pluralism as its core values.
            Visit its website by clicking on the image above or on the link{" "}
          </>

          <BasicLink linkPath="https://www.uminho.pt/EN">
            https://www.uminho.pt/EN
          </BasicLink>
        </ContentText>
        <ImageContainer marginTop={30} marginBottom={imageBottomMargin}>
          <img
            src="/logos/individualLogos/Deltares_logo.webp"
            alt="Deltares independent institute for applied research in the field of water and subsurface Logo"
          />
        </ImageContainer>
        <ContentText>
          <>
            Deltares is an independent institute for applied research in the
            field of water and subsurface. Throughout the world, they work on
            smart solutions, innovations and applications for people,
            environment and society. Their main focus is on deltas, coastal
            regions and river basins. Managing these densely populated and
            vulnerable areas is complex, which is why they work closely with
            governments, businesses, other research institutes and universities
            at home and abroad. Visit its website by clicking on the image above
            or on the link{" "}
          </>

          <BasicLink linkPath="https://www.deltares.nl/en/">
            https://www.deltares.nl/en/
          </BasicLink>
        </ContentText>
      </LeftSideContainer>
    </div>
  );
};

export default SupportingInstitutions;
