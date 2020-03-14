import React from "react";
import styled from "styled-components";

import aboutCompany from "./aboutCompany.png"

export const AboutCompany = () => {
  return (
    <SectionAbout>
      <SectionAboutTitle>ZARINA - VALUE IS YOU</SectionAboutTitle>
      <SectionAboutWrapper>
        <SectionAboutDesc>

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
  background: #002D50;
  opacity: 0.9;
  position: absolute;
  left: 0;
`

const SectionAboutImage = styled.div`
  width: 840px;
  height: 586px;
  background-image: url(${aboutCompany});
  background-size: cover;
`