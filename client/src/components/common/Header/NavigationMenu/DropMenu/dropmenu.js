import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const Dropmenu = props => {
  const { dropMenuArrey } = props;
  // console.log(dropMenuArrey);

  const [isOpen, setIsOpen] = useState(false);

  const ShowDropMenu = e => {
    setIsOpen(!isOpen);
  };
  let categArrey = dropMenuArrey.filter(item => item.parentId !== "null");

  const header = categArrey.length ? categArrey[0].parentId : " ";

  const dropMenu =
    categArrey.length &&
    categArrey.map(item => (
      <li key={item._id}>
        <NavLink to="">{item.name}</NavLink>
      </li>
    ));

  // const activeStyle = {{styles}}

  return (
    <p onClick={ShowDropMenu}>
      {header}
      {isOpen && (
        <DropHeaderMenuList onMouseLeave={ShowDropMenu}>
          {dropMenu}
        </DropHeaderMenuList>
      )}
    </p>
  );
};

const DropHeaderMenuList = styled.ul`
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  position: absolute;
  background-color: white;
  width: 100vw;

  & li {
    list-style-type: none;
    text-transform: none;
  }
  & :not(:first-child) {
    margin-top: 20px;
  }
`;
