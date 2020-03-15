import React from "react";
import styled from "styled-components";

import aboutCompany from "./aboutCompany.png"

export const AboutCompany = () => {
  return (
    <SectionAbout>
      <SectionAboutTitle>ZARINA - VALUE IS YOU</SectionAboutTitle>
      <SectionAboutWrapper>
        <SectionAboutDesc>
          <Title>ZARINA Jewelry House gives you unforgettable emotions in the form of jewelry.</Title>
          <Subtitle>
            <SubtitleImg>Z</SubtitleImg>
            <SubtitleImgText>
              ZARINA Jewelry House is not just a jewelry brand.
              It is a powerful platform for uniting active women,
              ZARINA jewelry is a source of strength and a tool to
              unlock the value of every woman.
            </SubtitleImgText>
          </Subtitle>
          <Text>
            A spectacular design that does not violate classic
            elegance and sophistication, the aristocratic nobility
            of diamonds, avant-garde combinations and solo colored
            stones in a rich palette of colors and shades - this
            is how a fashionable thing is born at all times, which
            emphasizes and enhances the sense of style inherent in a
            confident woman.
          </Text>
        </SectionAboutDesc>
        <SectionAboutImage/>
      </SectionAboutWrapper>
    </SectionAbout>
  )
};

const SectionAbout = styled.div`
  
`
const SectionAboutTitle = styled.div`
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
`

const SectionAboutWrapper = styled.div`
  display: flex;
  justify-content: flex-end; 
  align-items: center;
  position: relative;
`

const SectionAboutDesc = styled.div`
  width: 784px;
  height: 418px;
  position: absolute;
  left: 0;
  background: #002D50;
  opacity: 0.9;
`

const Title = styled.h1`
  margin: 40px 125px 25px 130px;
  font-size: 21px;
  line-height: 30px;
  color: white;
`

const Subtitle = styled.div`
  display: flex;
  margin: 0 76px 20px 130px;
`

const SubtitleImg = styled.span`
  margin-right: 25px;
  font-size: 99px;
  color: white;
`

const SubtitleImgText = styled.span`
  font-size: 14px;
  line-height: 32px;
  color: white;
`

const Text = styled.div`
  margin: 0 74px 25px 130px;
  font-size: 14px;
  line-height: 30px;
  color: white;
`

const SectionAboutImage = styled.div`
  width: 840px;
  height: 586px;
  background-image: url(${aboutCompany});
  background-size: cover;
`