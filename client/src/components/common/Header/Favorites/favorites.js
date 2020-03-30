import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import favorites from "./favorites.png";
import { mediaMobile } from "../../../../styled-components/media-breakpoints-mixin";

export const Favorites = () => {
  const count = useSelector(state => state.favorites.favArr.length) || 0;

  return (
    <ServicesIcon to="/account/favorites">
      <FavoritesIcon />
      <span>({count})</span>
    </ServicesIcon>
  );
};

const FavoritesIcon = styled.div`
  width: 19px;
  height: 20px;
  margin-right: 5px;
  background-image: url(${favorites});
  background-repeat: no-repeat;
  background-size: contain;
`;

const ServicesIcon = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-left: 30px;

  ${mediaMobile(`
    display: none;
  `)}
`;
