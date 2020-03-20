import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const Dropmenu = props => {
  const { dropMenuArrey } = props;

  let categArrey = dropMenuArrey.filter(item => item.parentId !== "null");
  console.log(dropMenuArrey);
  const dropMenu =
    categArrey.length &&
    categArrey.map(item => {
      console.log(item);
      const parentmMenu = item.parentId.toLowerCase();
      const chosenMenu = item.name.toLowerCase();
      return (
        <DromenuList key={item._id}>
          <NavLink to={`/${parentmMenu}/${chosenMenu}`}>{item.name}</NavLink>
        </DromenuList>
      );
    });

  // const activeStyle = {{styles}}

  return dropMenu;
};

const DromenuList = styled.li`
  margin-top: 20px;
  width: 100%;
  & a {
    text-decoration: none;
    font-size: 14px;
    text-transform: none;
    z-index: 3;
  }
`;
