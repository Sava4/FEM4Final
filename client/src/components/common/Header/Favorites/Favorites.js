import React from "react";
import { useSelector } from "react-redux";
import { ServicesIcon, FavoritesIcon } from "./favorites.styles";

export const Favorites = () => {
  const count = useSelector(state => state.favorites.favArr.length) || 0;

  return (
    <ServicesIcon to="/account/favorites">
      <FavoritesIcon />
      <span>({count})</span>
    </ServicesIcon>
  );
};
