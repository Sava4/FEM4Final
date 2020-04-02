import styled from "styled-components";
import {
  mediaMobile,
  mediaTablet
} from "../../../styledComponents/MediaBreakpointsMixin";
import prive from "./Prive.png";
import melanka from "./Melanca.png";
import aultra from "./Aultra.png";

export const Collections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`;
export const CollectionsTitle = styled.div`
  font-size: 24px;
  margin-bottom: 30px;
  margin-top: 100px;
`;

export const CollectionsItemWrapper = styled.div`
  display: flex;
`;

export const CollectionsItemPrive = styled.div`
  cursor: pointer;
  ${mediaMobile(`
  display: none;
  `)}
`;
export const CollectionsItemMelenka = styled.div`
  cursor: pointer;
`;

export const CollectionsItemAultra = styled.div`
  cursor: pointer;
  ${mediaTablet(`
  display: none;
  `)}

  ${mediaMobile(`
  display: none;
  `)}
`;

export const PriveImage = styled.div`
  width: 360px;
  height: 466px;
  background-image: url(${prive});
  background-size: cover;
`;
export const MelankaImage = styled.div`
  width: 360px;
  height: 466px;
  margin-left: 25px;
  margin-right: 25px;
  background-image: url(${melanka});
  background-size: cover;

  ${mediaTablet(`
  margin-right: 0;
  `)}
  ${mediaMobile(`
  margin: 0;
  `)}
`;
export const AultraImage = styled.div`
  width: 360px;
  height: 466px;
  background-image: url(${aultra});
  background-size: cover;
`;

export const ImageDesc = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
`;
