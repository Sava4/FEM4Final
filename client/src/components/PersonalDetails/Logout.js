import React from "react";
import styled from "styled-components";

export const UserLogout = props => {
  return <Logout onClick={props.onClick}>Logout</Logout>;
};

const Logout = styled.div`
  width: 60px;
  margin-top: 25px;
  padding-bottom: 2px;
  font-size: 14px;
  text-transform: uppercase;
  color: #80858d;
  border-bottom: 1px solid #80858d;
  cursor: pointer;
`;
