import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const DropMenu = props => {
  const { dropMenuArray } = props;

  let categoryArray = dropMenuArray.filter(item => item.parentId !== "null");
  const dropMenu =
    categoryArray.length &&
    categoryArray.map(item => {
      const parentMenu = item.parentId.toLowerCase();
      const chosenMenu = item.name.toLowerCase();
      return (
        <DroMenuList key={item._id}>
          <NavLink to={`/${parentMenu}/${chosenMenu}`}>{item.name}</NavLink>
        </DroMenuList>
      );
    });
  return dropMenu;
};

const DroMenuList = styled.div`
  margin-top: 20px;
  width: 100%;
`;
