import styled, {css} from "styled-components";

export const InputWrapper = styled.div`
  width: ${props => (props.width ? props.width : "100%")};
  display: flex;
  justify-content: center;
  background: #002d50;
  cursor: pointer;
`;

export const Input = styled.input`
  width: inherit;
  padding: 18px 0;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: ${props => (props.secondary ? "#ffffff" : "#002d50")};
  color: ${props => (props.secondary ? "#000000" : "#ffffff")};
  border: 1px solid #002d50;
  cursor: pointer;
  :focus {
    outline: none;
  }
  ${props =>
    props.display === "none" &&
    css`
      display: none;
    `}
`;
