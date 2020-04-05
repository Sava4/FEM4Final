import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { HeaderMenuElem } from "./DropMenu";

export const Navigation = () => {
  const allCategories = useSelector(state => state.categories);

  return (
    <HeaderDropMenu>
      <HeaderMenuElem categoriesAllData={allCategories} />
    </HeaderDropMenu>
  );
};

const HeaderDropMenu = styled.div``;
