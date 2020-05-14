import styled from "styled-components";
import {mediaMobile, mediaTablet} from "../../../styledComponents/MediaBreakpointsMixin";

export const FormWrapper = styled.form`
  width: 100%;
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

export const FormTitle = styled.div`
  margin-top: 100px;
  margin-bottom: 30px;
  font-size: 24px;
  text-transform: uppercase;
`;

export const FormSubtitle = styled.div`
  font-size: 14px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;

  ${mediaMobile(`
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  `)}
`;

export const Holder = styled.div`
  width: 25%;
  margin: 0 20px;
  
  ${mediaTablet(`
    width: 30%;
  `)}
  
  ${mediaMobile(`
    width: 80%;
    margin-bottom: 20px;
   `)}
`
