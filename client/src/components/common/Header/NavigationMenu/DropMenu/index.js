import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { mediaMobile } from "../../../../../styledComponents/MediaBreakpointsMixin";
import { DropMenu } from "./dropmenu";

export const HeaderMenuElem = props => {
  const { categoriesAllData } = props;
  const [dropMenuState, setDropMenuState] = useState([]);

  console.log(categoriesAllData.filter(item => item.parentId === "null"));
  
  useEffect(() => {
    const menu = categoriesAllData
      .filter(item => item.parentId === "null")
      .map(item => {
        return {
          menuName: item.id,
          isOpen: false
        };
      });

    setDropMenuState(menu);
  }, [categoriesAllData]);

  const openDropMenu = category => {
    const newDropMenu = dropMenuState.map(item => {
      const { menuName, isOpen } = item;
      return {
        menuName,
        isOpen: item === category ? !isOpen : false
      };
    });
    setDropMenuState(newDropMenu);
  };

  const hideDropmenu = () => {
    const newDropMenu = dropMenuState.map(item => {
      const { menuName, isOpen } = item;
      return {
        menuName,
        isOpen: false
      };
    });
    setDropMenuState(newDropMenu);
  };

  const categoryList = dropMenuState.map(item => {
    const dropMenuArray = categoriesAllData.filter(
      child => child.parentId === item.menuName
    );

    return (
      <div key={item.menuName}>
        {item.isOpen ? (
          <CategoryDropBackground onMouseLeave={hideDropmenu} />
        ) : null}
        <Category>
          <CategoryHeader onClick={() => openDropMenu(item)}>
            {item.menuName}
          </CategoryHeader>
          {item.isOpen ? (
            <CategoryDropHolder onMouseLeave={hideDropmenu}>
              <DropMenu dropMenuArray={dropMenuArray} />
            </CategoryDropHolder>
          ) : null}
        </Category>
      </div>
    );
  });

  return <Categories>{categoryList}</Categories>;
};

const Categories = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  cursor: pointer;
`;

const CategoryDropBackground = styled.div`
  min-height: 180px;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 2;
  background: white;
  border-bottom: 1px solid black;
  border-top: 1px solid #a7aabb;

  ${mediaMobile(`
  display: none;
  `)}
`;

const Category = styled.div`
  position: relative;
`;

const CategoryHeader = styled.div`
  text-transform: uppercase;
`;

const CategoryDropHolder = styled.div`
  width: 110px;
  position: absolute;
  top: 35px;
  z-index: 2;
`;
