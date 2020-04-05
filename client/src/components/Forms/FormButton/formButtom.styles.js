import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
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
  background: #002d50;
  color: white;
  border: none;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;
