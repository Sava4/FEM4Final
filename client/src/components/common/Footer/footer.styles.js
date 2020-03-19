import styled from "styled-components";
import headerDesign from "../Header/header-design.png"
import footerArrow from "./footer-arrow.png"
import {mediaMobile} from "../../../styled-components/media-breakpoints-mixin";

//компонент родитель создал, чтобы пробросить пропсами переменную url в запрос
export const LinkToStatic = styled.div`
  text-decoration: none;
`;

export const FooterMain = styled.div`
  height: 11px;
  width: 100%;
  background-image: url(${headerDesign});
  background-size: contain;
`;

export const FooterInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const FooterInfoName = styled.div`
  margin-left: 130px;
  display: flex;
  width: 600px;
  justify-content: space-between;
  justify-items: flex-start;
  font-size: 12px;
  & h4 {
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 14px;
    font-weight: bold;
    
    ${mediaMobile(`
    width: 50%;
    margin-top: 25px;
    margin-bottom: 0;
    `)}
  }
  & ul {
    list-style: none;
    text-align: left;
    margin: 0;
    padding: 0;
    
    ${mediaMobile(`
    display: none;
    `)}
  }
  & li {
    margin-bottom: 16px;
  }
  & a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
  
  ${mediaMobile(`
    margin-left: 20px;
    flex-direction: column;
    `)}
`;

export const InfoContactWrapper = styled.div`
  ${mediaMobile(`
  width: 40%;
  display: flex;
  align-items: baseline;
  `)}
`

export const InfoAboutWrapper = styled.div`
  ${mediaMobile(`
  width: 43%;
  display: flex;
  align-items: baseline;
  `)}
`
export const InfoServiceWrapper = styled.div`
  ${mediaMobile(`
  width: 63%;
  display: flex;
  align-items: baseline;
  `)}
`

export const Arrow = styled.div`
  ${mediaMobile(`
  width: 12px;
  height: 8px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${footerArrow});
  `)}
`

export const FooterInfoSocial = styled.div`
  margin-right: 130px;
  width: 330px;
  font-size: 12px;
  & h4 {
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 14px;
    font-weight: bold;
  }
  & ul {
    list-style: none;
    text-align: left;
    margin: 0;
    padding: 0;
  }
  & li {
    margin-bottom: 16px;
  }
  
  ${mediaMobile(`
  display: none;
  `)}
`;
export const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #002d50;
  width: 100%;
  height: 43px;
  margin-top: 30px;
`;
export const FooterText = styled.div`
  font-size: 12px;
  color: #ffffff;
`;

export const SocialContainer = styled.div`
  display: flex;
  height: 26px;
  margin-top: 30px;
 
  ${mediaMobile(`
  display: flex;
  width: 40%;
  `)}
`;
export const SocialLink = styled.a`
  width: 25px;
  background: url(${props => props.icon}) no-repeat;
  background-size: contain;
`;
