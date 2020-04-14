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
  display: flex;
  margin-bottom: 100px;
  margin-top: 70px;

  ${mediaMobile(`
  width: 80%;
  flex-direction: column;
  margin-bottom: 40px;
  `)}
`;

export const ButtonCheckout = styled.input`
  padding: 18px 70px;
  margin-left: 22px;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: #002d50;
  color: white;
  border: none;
  cursor: pointer;

  :focus {
    outline: none;
  }

  ${mediaMobile(`
  margin-bottom: 15px;
  margin-left: 0;
  `)}
`;

export const ButtonBackToShopping = styled(ButtonCheckout)`
  padding: 18px 22px;
  background: white;
  color: #002d50;
  border: 1px solid #002d50;
`;
