import React from "react";
import styled from "styled-components";

import checkBox from "./check-box.png";
import checkBoxChecked from "./check-box-checked.png";
import { mediaMobile } from "../../../styled-components/media-breakpoints-mixin";

export const Checkbox = props => {
  return (
    <CheckboxLabel>
      <InputCheckbox type="checkbox" onClick={props.onClick} />
      <CheckBoxIcon />
      {props.children}
    </CheckboxLabel>
  );
};

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 20px;
  font-size: 12px;
  letter-spacing: 0.5px;
  cursor: pointer;

  ${mediaMobile(`
  align-self: flex-start;
  `)}
`;

const CheckBoxIcon = styled.span`
  width: 10px;
  height: 10px;
  margin-right: 5px;
  background-image: url(${checkBox});
  background-size: contain;
  background-repeat: no-repeat;

  input:checked + & {
    background-image: url(${checkBoxChecked});
  }
`;

const InputCheckbox = styled.input`
  display: none;
`;
