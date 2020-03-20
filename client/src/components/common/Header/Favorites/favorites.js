import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import favorites from "./favorites.png";
import { mediaMobile } from "../../../../styled-components/media-breakpoints-mixin";

export const Favorites = () => {
  const count = useSelector(state => state.favorites.favArr.length) || 0;

  return (
    <ServicesIcon>
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

const ServicesIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;

  ${mediaMobile(`
    display: none;
  `)}
`;
