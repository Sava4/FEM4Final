import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { mediaMobile } from "../../styledComponents/MediaBreakpointsMixin";

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;
  ${props =>
    props.width === "full" &&
    css`
      width: 100%;
    `}
`;
export const Header = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 30px;
  ${props =>
    props.align === "left" &&
    css`
      margin-right: auto;
    `}
`;
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &: after {
    display: block;
    background: #a1a5ad;
    content: "";
    height: 1px;
    width: 100%;
  }
`;
export const TotalContainer = styled.div``;

export const CheckoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 80%;
  margin: 35px auto;
  &:first-child {
    align-items: flex-start;
  }
  ${props =>
    props.spinner === "spinner" &&
    css`
      padding-top: 100px;
    `}
  ${props =>
    props.flexDirection === "column" &&
    css`
      flex-direction: column;
      width: 97%;
    `}
`;
export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 85px;
  margin-bottom: 20px;
  margin-top: 10px;
  width: 100%;
  &: first-child {
    margin-top: 20px;
  }
  ${props =>
    props.height === "auto" &&
    css`
      height: auto;
    `}
`;

export const Img = styled.img`
  height: 84px;
  width: 80px;
  border: 1px solid #e9ebf5;
  &: hover {
    border: 1px solid #002d50;
  }
`;

export const WrapperLink = styled(NavLink)`
  margin-left: 5px;
`;

export const Name = styled.p`
  width: 45%;
  line-height: 1.5;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 14px;
  text-transform: uppercase;
  ${mediaMobile(`
font-size: 12px;
  `)}
`;

export const Price = styled.p`
  &: after {
    content: " UAH";
    font-size: 10px;
  }
`;

export const Total = styled.p`
  margin-left: 73px;
  margin-top: -3px;
  position: absolute;
  border: 1px solid #a7aabb;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  font-size: 10px;
  text-align: center;
  vertical-align: center;
  padding-top: 2px;
  background: #eff5ff;
`;
export const CustomForm = styled.form`
  width: 95%;
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
export const ErrorMessage = styled.span`
  font-size: 10px;
  color: red;
  margin-top: -40px;
  padding-bottom: 45px;
`;
export const ErrorInput = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  display: flex;
  margin-top: -15px;
  margin-bottom: 35px;
  ${props =>
    props.justifyContent === "space-between" &&
    css`
      justify-content: space-between;
      & p {
      font-weight: bold;
      }
      &
    `}
  ${props =>
    props.flexDirection === "column" &&
    css`
      flex-direction: column;
    `}
    ${props =>
      props.icons === "icons" &&
      css`
        margin-bottom: 49px;
        justify-content: center;
      `}
`;

export const Location = styled.div`
  font-size: 12px;
  margin-left: 10px;
  margin-bottom: 5px;
  ${props =>
    props.header === "header" &&
    css`
      margin-bottom: 35px;
      margin-left: 10px;
    `};
  ${props =>
    props.disable === "disable" &&
    css`
      color: #a1a5ad;
    `}
`;

export const PagesHeader = styled.h2`
  margin: 29px auto;
  width: max-content;
  font-size: 24px;
  text-transform: uppercase;
`;
export const Wrap = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`;
