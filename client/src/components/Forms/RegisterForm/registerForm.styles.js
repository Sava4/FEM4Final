import styled from "styled-components";
import {
  mediaMobile,
  mediaTablet
} from "../../../styledComponents/MediaBreakpointsMixin";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #002d50;
  background: #ffffff;

  ${mediaMobile(`
  flex-direction: column;
  align-items: center;
  `)}
`;

export const FormTitle = styled.span`
  margin-top: 70px;
  margin-bottom: 40px;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;

  ${mediaMobile(`
    margin-top: 50px;
    margin-bottom: 40px;
    font-size: 16px;
  `)}
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: -12px;
  font-size: 10px;
  color: #db3d3d;
`;

export const LeftContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-left: 100px;

  ${mediaTablet(`
    margin-left: 60px;
    margin-right: 20px;
  `)}

  ${mediaMobile(`
    width: 85%;
    margin: 0;
  `)}
`;

export const RightContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-right: 100px;

  ${mediaTablet(`
    margin-right: 60px;
    margin-left: 20px;
  `)}

  ${mediaMobile(`
    width: 85%;
    margin: 0;
  `)}
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 40px;

  ${mediaTablet(`
    margin-bottom: 30px;
  `)}

  ${mediaMobile(`
    flex-direction: column;
    align-items: center;
  `)}
`;

export const FormButtonWrapper = styled.div`
  width: 35%;
  margin-bottom: 35px;

  ${mediaMobile(`
  width: 85%;
  margin-bottom: 40px;
  `)}
`;

export const GoBackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  cursor: pointer;
`;

export const GoBackText = styled.span`
  font-size: 14px;
  color: #80858d;
`;
