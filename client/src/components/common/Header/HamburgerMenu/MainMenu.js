import React, { useRef, useContext } from "react";
import styled from "styled-components";

import { useOnClickOutside } from "./onClickOutside";
import { HamburgerButton } from "./BurgerMobile";
import { SideMenu } from "./SlideMenu";
import { MenuContext } from "./navState";
import { mediaMobile } from "../../../../styledComponents/MediaBreakpointsMixin";

export const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <Header ref={node}>
      <HamburgerButton />
      <SideMenu />
    </Header>
  );
};

const Header = styled.div`
  display: none;

  ${mediaMobile(`
  display: block;
  `)}
`;
