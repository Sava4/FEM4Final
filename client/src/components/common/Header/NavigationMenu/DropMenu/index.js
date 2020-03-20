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

  // useEffect(()=>{
  //   initialState && setDropMenuState(initialState)
  // }, [])

  const openDropmenu = e => {
    // console.log(e.target.id);
    const newState = [];
    initialState.forEach(item => {
      const stateObj = {};
      stateObj.menuName = item.menuName;
      stateObj.isOpen =
        item.menuName === e.target.id && (item.isOpen = !item.isOpen);
      newState.push(stateObj);
    });

    setDropMenuState(newState);
    // initialState =  newState
  };

  // }
  // console.log(dropMenuState);
  const categList = categArrey.map(item => {
    const menuName = item.name;
    // console.log(menuName)

    let dropMenuArrey = categoriesAllData.filter(
      item => item.parentId === `${menuName}`
    );

    const stateObj = dropMenuState
      ? dropMenuState.filter(item => item.menuName === menuName)
      : initialState.filter(item => item.menuName === menuName);

    const isShown = stateObj.length && stateObj[0].isOpen;
    // console.log(item)
    return (
      <CategoriesLi key={item._id} id={item.id} onClick={openDropmenu}>
        {item.id}
        {isShown ? <Dropmenu dropMenuArrey={dropMenuArrey} /> : null}
      </CategoriesLi>
    );
  });
  return <Categories>{categList}</Categories>;
};

const Categories = styled.ul`
  padding: 0;
  margin: 0;
  font-size: 14px;
  width: 70vw;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  position: relative;
  cursor: pointer;

  ${mediaMobile(`
    display: none;
  `)}
`;

const CategoriesLi = styled.ul`
  list-style-type: none;
`;
