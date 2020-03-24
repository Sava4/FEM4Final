import React from "react";
import styled from "styled-components";

import aboutCompany from "./aboutCompany.png";
import {
  mediaMobile,
  mediaTablet
} from "../../../styled-components/media-breakpoints-mixin";

export const AboutCompany = () => {
  return (
    <SectionAbout>
      <SectionAboutTitle>ZARINA - VALUE IS YOU</SectionAboutTitle>
      <SectionAboutWrapper>
        <SectionAboutDesc>
          <Title>
            ZARINA Jewelry House gives you unforgettable emotions in the form of
            jewelry.
          </Title>
          <Subtitle>
            <SubtitleImg>Z</SubtitleImg>
            <SubtitleImgText>
              ZARINA Jewelry House is not just a jewelry brand. It is a powerful
              platform for uniting active women, ZARINA jewelry is a source of
              strength and a tool to unlock the value of every woman.
            </SubtitleImgText>
          </Subtitle>
          <Text>
            A spectacular design that does not violate classic elegance and
            sophistication, the aristocratic nobility of diamonds, avant-garde
            combinations and solo colored stones in a rich palette of colors and
            shades - this is how a fashionable thing is born at all times, which
            emphasizes and enhances the sense of style inherent in a confident
            woman.
          </Text>
        </SectionAboutDesc>
        <SectionAboutImage src={aboutCompany} alt="Having fun at a party" />
      </SectionAboutWrapper>
    </SectionAbout>
  );
};

const SectionAbout = styled.div`
  margin-bottom: 60px;

  ${mediaMobile(`
  margin-bottom: 0;
  `)}
`;
const SectionAboutTitle = styled.div`
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
`;

const SectionAboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mediaMobile(`
flex-direction: column;
align-items: stretch;
justify-content: flex-start;
background: #002d50;
padding-bottom: 42px;
  `)}
`;

const SectionAboutDesc = styled.div`
  width: 784px;
  height: 418px;
  background: #002d50;
  opacity: 0.9;

  ${mediaMobile(`
  height: auto;
  width: auto;
  opacity: 1;
  `)}
`;

const Title = styled.h1`
  margin: 40px 125px 25px 130px;
  font-size: 21px;
  line-height: 30px;
  color: white;

  ${mediaMobile(`
  margin: 20px 20px 0 20px;
  font-size: 18px;
  `)}
`;

const Subtitle = styled.div`
  display: flex;
  margin: 0 76px 20px 130px;

  ${mediaMobile(`
  margin: 20px 20px 0 25px;
  `)}
`;

const SubtitleImg = styled.span`
  margin-right: 25px;
  font-size: 99px;
  color: white;
`;

const SubtitleImgText = styled.span`
  font-size: 14px;
  line-height: 32px;
  color: white;

  ${mediaMobile(`
  font-size: 12px;
  line-height: 25px;
  `)}
`;

const Text = styled.div`
  margin: 0 74px 25px 130px;
  font-size: 14px;
  line-height: 30px;
  color: white;

  ${mediaMobile(`
  margin: 20px 20px 20px 20px;
  font-size: 12px;
  line-height: 25px;
  `)}
`;

const SectionAboutImage = styled.img`
  width: 840px;
  height: 586px;
  object-fit: cover;
  margin-left: -100%;
  ${mediaMobile(`
  width: 100%;
  height: auto;
  margin-left: 0;
  object-fit: contain;
  flex-basis: 271px;
  `)};
`;
