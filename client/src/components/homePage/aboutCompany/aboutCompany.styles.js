import styled from "styled-components";
import { mediaMobile } from "../../../styled-components/MediaBreakpointsMixin";

export const SectionAbout = styled.div`
  margin-bottom: 60px;

  ${mediaMobile(`
  margin-bottom: 0;
  `)}
`;
export const SectionAboutTitle = styled.div`
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
`;

export const SectionAboutWrapper = styled.div`
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

export const SectionAboutDesc = styled.div`
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

export const Title = styled.h1`
  margin: 40px 125px 25px 130px;
  font-size: 21px;
  line-height: 30px;
  color: white;

  ${mediaMobile(`
  margin: 20px 20px 0 20px;
  font-size: 18px;
  `)}
`;

export const Subtitle = styled.div`
  display: flex;
  margin: 0 76px 20px 130px;

  ${mediaMobile(`
  margin: 20px 20px 0 25px;
  `)}
`;

export const SubtitleImg = styled.span`
  margin-right: 25px;
  font-size: 99px;
  color: white;
`;

export const SubtitleImgText = styled.span`
  font-size: 14px;
  line-height: 32px;
  color: white;

  ${mediaMobile(`
  font-size: 12px;
  line-height: 25px;
  `)}
`;

export const Text = styled.div`
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

export const SectionAboutImage = styled.img`
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
