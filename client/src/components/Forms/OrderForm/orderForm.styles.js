import styled from "styled-components";
import arrow from "./arrow.png";
import { mediaTablet } from "../../../styledComponents/MediaBreakpointsMixin";

export const FormWrapper = styled.form`
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #002d50;
  background: #ffffff;
`;

export const CreateAccountTitle = styled.div`
  margin-top: 80px;
  margin-bottom: 50px;
  text-align: center;
`;

export const Content = styled.div`
  font-size: 24px;
  line-height: 40px;
  text-transform: uppercase;
  ${mediaTablet(`
font-size: 16px;
  `)}
`;

export const CreateAccountSubtitle = styled.div`
  margin-bottom: 80px;
  font-size: 14px;
  ${mediaTablet(`
text-align: center;
  `)}
`;

export const GoBackWrapper = styled.div`
  display: flex;
  margin-bottom: 80px;
`;
export const GoBackText = styled.div`
  font-size: 14px;
`;

export const GoBackImage = styled.div`
  width: 15px;
  height: 15px;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: contain;
  color: #80858d;
`;
export const Order = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  width: 98%;
`;
