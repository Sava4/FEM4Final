import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { MenuContext } from "./navState";
import { NavigationMenuMobile } from "./NavigationMenuMobile";
import { OverflowBody } from "../../../Modal/modal.styles";

export const SideMenu = () => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <Menu open={isMenuOpen}>
      <NavigationMenuMobile />
      {isMenuOpen && <OverflowBody />}
    </Menu>
  );
};

SideMenu.propTypes = {
  children: PropTypes.node
};

const Menu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  min-width: 100vw;
  background-color: #ffffff;
  transform: translateX(-100%);
  transition: all 0.3s ease-in-out;

  ${props =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;
