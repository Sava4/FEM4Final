import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  mediaMobile,
  mediaTablet
} from "../../../../../styledComponents/MediaBreakpointsMixin";
import { DropMenu } from "./dropmenu";
import { NavLink } from "react-router-dom";
import { OverflowBody } from "../../../../Modal/modal.styles";
import { useOnClickOutside } from "../../HamburgerMenu/onClickOutside";

export const HeaderMenuElem = props => {
  const { categoriesAllData } = props;
  const [dropMenuState, setDropMenuState] = useState([]);
  const background = useRef();
  const dropMenu = useRef();

  const isOpen = dropMenuState.some(category => category.isOpen);

  useOnClickOutside([background, dropMenu], () => {
    const newDropMenu = dropMenuState.map(item => {
      const { menuName } = item;
      return {
        menuName,
        isOpen: false
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

  function onItemSelected() {
    closeMenu();
  }

  function closeMenu() {
    const newDropMenu = dropMenuState.map(item => {
      return {
        ...item,
        isOpen: false
      };
    });

    setDropMenuState(newDropMenu);
  }

  const categoryList = dropMenuState.map(item => {
    const dropMenuArray = categoriesAllData.filter(
      child => child.parentId === item.menuName
    );

    return (
      <div key={item.menuName}>
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
              onSelect={onItemSelected}
              dropMenuArray={dropMenuArray}
            />
          ) : null}
        </Category>
      </div>
    );
  });

  return (
    <Categories>
      {isOpen && (
        <Background>
          <CategoryDropBackground ref={background} />
          <OverflowBody />
        </Background>
      )}
      {categoryList}
    </Categories>
  );
};

const Categories = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  cursor: pointer;
`;

const Background = styled.div`
  position: absolute;
  z-index: 2;
  left: 0;
  top: 40px;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const CategoryDropBackground = styled.div`
  height: 210px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
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
  border-bottom: 2px solid transparent;
`;
