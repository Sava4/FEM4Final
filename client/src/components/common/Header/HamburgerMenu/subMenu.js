import React from "react";
// import { NavLink } from "react-router-dom";

import styled from "styled-components";
import arrow from "../../../Forms/OrderForm/arrow.png";

export const SubMenu = props => {
  const { activeCategory, categories, goBack } = props;

  const subCategories = categories
    .filter(category => category.parentId === activeCategory.id)
    .map(category => {
      return <Item key={category.id}>{category.name}</Item>;
    });

  return (
    <Holder>
      <CategoryHolder>
        <Arrow onClick={goBack}/>
        <Category>{activeCategory.name}</Category>
      </CategoryHolder>
      <SubCategory>{subCategories}</SubCategory>
    </Holder>
  );
};

const Item = styled.div`
  margin-top: 22px;
  cursor: pointer;
`;

const Holder = styled.div`
  padding-top: 100px;
`;

const CategoryHolder = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid silver;
`;

const Category = styled.div`
  margin: 0 auto;
  text-transform: uppercase;
`;

const Arrow = styled.div`
  width: 14px;
  height: 14px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${arrow});
  cursor: pointer;
`;

const SubCategory = styled.div`
  margin-left: 20px;
`;
