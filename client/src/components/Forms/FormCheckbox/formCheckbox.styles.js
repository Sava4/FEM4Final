import styled from "styled-components";
import checkBox from "./checkBox.png";
import checkBoxChecked from "./checkBoxChecked.png";
import checkBoxDisable from "./checkBoxDisable.png";
import { mediaMobile } from "../../../styledComponents/MediaBreakpointsMixin";

export const CheckboxLabel = styled.label`
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

export const CheckBoxIcon = styled.span`
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
export const CheckBoxIconDisable = styled.span`
  width: 10px;
  height: 10px;
  margin-right: 5px;
  background-image: url(${checkBoxDisable});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const InputCheckbox = styled.input`
  display: none;
`;
