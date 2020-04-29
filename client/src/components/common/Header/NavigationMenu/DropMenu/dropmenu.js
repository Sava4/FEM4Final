import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const DropMenu = props => {
  const { dropMenuArray } = props;

  let categoryArray = dropMenuArray.filter(item => item.parentId !== "null");
  const dropMenu =
    categoryArray.length &&
    categoryArray.map(item => {
      const { parentId, name, _id } = item;
      const parentMenu = parentId.toLowerCase();
      const chosenMenu = name.toLowerCase();
      return (
        <DroMenuList key={_id}>
          <NavLink to={`/${parentMenu}/${chosenMenu}`}>{name}</NavLink>
        </DroMenuList>
      );
    });
  return dropMenu;
};

const DroMenuList = styled.div`
  margin-top: 20px;
  width: 100%;
`;
