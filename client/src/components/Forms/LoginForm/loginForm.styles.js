import styled from "styled-components";
import { mediaMobile } from "../../../styled-components/MediaBreakpointsMixin";

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  border: 1px solid #002d50;
  background: #ffffff;

  ${mediaMobile(`
  flex-direction: column;
  align-items: center;
  `)}
`;

export const FormLogIn = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  margin-right: 70px;
  margin-bottom: 70px;

  ${mediaMobile(`
  width: 80%;
  margin: 0 0 50px 0;
  align-items: center;
  `)}
`;

export const Line = styled.div`
  display: flex;
  align-self: center;
  height: 320px;
  border-right: 1px solid #a7aabb;

  ${mediaMobile(`
  width: 70%;
  height: 1px;
  border-bottom: 1px solid black;
  `)}
`;

export const FormRegister = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  margin-right: 70px;
  margin-left: 70px;
  margin-bottom: 70px;

  ${mediaMobile(`
  width: 80%;
  margin: 0 0 50px 0;
  align-items: center;
  `)}
`;

export const FormTitle = styled.span`
  margin-top: 90px;
  margin-bottom: 15px;
  font-size: 23px;
  text-transform: uppercase;
  letter-spacing: 1px;

  ${mediaMobile(`
  margin: 50px 0 15px 0;
  `)}
`;

export const FormSubtitle = styled.span`
  font-size: 12px;
  letter-spacing: 0.5px;
  margin-bottom: 30px;
`;
export const FormRegisterSubtitle = styled(FormSubtitle)`
  line-height: 30px;
`;

export const CheckboxText = styled.span`
  font-size: 11px;
`;
