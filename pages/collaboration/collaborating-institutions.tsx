import React from "react";
import { LeftSideContainer } from "../../components/Container/LeftSideContainer";
import BasicLink from "../../components/UI/BasicLink";
import { ContentText } from "../../components/UI/ContentText";
import { ImageContainer } from "../../components/UI/ImageContainer";
import { TitleH1 } from "../../components/UI/TitleH1";

const CollaboratingInstitutions = () => {
  const imageBottomMargin = 10;
  return (
    <div>
      <LeftSideContainer>
        <TitleH1>Collaborating Institutions</TitleH1>
        <ImageContainer marginBottom={imageBottomMargin}>
          <img
            src="/logos/individualLogos/Met_Eireann.png"
            alt="Met Eirann logo"
          />
        </ImageContainer>
        <ContentText>
          <>
            Met Éireann, Ireland’s National Meteorological Service, is a line
            division of the Department of Housing, Planning, Community and Local
            Government and is the leading provider of weather information and
            related services in the State. Its mission is to monitor, analyse
            and predict Ireland’s weather and climate and to provide a range of
            high quality meteorological and related information to the public
            and to specific customers. Visit its website by clicking on the
            image above or on the link{" "}
          </>

          <BasicLink linkPath="http://www.met.ie/default.asp">
            http://www.met.ie/default.asp
          </BasicLink>
        </ContentText>
        <ImageContainer marginBottom={imageBottomMargin}>
          <img
            src="/logos/individualLogos/OPW_Ireland.png"
            alt="OPW Ireland Logo"
          />
        </ImageContainer>
        <ContentText>
          <>
            The OPW is a service organisation. Their ethos is to be client
            focused, to ensure timely delivery of services and to provide value
            for money. Their remit covers two main areas – Estate Portfolio
            Management including Heritage Services and Flood Risk Management
            (all areas are supported by Corporate Services). Visit its website
            by clicking on the image above or on the link{" "}
          </>

          <BasicLink linkPath="https://www.opw.ie/en/index.html">
            https://www.opw.ie/en/index.html
          </BasicLink>
        </ContentText>
        <ImageContainer marginTop={40} marginBottom={imageBottomMargin}>
          <img
            src="/logos/individualLogos/ECMWF_logo.png"
            alt="OPW Ireland Logo"
          />
        </ImageContainer>
        <ContentText>
          <>
            The European Centre for Medium-Range Weather Forecasts (ECMWF) is an
            independent intergovernmental organisation supported by 34 states.
            ECMWF is both a research institute and a 24/7 operational service,
            producing and disseminating numerical weather predictions to its
            Member States. This data is fully available to the national
            meteorological services in the Member States. Visit its website by
            clicking on the image above or on the link{" "}
          </>

          <BasicLink linkPath="https://www.ecmwf.int/">
            https://www.ecmwf.int/
          </BasicLink>
        </ContentText>
        <ImageContainer marginTop={30} marginBottom={imageBottomMargin}>
          <img
            src="/logos/individualLogos/EPA_logo.png"
            alt="OPW Ireland Logo"
          />
        </ImageContainer>
        <ContentText>
          <>
            The Environmental Protection Agency has wide range of functions, and
            its primary responsibilities are: environmental licensing;
            enforcement of environmental law; environmental planning, education
            and guidance; monitoring, analysing and reporting on the
            environment; regulating Ireland’s greenhouse gas emissions;
            environmental research development; strategic environmental
            assessment; waste management and radiological protection. Visit its
            website by clicking on the image above or on the link{" "}
          </>

          <BasicLink linkPath=" https://www.epa.ie">
            https://www.epa.ie
          </BasicLink>
        </ContentText>
      </LeftSideContainer>
    </div>
  );
};

export default CollaboratingInstitutions;
