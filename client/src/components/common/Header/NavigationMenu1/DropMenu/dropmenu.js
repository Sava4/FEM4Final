import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const Dropmenu = props => {
  const { dropMenuArrey } = props;

  let categArrey = dropMenuArrey.filter(item => item.parentId !== "null");

  const dropMenu =
    categArrey.length &&
    categArrey.map(({ parentId, name, _id }) => {
      const parentMenu = parentId.toLowerCase();
      const chosenMenu = name.toLowerCase();
      return (
        <DromenuList key={_id}>
          <NavLink to={`/${parentMenu}/${chosenMenu}`}>{name}</NavLink>
        </DromenuList>
      );
    });

  return dropMenu;
};

const DromenuList = styled.li`
  margin-top: 20px;
  width: 100%;
  
  :last-child {
    margin-bottom: 20px;
  }
  & a {
    text-decoration: none;
    font-size: 14px;
    text-transform: none;
  }
`;
