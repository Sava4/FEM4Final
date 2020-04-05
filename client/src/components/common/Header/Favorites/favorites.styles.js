import { NavLink } from "react-router-dom";
import styled from "styled-components";
import favorites from "./favorites.png";
import { mediaMobile } from "../../../../styledComponents/MediaBreakpointsMixin";

export const FavoritesIcon = styled.div`
  width: 19px;
  height: 20px;
  margin-right: 5px;
  background-image: url(${favorites});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const ServicesIcon = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-left: 30px;

  ${mediaMobile(`
    display: none;
  `)}
`;
