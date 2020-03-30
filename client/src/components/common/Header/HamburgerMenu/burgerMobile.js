import React, { useContext } from "react";
import { MenuContext } from "./navState";
import styled from "styled-components";

export const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <MenuButton className={isMenuOpen ? "active" : " "} onClick={clickHandler}>
      <Bar />
      <Bar />
      <Bar />
    </MenuButton>
  );
};

const MenuButton = styled.button`
  display: flex;
  flex-direction: column;

  span {
    transition: all 0.3s ease-in-out;
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(4px, 5px);
    }

    span:nth-of-type(2) {
      opacity: 0;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(4px, -5px);
    }
  }
`;

const Bar = styled.span`
  width: 20px;
  height: 1px;
  margin-top: 2.5px;
  margin-bottom: 2.5px;
  background-color: #000000;
  z-index: 2;
`;
