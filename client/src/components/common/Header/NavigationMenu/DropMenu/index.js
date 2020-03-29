import React, { useState } from "react";

import { mediaMobile } from "../../../../../styled-components/media-breakpoints-mixin";

import styled from "styled-components";
import { Dropmenu } from "./dropmenu";

export const HeaderMenuElem = props => {
  const { categoriesAllData } = props;

  let categArrey = categoriesAllData.filter(item => item.parentId === "null");
  const initialState = [];

  categArrey.map(item => {
    const stateObj = {
      menuName: item.id,
      isOpen: false
    };
    initialState.push(stateObj);
    return initialState;
  });

  const [dropMenuState, setDropMenuState] = useState([]);

 
  const openDropmenu = e => {
   const newState = [];
    initialState.forEach(item => {
      const stateObj = {};
      stateObj.menuName = item.menuName;
      stateObj.isOpen =
        item.menuName === e.target.id && (item.isOpen = !item.isOpen);
      newState.push(stateObj);
    });

    setDropMenuState(newState);
  
  };

  const hideDropmenu =() =>{setDropMenuState(initialState)}


  const categList = categArrey.map(item => {
    const menuName = item.name;
  

    let dropMenuArrey = categoriesAllData.filter(
      item => item.parentId === `${menuName}`
    );

    const stateObj = dropMenuState
      ? dropMenuState.filter(item => item.menuName === menuName)
      : initialState.filter(item => item.menuName === menuName);

    const isShown = stateObj.length && stateObj[0].isOpen;

    return (
      <CategoriesLi  key={item._id} id={item.id} onClick={openDropmenu}  >
        {item.id}
        {isShown ? <Dropmenu dropMenuArrey={dropMenuArrey} style={{height:"209px"}}/> : null}
      </CategoriesLi>
    );
  });
  return <Categories >{categList}</Categories>;
};
//  onMouseLeave={hideDropmenu}
const Categories = styled.ul`
  padding: 0;
  margin: 0;
  font-size: 14px;
  width: 100vw;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  position: absolute; 
  cursor: pointer;
  z-index:3;
  background-color:  #FFFFFF;
  ${mediaMobile(`
    display: none;
  `)}
`;

const CategoriesLi = styled.ul`
  list-style-type: none;   
  :first-child{
    margin-left 230px;
  }
  :last-child{
    margin-right 230px;
  }
`;

