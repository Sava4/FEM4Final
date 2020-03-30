import React, {useEffect, useState} from "react";
import axios from "axios";

// import styled from "styled-components";
import { SubMenu } from "./subMenu";
import {CategoriesMenuMobile} from "./categoriesMenuMobile";

export const NavigationMenuMobile = () => {
  const [categoriesAllData, setCategoriesAllData] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/catalog")
      .then(result => {
        setCategoriesAllData(result.data);
      })
      .catch(err => {
      });
  }, []);

  return (
    <div>
      {!activeCategory &&
      <CategoriesMenuMobile onSelect={onCategorySelected} categoriesAllData={categoriesAllData}/>
      }
      {activeCategory && <SubMenu activeCategory={activeCategory} categories={categoriesAllData}/>}
    </div>
  );

  function onCategorySelected(category) {
    setActiveCategory(category);
  }
};


