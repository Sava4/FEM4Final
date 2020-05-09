import React, { useState } from "react";
import { useSelector } from "react-redux";

import { SubMenu } from "./SubMenu";
import { CategoriesMenuMobile } from "./CategoriesMenuMobile";

export const NavigationMenuMobile = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const allCategories = useSelector(state => state.categories);

  return (
    <div>
      {!activeCategory && (
        <CategoriesMenuMobile
          onSelect={onCategorySelected}
          categoriesAllData={allCategories}
        />
      )}
      {activeCategory && (
        <SubMenu
          activeCategory={activeCategory}
          categories={allCategories}
          goBack={() => setActiveCategory(null)}
        />
      )}
    </div>
  );

  function onCategorySelected(category) {
    setActiveCategory(category);
  }
};
