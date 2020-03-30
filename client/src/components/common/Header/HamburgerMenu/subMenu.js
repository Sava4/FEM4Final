import React from "react";
// import { NavLink } from "react-router-dom";

// import styled from "styled-components";

export const SubMenu = props => {
  const {activeCategory, categories} = props;

  const subCategories = categories
    .filter(category => category.parentId === activeCategory.id)
    .map((category) => {
      return <div key={category.id}>{category.name}</div>
    });

  return (
    <div>
      <div>{activeCategory.name}</div>
      <div>{subCategories}</div>
    </div>
  )
};


