import styled from "styled-components";
import login from "./login.png";
import { mediaMobile } from "../../../../styled-components/MediaBreakpointsMixin";

export const LoginIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background-image: url(${login});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const LoginText = styled.span`
  ${mediaMobile(`
    display: none;
  `)}
`;

export const ServicesIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
