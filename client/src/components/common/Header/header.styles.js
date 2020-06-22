import styled from "styled-components";
import headerDesign from "./headerDesign.png";
import { mediaMobile } from "../../../styledComponents/MediaBreakpointsMixin";

export const Container = styled.div``;

export const Line = styled.div`
  background-image: url(${headerDesign});
  background-size: cover;
  height: 11px;
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin: 30px 0 40px 0;

  ${mediaMobile(`
    border-bottom: 1px solid black;
    padding-bottom: 20px;
    margin-top: 20px;
    margin-bottom: 0;
  `)}
`;

export const HeaderIconWrapper = styled.div`
  display: flex;
`;

export const Categories = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 30px;

  ${mediaMobile(`
    display: none;
  `)}
`;
