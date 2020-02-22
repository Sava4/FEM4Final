import React, { useState } from "react";

import styled from "styled-components";

export const Dropmenu = props => {
  const { dropMenuArrey } = props;

  const [isOpen, setIsOpen] = useState(false);

  const ShowDropMenu = e => {
    setIsOpen(!isOpen);
  };
  let categArrey = dropMenuArrey.filter(item => item.parentId !== "null");

  const header = categArrey.length ? categArrey[0].parentId : " ";

  const dropMenu =
    categArrey.length &&
    categArrey.map(item => <li key={item._id}>{item.name}</li>);

  return (
    <div>
      <p onClick={ShowDropMenu}>{header}</p>
      {isOpen && (
        <DropHeaderMenuList onMouseLeave={ShowDropMenu}>
          {dropMenu}
        </DropHeaderMenuList>
      )}
    </div>
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
