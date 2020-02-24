import React from "react";
import styled from "styled-components";

export const FormButton = props => {
  return (
    <InputWrapper>
      <Input
        type="submit"
        value={props.value}
        onClick={props.onClick}
        disabled={props.disabled}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 18px 0;
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
`;
