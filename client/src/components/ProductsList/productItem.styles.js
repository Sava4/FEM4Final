import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import {
  mediaMobile,
  mediaTablet
} from "../../styled-components/media-breakpoints-mixin";

export const Card = styled(NavLink)`
  display: flex;
  padding-bottom: 3px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 350px;
  text-decoration: none;
  box-sizing: border-box;
  color: #000;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  width: 280px;
  height: 350px;
  text-decoration: none;
  box-sizing: border-box;
  color: #000;
  border: 1px solid #e9ebf5;
  &: hover {
    border: 1px solid #002d50;
  }
  ${mediaTablet(`
  width: 224px;
  align-items: space-between;
`)}
  ${mediaMobile(`
  `)}
   ${props =>
     props.interpretation === "carousel" &&
     css`
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: space-between;
       border: 1px solid rgb(233, 235, 245);
       margin: 5px;
       width: 280px;
       height: 392px;
       ${mediaTablet(`
  width: 250px;
`)}
       ${mediaMobile(`
        width: 250px;
  `)}
   @media (max-width: 480px) {
         width: 250px;
         margin-left: 30px;
       }
     `}
`;
