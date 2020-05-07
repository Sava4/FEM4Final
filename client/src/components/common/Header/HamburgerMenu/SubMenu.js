import React, {  useContext }  from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";


import styled from "styled-components";
import arrow from "../../../Forms/OrderForm/arrow.png";

import { MenuContext } from "./navState";
import { setClearFilters } from "../../../../store/filters";

const mapStateToProps = store => ({
  filters: store.filters.menuState
});

export const SubMenu =connect(mapStateToProps ,{setClearFilters}) (props => {
  const { activeCategory, categories, goBack, setClearFilters } = props;
  const { toggleMenuMode} = useContext(MenuContext);  

  const subCategories = categories
    .filter(category => category.parentId === activeCategory.id)
    .map(category => {
      const { parentId, name, _id } = category;
      const nameForDropMenu =
        parentId === "by zarina"
          ? name.replace("ZARINA", "").replace("By", "")
          : name;         
      return <Item key={_id} onClick={() => {setClearFilters(); goBack(); toggleMenuMode()} }>
                <NavLink to={`/headerMenu/${name}`}>
                    {nameForDropMenu}
                </NavLink>                
              </Item>;
    });


  return (
    <Holder>
      <CategoryHolder>
        <Arrow onClick={goBack} />
        <Category>{activeCategory.name}</Category>
      </CategoryHolder>
      <SubCategory>{subCategories}</SubCategory>
    </Holder>
  );
});

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
