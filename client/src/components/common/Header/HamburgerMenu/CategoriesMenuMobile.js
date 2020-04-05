import React from "react";
import styled from "styled-components";

export const CategoriesMenuMobile = props => {
  const { categoriesAllData, onSelect } = props;

  const categories = categoriesAllData
    .filter(item => item.parentId === "null")
    .map(item => {
      return (
        <Item key={item.id} onClick={() => onSelect(item)}>
          {item.name}
        </Item>
      );
    });

  return <ItemsHolder>{categories}</ItemsHolder>;
};

const ItemsHolder = styled.div`
  padding-top: 100px;
  margin-left: 20px;
`;

const Item = styled.div`
  text-transform: uppercase;
  margin-bottom: 35px;
  cursor: pointer;
`;
