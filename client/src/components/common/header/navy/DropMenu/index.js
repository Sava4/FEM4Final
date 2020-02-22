import React from "react";

import { mediaMobile } from "../../../../../styled-components/media-breakpoints-mixin";

import styled from "styled-components";
import { Dropmenu } from "./dropmenu";

export const HeaderMenuElem = props => {
  const { categoriesAllData } = props;

  let categArrey = categoriesAllData.filter(item => item.parentId === "null");

  const categList = categArrey.map(item => {
    const menuName = item.name;

    let dropMenuArrey = categoriesAllData.filter(
      item => item.parentId === `${menuName}`
    );
    console.log(dropMenuArrey);
    return (
      <CategoriesLi key={item._id}>
        <Dropmenu dropMenuArrey={dropMenuArrey} />
      </CategoriesLi>
    );
  });
  return <Categories>{categList}</Categories>;
};

const Categories = styled.ul`
  font-size: 14px;
  width: 100vw;
  text-transform: uppercase;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  position: relative;

  ${mediaMobile(`
    display: none;
  `)}
`;

const CategoriesLi = styled.li`
  width: 82px;
  margin-bottom: 30px;
`;
