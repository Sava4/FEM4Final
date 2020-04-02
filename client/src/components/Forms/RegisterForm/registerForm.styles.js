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
export const FormRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 70px;
  margin-left: 70px;

  ${mediaMobile(`
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-right: 0;
  margin-left: 0;
  `)}
`;

export const FormTitle = styled.span`
  margin-top: 70px;
  margin-bottom: 50px;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;

  ${mediaMobile(`
  margin-top: 50px;
  margin-bottom: 40px;
  `)}
`;

export const ErrorMessage = styled.span`
  font-size: 14px;
  color: red;
`;

export const LeftContent = styled.div`
  width: 50%;
  margin-right: 50px;

  ${mediaMobile(`
  width: 80%;
  margin: 0;
  `)}
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 45px;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid #80858d;
  border-bottom-color: ${props => (props.invalid ? "red" : "#80858D")};
  letter-spacing: 0.5px;
  font-size: 12px;

  :-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 50px #fff !important;
    -webkit-text-fill-color: #999 !important;
    color: #999 !important;
  }

  ::placeholder {
    color: #80858d;
  }

  :focus {
    outline: none;
  }
`;

export const InputPassword = styled(Input)`
  margin-bottom: 5px;
`;

export const InputPasswordWrapper = styled.div`
  margin-bottom: 32px;
`;

export const InputBottomText = styled.div`
  font-size: 8px;
  color: #80858d;
`;

export const RightContent = styled.div`
  width: 50%;
  margin-left: 50px;
  margin-bottom: 20px;

  ${mediaMobile(`
  width: 80%;
  margin: 0;
  `)}
`;

export const ContentWrapper = styled.div`
  display: flex;

  ${mediaMobile(`
  flex-direction: column;
  align-items: center;
  `)}
`;

export const FormButtonWrapper = styled.div`
  width: 40%;
  margin-bottom: 50px;

  ${mediaMobile(`
  width: 80%;
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
