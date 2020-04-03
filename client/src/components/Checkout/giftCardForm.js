import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Price } from "./checkout.styles";

export const GiftCardInput = () => {
  return (
    <InputContainer flex={"row"}>
      <Input type="text" placeholder={"Gift card or discount code"} />
      <Price>0</Price>
    </InputContainer>
  );
};

const Input = styled.input`
  margin-top: 25px;
  margin-bottom: 25px;
  width: 60%;
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
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  &: after {
    margin-top: 20px;
    display: block;
    background: #3c3b3b;
    content: "";
    height: 1px;
    width: 100%;
  }
`;
