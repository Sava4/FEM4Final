import styled from "styled-components";
import {mediaMobile, mediaTablet} from "../../styledComponents/MediaBreakpointsMixin";

export const Container = styled.div`
  display: flex;
  width: 100%;
  
  ${mediaMobile(`
    display: none;
  `)}
`;

export const Title = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 24px;
  letter-spacing: 0.4px;
  text-align: center;
  text-transform: uppercase;
  
  ${mediaMobile(`
    padding-bottom: 18px;
    margin: 30px 20px;
    border-bottom: 1px solid #A7AABB;
    font-size: 16px;
  `)}
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: 130px;
  
  ${mediaTablet(`
    margin-left: 50px;
  `)}
`;

export const Item = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
  font-size: 14px;
  text-transform: uppercase;
  border-bottom: 1px solid #a7aabb;
  cursor: pointer;
  font-weight: ${props => (props.active ? "bold" : "normal")};
`;


