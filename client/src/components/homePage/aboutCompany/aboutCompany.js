import React from "react";
import aboutCompany from "./aboutCompany.png";
import {
  SectionAbout,
  SectionAboutWrapper,
  SectionAboutTitle,
  SectionAboutDesc,
  SectionAboutImage,
  Title,
  Subtitle,
  SubtitleImg,
  SubtitleImgText,
  Text
} from "./aboutCompany.styles";

// Change comment

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
