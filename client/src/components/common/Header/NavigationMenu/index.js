import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { addCategory } from "./CategoriesActions/newCategory";
import { deleteCategory } from "./CategoriesActions/delateCategory";

import { HeaderMenuElem } from "./DropMenu";
// addCategory();
// deleteCategory()
export const Navigation = () => {
  const allCategories = useSelector(state => state.categories);

  return (
    <HeaderDropMenu>
      <HeaderMenuElem categoriesAllData={allCategories} />
    </HeaderDropMenu>
  );
};

const HeaderDropMenu = styled.div``;
