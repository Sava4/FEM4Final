import React, { useRef, useContext } from "react";
import styled from "styled-components";

import { useOnClickOutside } from "./onClickOutside";
import { HamburgerButton } from "./burgerMobile";
import { SideMenu } from "./slideMenu";
import { MenuContext } from "./navState";
import { mediaMobile } from "../../../../styled-components/media-breakpoints-mixin";

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
