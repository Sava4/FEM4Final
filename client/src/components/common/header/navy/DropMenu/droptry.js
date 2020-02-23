import React, { useState } from "react";
import styled from "styled-components";

const dropmenu = [
  {
    id: "rimgs",
    name: "Rings",
    subcateg: [
      {
        id: "jevelry",
        name: "Jevelry"
      },
      {
        id: "engagement",
        name: "engagement"
      }
    ]
  },
  {
    id: "earrimgs",
    name: "Earrings",
    subcateg: [
      {
        id: "jevelryEarrings",
        name: "JevelryEarrings"
      },
      {
        id: "engagementEarrings",
        name: "engagementEarrings"
      }
    ]
  }
];

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ShowDropMenu = e => {
    console.log(e.target.id);
    setIsOpen(!isOpen);
  };

  const topMenu = dropmenu.map(item => {
    const drop = item.subcateg.map(it => <li key={it.id}>{it.name}</li>);

    return (
      <li key={item.id} id={item.id} onClick={ShowDropMenu}>
        {item.name}
        <ul>{isOpen && drop}</ul>
      </li>
    );
  });

  return <MenuUi>{topMenu}</MenuUi>;
};

const MenuUi = styled.ul`
  display: flex;
  & li {
    margin-left: 10px;
    list-style-type: none;
  }
`;
