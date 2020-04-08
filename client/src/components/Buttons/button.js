import React from "react";
import styled from "styled-components";


  const InputWrapper = styled.div`
  // width: 40%;
  display: flex;
  justify-content: center;
  // background:${props => props.primary && "black"};
  cursor: pointer;
  height:50px;
`;
const Input = styled.input`
  width: 228px;
  padding: 18px 0;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  // background:${props => props.primary && "white"} ;
  // color:${props => (props.primary ? "black" : "blue")}; 
  border: none;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;
export const Button = props => {
  console.log(props)
  return (
    <InputWrapper
    style={{background: props.primary ? "blue" : "white"}}
    >
      <Input 
      style={{color: props.primary ? "white" : "black",
            background: props.primary ? "#002d50" : "white",
            border: props.primary ? "none" : "1px solid #002D50",
            width: props.width && props.width }}
   
        type="submit"
        value={props.value}
        onClick={props.onClick}
        disabled={props.disabled}
      />
    </InputWrapper>
  );
};



