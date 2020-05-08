import React from "react";
import { useHistory } from "react-router";
import { Item, SideBar } from "../PersonalDetails.styles";

export const SideBarMenu = () => {
  const history = useHistory();

  return (
    <SideBar>
      <Item onClick={onPersonalClick}>Personal Information</Item>
      <Item onClick={onPasswordClick}>Change Password</Item>
      <Item onClick={onAdressClick}>Adress Book</Item>
      <Item onClick={onOrdersClick}>Orders</Item>
      <Item onClick={onWishlistClick}>Wishlist</Item>
    </SideBar>
  );

  function onPersonalClick() {
    history.push("/account/personal-information");
  }

  function onPasswordClick() {
    history.push("/account/change-password");
  }

  function onAdressClick() {
    history.push("/account/adress-book");
  }

  function onOrdersClick() {
    history.push("/account/orders");
  }

  function onWishlistClick() {
    history.push("/account/wish-list");
  }
};
