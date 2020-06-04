import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  mediaMobile,
  mediaTablet
} from "../../../../../styledComponents/MediaBreakpointsMixin";
import { DropMenu } from "./dropmenu";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { OverflowBody } from "../../../../Modal/modal.styles";
import { useOnClickOutside } from "../../HamburgerMenu/onClickOutside";

export const HeaderMenuElem = props => {
  const { categoriesAllData } = props;
  const [dropMenuState, setDropMenuState] = useState([]);
  const background = useRef();
  const dropMenu = useRef();
  useOnClickOutside([background, dropMenu], () => {
    const newDropMenu = dropMenuState.map(item => {
      const { menuName } = item;
      return {
        menuName
      };
    });
    setDropMenuState(newDropMenu);
  });

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
        isOpen:
          item === category && category.menuName !== "gift cards"
            ? !isOpen
            : false
      };
    });
    setDropMenuState(newDropMenu);
  };

  // const hideDropmenu = e => {
  //   const newDropMenu = dropMenuState.map(item => {
  //     const { menuName } = item;
  //     return {
  //       menuName,
  //       isOpen: false
  //     };
  //   });
  //   setDropMenuState(newDropMenu);
  // };

  const categoryList = dropMenuState.map(item => {
    const dropMenuArray = categoriesAllData.filter(
      child => child.parentId === item.menuName
    );

    return (
      <div key={item.menuName}>
        {item.isOpen ? (
          <Background>
            <CategoryDropBackground ref={background} />
            <OverflowBody />
          </Background>
        ) : null}
        <Category>
          <CategoryHeader
            onClick={() => openDropMenu(item)}
            style={{ borderColor: item.isOpen && "#007395" }}
          >
            {item.menuName !== "gift cards" ? (
              item.menuName
            ) : (
              <NavLink to="/giftсards">{item.menuName}</NavLink>
            )}
          </CategoryHeader>
          {item.isOpen ? (
            <DropMenu
              ref={dropMenu}
              onClick={() => openDropMenu(null)}
              dropMenuArray={dropMenuArray}
            />
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

const Background = styled.div`
  position: fixed;
  z-index: 2;
  left: 0;
  top: 179px;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  ${mediaTablet(`
    top: 165px;
  `)}
`;

const CategoryDropBackground = styled.div`
  height: 210px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: white;
  border-bottom: 1px solid black;
  border-top: 1px solid #a7aabb;

  ${mediaTablet(`
  height:260px;
  `)}

  ${mediaMobile(`
  display: none;
  `)}
`;

const Category = styled.div`
  position: relative;
`;

const CategoryHeader = styled.div`
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
`;
