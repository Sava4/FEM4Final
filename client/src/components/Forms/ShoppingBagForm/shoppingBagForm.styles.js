import styled from "styled-components";
import { mediaMobile } from "../../../styledComponents/MediaBreakpointsMixin";

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
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
  margin-top: 70px;

  ${mediaMobile(`
  width: 80%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  `)}
`;
