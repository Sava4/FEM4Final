import styled from "styled-components";
import { mediaMobile } from "../../../styledComponents/MediaBreakpointsMixin";

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #002d50;
  background: #ffffff;
`;

export const CreateAccountTitle = styled.div`
  margin-top: 100px;
  margin-bottom: 65px;
  text-align: center;

  ${mediaMobile(`
    margin: 50px 12px 0 12px;
  `)}
`;
export const Text = styled.div`
  font-size: 24px;
  line-height: 40px;
  text-transform: uppercase;

  ${mediaMobile(`
    font-size: 14px;
    line-height: 26px;
    margin-top: 30px;
    text-transform: none;
  `)}
`;

export const Content = styled.div`
  font-size: 24px;
  line-height: 40px;
  text-transform: uppercase;

  ${mediaMobile(`
    font-size: 16px;
    line-height: 24px;
  `)}
`;

export const CreateAccountSubtitle = styled.div`
  margin-bottom: 100px;
  text-align: center;
  font-size: 14px;

  ${mediaMobile(`
    margin: 0 20px 50px 20px;
    line-height: 26px;
  `)}
`;
