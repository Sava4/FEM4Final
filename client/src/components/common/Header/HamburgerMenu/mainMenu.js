import React, { useRef, useContext } from "react";

import { useOnClickOutside } from "./onClickOutside";
import { HamburgerButton } from "./burgerMobile";
import { SideMenu } from "./slideMenu";
import { MenuContext } from "./navState";

export const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <header ref={node}>
      <HamburgerButton />
      <SideMenu />
    </header>
  );
};
